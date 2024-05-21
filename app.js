const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.set('view engine', 'ejs');
app.use(express.json());
app.use('/api', userRoutes);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/main.html'); // main.html 파일을 보냄
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
