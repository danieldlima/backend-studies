const express = require("express");

const app = express();
app.set('port', 5000);
app.use(express.json());


app.get('/', (req, res, next) => {
    console.log("Teste de API");

    return res.status(200).json({ message: "Hello Daniel Lima" });
});

app.post('/soma/:num1/:num2', (req, res, next) => {
    const { num1, num2 } = req.params;

    const data = {
        numero1: parseInt(num1),
        numero2: parseInt(num2),
        soma: parseInt(num1) + parseInt(num2)
    };

    return res.status(200).json(data);
});

app.put('/texto', (req, res, next) => {
    const { texto } = req.body;

    return res.status(200).json({ message: texto });
});

app.listen(5000, () => {
    console.log("Backend Service from Daniel Lima Studies");
    console.log("Running on port: " + 5000);
});