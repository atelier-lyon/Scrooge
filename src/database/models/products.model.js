module.exports = (sequelize, DataTypes, Model) => {

    class Products extends Model {}

    Products.init({
        // Model attributes are defined here
        id: {
            type: DataTypes.UUID,
            allowNUll: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
            // allowNull defaults to true
        },
        Price: {
            type: DataTypes.FLOAT,
            allowNUll: false
            // allowNull defaults to true
        },
        saleDisabled: {
            type: DataTypes.BOOLEAN
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'products' // We need to choose the model name
    });

    return Products;
}