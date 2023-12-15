module.exports = (sequelize, DataTypes) => {

// this is a model page
    const Product = sequelize.define("product", {
    
        title: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.BOOLEAN
        }
    })

    return Product

}

   