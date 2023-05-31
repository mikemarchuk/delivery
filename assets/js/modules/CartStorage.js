import Vault from "../utils/Vault";

export default class CartStorage {
    static shopId = null

    static products = {}

    static vault = Vault.create('shop-cart', true)

    static isWake = false

    static clear() {
        CartStorage.shopId = null
        CartStorage.products = {}
        CartStorage.vault.clear()
    }

    static getProducts() {
        return CartStorage.products
    }

    static getShop() {
        return CartStorage.shopId
    }

    static productAdd(productId) {
        CartStorage.products[productId] = 1
        CartStorage.vault.set('products', CartStorage.products)
    }

    static productCountSet(productId, count) {
        if (count < 1) {
            CartStorage.productRemove(productId)
        } else {
            CartStorage.products[productId] = count
        }
        CartStorage.vault.set('products', CartStorage.products)
    }

    static productDecrement(productId) {
        if (CartStorage.products[productId] <= 1) {
            CartStorage.productRemove(productId)
        } else {
            CartStorage.products[productId] -= 1
            CartStorage.vault.set('products', CartStorage.products)
        }
    }

    static productIncrement(productId) {
        CartStorage.products[productId] += 1
        CartStorage.vault.set('products', CartStorage.products)
    }

    static productRemove(productId) {
        delete CartStorage.products[productId]
        CartStorage.vault.set('products', CartStorage.products)
    }

    static setShop(shopId) {
        CartStorage.shopId = shopId
        CartStorage.products = {}
        CartStorage.vault.set('shopId', shopId)
        CartStorage.vault.set('products', {})
    }

    static wake() {
        if (CartStorage.isWake) {
            return
        }

        CartStorage.shopId = CartStorage.vault.get('shopId')
        CartStorage.products = CartStorage.vault.get('products')
        CartStorage.isWake = true
    }
}