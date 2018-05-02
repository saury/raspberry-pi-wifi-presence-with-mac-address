const fs = require("fs");

fs.readFile("./temp.txt", "utf8", function(err, data) {
    if(err) throw err;
    // match mac address
    var result = data.match(/([A-Fa-f0-9]{2}:){5}[A-Fa-f0-9]{2}/gi);
    result = result.join('\n');
    fs.writeFile('./presence.wifi', result, 'utf8', function(err){
        if(err) throw err;
    })
});
