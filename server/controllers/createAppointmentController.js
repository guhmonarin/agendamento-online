const mysqlConnection = require('../config/database');

exports.createAppointment = (req, res) => {
    console.log(req.body);
    const {cliente_id, data_agendamento, horario_agendamento } = req.body;
    const query = 'INSERT INTO compromissos (cliente_id, data_agendamento, horario_agendamento) VALUES(?, ?, ?)';

    mysqlConnection.query(query, [cliente_id, data_agendamento, horario_agendamento], (err, results) => {
        if(err) {
            console.error('Erro ao criar o compromisso:', err);
            res.status(500).json({ error: 'Erro ao criar compromisso'});
        } else {
            res.status(201).json({message: 'Compromisso criado com sucesso'});
        }
    });
};