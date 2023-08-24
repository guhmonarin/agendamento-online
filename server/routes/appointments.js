const express = require('express');
const router = express.Router();
const mysqlConnection = require ('../config/database.js');


// Rota para listar todos os compromissos
router.get('/appointments', (req, res) => {
    const query = 'SELECT * FROM compromissos';

    mysqlConnection.query(query, (err, results) => {
        if(err) {
            console.error('Erro ao buscar os compromissos: ', err);
            res.status(500).json({error: 'Erro ao buscar os compromissos'});
        } else {
            res.status(200).json(results);
        }
    });

});

//Rota para criar um novo compromisso
router.post('/appointments', (req, res) => {
    const {cliente_id, data_agendamento } = req.body;
    const query = 'INSERT INTO compromissos (cliente_id, data_agendamento) VALUES(?, ?)';

    mysqlConnection.query(query, [cliente_id, data_agendamento], (err, results) => {
        if(err) {
            console.error('Erro ao criar o compromisso:', err);
            res.status(500).json({ error: 'Erro ao criar compromisso'});
        } else {
            res.status(201).json({message: 'Compromisso criado com sucesso'});
        }
    });
});

// Rota para buscar horários disponiveis
router.get('/available-times', (req, res) => {
    const query = `
    SELECT DISTINCT horario_disponivel
    FROM horarios
    WHERE horario_disponivel NOT in (
        SELECT data_agendamento
        FROM compromissos
    )
    `;

    mysqlConnection.query(query, (err, results) => {
        if(err) {
            console.error('Erro ao buscar horários disponiveis:', err);
            res.status(500).json({error: 'Erro ao buscar horários disponiveis'});
        } else {
            const availableTimes = results.map(result => result.horario_disponivel);
            res.status(200).json(availableTimes);
        }
    });
});

module.exports = router;