const http = require('http');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.write('Anasayfaya Hoşgeldiniz.');
            break;
        case '/hakkimda':
            res.write('Hakkımda Sayfasına Hoşgeldiniz.');
            break;
        case '/iletisim':
            res.write('İletişim Sayfasına Hoşgeldiniz.');
            break;
        default:
            res.write('Sayfa Bulunamadı!');
            break;
    }
    res.end();
});

server.listen(5000, () => {
    console.log('Server başlatıldı.');
});