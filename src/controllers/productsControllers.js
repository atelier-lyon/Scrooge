const productService  = require('../services/productsServices');
const logger = require('../logger/api.logger');

class productController {

  async getProducts() {
    logger.info('Controller: getProducts')
    return await productService.getProducts();
  }

  async createProduct(product) {
    logger.info('Controller: createProduct', product);
    return await productService.createProduct(product);
  }

  async updateProduct(product) {
    logger.info('Controller: updateProduct', product);
    return await productService.updateProduct(product);
  }

  async deleteProduct(productId) {
    logger.info('Controller: deleteProduct', productId);
    return await productService.deleteProduct(productId);
  }
}
module.exports = new productController();