const mysqlConnection = require('../config/database');

exports.getAppointments = (req, res) => {
    const query = 'SELECT * FROM compromissos';

    mysqlConnection.query(query, (err, results) => {
        if(err) {
            console.error('Erro ao buscar os compromissos: ', err);
            res.status(500).json({error: 'Erro ao buscar os compromissos'});
        } else {
            res.status(200).json(results);
        }
    });
};