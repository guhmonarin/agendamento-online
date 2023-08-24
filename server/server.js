const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const appointmentsRoutes = require('./routes/appointments');

app.use('/api', appointmentsRoutes);

app.listen(PORT, () => {
    console.log(`O servidor está ouvindo na porta ${PORT}`);
})

