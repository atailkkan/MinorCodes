const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    const blog = { id: 1, title: "Blog title", description: "Blog description" };
    res.render('index', { blog });
});

app.listen(3000, () => {
    console.log('Sunucu başlatıldı.');
});