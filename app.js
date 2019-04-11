const http = require('http')
const fs = require('fs');
const db = require('./db');


http.get({
  hostname: 'api.scb.se',
  port: 80,
  path: '/OV0104/v1/doris/sv/ssd/HE/HE0103/HE0103E/Boendeutgift',
  agent: false
}, (res) => {
  var str = '';

  res.on('data', function(chunk) {
    str += chunk;
  });

  res.on('end', function() {
    console.log(str);
    db.saveLivingExpense(JSON.parse(str));
    // fs.writeFile('test.json', str, 'utf8', callback);
  });
})


db.getLivingExpense();
