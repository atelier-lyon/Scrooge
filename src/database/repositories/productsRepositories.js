const { connect } = require('../configurations/db.config');
const logger = require('../../logger/api.logger');

class ProductsRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
    }

    async getProducts() {

        try {
            const products = await this.db.products.findAll();
            console.log('product:::', products);
            return products;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createProduct(product) {
        let data = {};
        try {
            data = await this.db.products.create(product);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateProduct(product) {
        let data = {};
        try {
            data = await this.db.products.update({...product}, {
                where: {
                    id: product.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteProduct(productId) {
        let data = {};
        try {
            data = await this.db.products.destroy({
                where: {
                    id: productId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

}

module.exports = new ProductsRepository();