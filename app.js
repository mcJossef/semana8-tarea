const express = require('express');
const Sequelize = require('sequelize');
const app = express();

// Definimos los parámetros de conexión
const sequelize = new Sequelize('Farmacia', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Definimos el modelo Especialidad
const Especialidad = sequelize.define('Especialidad', {
    CodEspec: { type: Sequelize.INTEGER, primaryKey: true },
    descripcionEsp: Sequelize.STRING
}, {
    freezeTableName: true // Esto evita que Sequelize pluralice el nombre de la tabla
});

// Definimos el modelo TipoMedic
const TipoMedic = sequelize.define('TipoMedic', {
    CodTipoMed: { type: Sequelize.INTEGER, primaryKey: true },
    descripcion: Sequelize.STRING
}, {
    freezeTableName: true // Evita la pluralización
});

// Definimos el modelo Medicamento
const Medicamento = sequelize.define('Medicamento', {
    CodMedicamento: { type: Sequelize.INTEGER, primaryKey: true },
    descripcionMed: Sequelize.STRING,
    fechaFabricacion: Sequelize.DATE,
    fechaVencimiento: Sequelize.DATE,
    Presentacion: Sequelize.STRING,
    stock: Sequelize.INTEGER,
    precioVentaUni: Sequelize.DECIMAL(10, 2),
    precioVentaPres: Sequelize.DECIMAL(10, 2),
    CodTipoMed: {
        type: Sequelize.INTEGER,
        references: {
            model: TipoMedic, // Relaciona con la tabla TipoMedic
            key: 'CodTipoMed'
        }
    },
    CodEspec: {
        type: Sequelize.INTEGER,
        references: {
            model: Especialidad, // Relaciona con la tabla Especialidad
            key: 'CodEspec'
        }
    },
    Marca: Sequelize.STRING
}, {
    freezeTableName: true // Evita la pluralización
});

// Definir relaciones
Medicamento.belongsTo(TipoMedic, { foreignKey: 'CodTipoMed' });
Medicamento.belongsTo(Especialidad, { foreignKey: 'CodEspec' });

// Autenticamos la conexión
sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos OK');
    })
    .catch(error => {
        console.log('Error de conexión a la base de datos: ' + error);
    });

// Sincronizamos los modelos con la base de datos (crear las tablas si no existen)
sequelize.sync()
    .then(() => {
        console.log('Modelos sincronizados con la base de datos');
    })
    .catch(error => {
        console.log('Error al sincronizar los modelos: ' + error);
    });

// Mostramos todos los registros de la tabla Medicamento junto con las relaciones
Medicamento.findAll({
    attributes: ['CodMedicamento', 'descripcionMed', 'stock', 'precioVentaUni', 'Marca'],
    include: [
        { model: TipoMedic, attributes: ['descripcion'] },
        { model: Especialidad, attributes: ['descripcionEsp'] }
    ]
})
    .then(medicamentos => {
        const resultados = JSON.stringify(medicamentos, null, 2);
        console.log(resultados);
    })
    .catch(error => {
        console.log('No hay registros: ' + error);
    });

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
