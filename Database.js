export default class Database {
    constructor(name, defaultObjectValue = {}) {
        const object = (() => {
            const loacalDataTex = localStorage.getItem(name)
            let data = {}

            if (!loacalDataTex) {
                localStorage.setItem(name, JSON.stringify(defaultObjectValue))
                data = defaultObjectValue
            } else {
                data = JSON.parse(loacalDataTex)
            }

            return data
        })()

        this.dataset = this.creataDataProxy(name, object)

        this.clear = () => {
            this.dataset = this.creataDataProxy(name, defaultObjectValue)
            localStorage.setItem(name, JSON.stringify(this.dataset))
        }
    }

    creataDataProxy(name, object = {}) {
        return new Proxy(object, {
            get: (target, prop) => {
                return Reflect.get(target, prop)
            },
            set: (target, prop, value) => {
                Reflect.set(target, prop, value)
                localStorage.setItem(name, JSON.stringify(target))
                return true
            },
        })
    }
}
