const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));

const inspirations = [
  "¡El que madruga... tiene sueño todo el día!",
  "No te preocupes, si el plan A falla... ¡el alfabeto tiene 25 letras más!",
  "Recuerda: hasta los lunes tienen un final feliz... ¡se llaman viernes!",
  "Tu esfuerzo será recompensado... algún día, tal vez... ¡cuando menos lo esperes!",
  "¿Te sientes mal? ¡Recuerda que las galletas nunca te juzgan!",
];

app.get('/api/inspire', (req, res) => {
  const randomInspiration = inspirations[Math.floor(Math.random() * inspirations.length)];
  res.json({ message: randomInspiration });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`BFF ejecutándose en el puerto ${PORT}`));
