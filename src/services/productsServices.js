const productRepository  = require('../database/repositories/productsRepositories');

class ProductService {

    constructor() {}

    async getProducts() {
        return await productRepository.getProducts();
    }

    async createProduct(product) {
        return await productRepository.createProduct(product);
    }

    async updateProduct(product) {
        return await productRepository.updateProduct(product);
    }

    async deleteProduct(productId) {
        return await productRepository.deleteProduct(productId);
    }

}

module.exports = new ProductService();