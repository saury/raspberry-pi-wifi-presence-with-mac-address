const fs = require("fs");
const path = require("path");

fs.readFile("/proc/net/arp", "utf8", (err, data) => {
    if (err) throw err;
    
    // match mac address
    let result = data.match(/([A-Fa-f0-9]{2}:){5}[A-Fa-f0-9]{2}/gi);
    result = result.join("\n");

    // write result to presence.wifi
    fs.writeFile(
        path.join(__dirname, "presence.wifi"),
        result,
        "utf8",
        (err) => {
            if (err) throw err;
        }
    );
});
