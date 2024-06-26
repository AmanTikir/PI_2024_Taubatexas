const { Model, DataTypes } = require('sequelize');

class Estoques extends Model {
    static init(sequelize) {
        super.init({
            id_estoque: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            localizacao_estoque: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE
        }, {
            sequelize,
            tableName: 'estoque'
        });
    }

    static associate(models){
        this.hasMany(models.Materiais, {foreignKey:'id_estoque', as: 'materiais'})

    }
}


module.exports = Estoques
