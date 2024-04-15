const { Model, DataTypes } = require('sequelize');

class Categorias extends Model {
    static init(sequelize){
        super.init({
            descricao_categoria: DataTypes.STRING,
        }, {
            sequelize 
        });
    }
}


module.exports = Categorias