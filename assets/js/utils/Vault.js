export default class Vault {
    static CACHE_KEY = 'Vault'

    static instances = {};

    name = null

    data = {};

    isUseLocalStorage = false

    /**
     *
     * @param name
     * @param isUseLocalStorage
     * @returns {Vault}
     */
    static create(name, isUseLocalStorage = false) {
        if(Vault.instances.hasOwnProperty(name))
            return Vault.instances[name]

        const vault = new Vault()
        vault.name = name
        vault.isUseLocalStorage = isUseLocalStorage
        Vault.instances[name] = vault

        if(isUseLocalStorage) {
            const localStorageData = localStorage.getItem(Vault.CACHE_KEY + '_' + name)
            if(localStorageData === null) {
                localStorage.setItem(Vault.CACHE_KEY + '_' + name, JSON.stringify({}))
            } else {
                vault.data = JSON.parse(localStorageData)
            }
        }

        return vault
    }

    clear() {
        this.data = {};
        if(this.isUseLocalStorage)
            localStorage.setItem(Vault.CACHE_KEY + '_' + this.name, JSON.stringify({}))
    }

    get(key) {
        return this.data.hasOwnProperty(key) ? this.data[key] : undefined
    }

    set(key, value) {
        this.data[key] = value
        if(this.isUseLocalStorage) {
            localStorage.setItem(Vault.CACHE_KEY + '_' + this.name, JSON.stringify(this.data))
        }
    }
}
