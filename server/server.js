var https = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.static('pages'));
app.use(express.static('jscode'));
app.use(express.static('style'));
app.get('/', function (req, res) {
    fs.readFile('./pages/index.html', function (err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, { "Content-Type": "text/html" });
        }
        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data.toString());
        }
        res.end();
    })
    //res.sendFile(__dirname + '/home.html')
    // res.send('node test')
});
app.get('/user', function (req, res) {
    // console.log('home run')
    var user = {
        name: 'ylan',
        age: 25
    }

    // fs.readFile('./pages/home.html', function (err, data) {
    //     if (err) {
    //         console.log(err);
    //         res.writeHead(404, { "Content-Type": "text/html" });
    //     }
    //     else {
    //         res.writeHead(200, { "Content-Type": "text/html" });
    //         res.write(data.toString());
    //     }
    //     res.end();
    // })
    res.json({ user: user })
});
// var server = https.createServer(function (req, response) {
//     // res.end(__dirname)
//     //res.sendFile(__dirname + '/home.html')
//     // res.end('test')
//     fs.readFile(__dirname + '/home.html', function (err, data) {
//         if (err) {
//            console.log(err);
//            response.writeHead(404, {'Content-Type': 'text/html'});
//         }else{             
//            response.writeHead(200, {'Content-Type': 'text/html'});    
//            response.write(data.toString());        
//         }
//         response.end();
//      }); 
// });
app.listen('8080')
console.log('server start');