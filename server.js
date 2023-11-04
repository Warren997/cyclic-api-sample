const express = require('express');
const app = express()
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json("go to port /person");
});

app.get('/person', (req, res) => {
    const person = {
        "name": "John Doe",
        "age": 30,
        "email": "john.doe@example.com"
    }
    res.json(person);
});

// Start Node
app.listen(PORT, ()=>{
    console.log(`it's alive on https://localhost:${PORT}`)
})