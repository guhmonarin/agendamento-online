const mysqlConnection = require('../config/database');

exports.getAvailableTimes = (req, res) => {
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
};
