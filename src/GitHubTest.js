var fs = require('fs');

fs.writeFile("test", "Hey there!", function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("File saved!");
});
