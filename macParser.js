const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "temp.txt"), "utf8", function(err, data) {
    if (err) throw err;
    
    // match mac address
    var result = data.match(/([A-Fa-f0-9]{2}:){5}[A-Fa-f0-9]{2}/gi);
    result = result.join("\n");

    // write result to presence.wifi
    fs.writeFile(
        path.join(__dirname, "presence.wifi"),
        result,
        "utf8",
        function(err) {
            if (err) throw err;
        }
    );
});
