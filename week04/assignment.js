const fs = require('fs');
fs.readFile(__dirname + '\\assignment.txt', 'utf-8', function(error, data) {
    if (error) {
        console.error(error);
    } else {
        var count = 0
        const lines = data.split("\n")
        for (var line in lines) {
            const words = line.split(" ")
            count = count + words.length
        }
        console.log(`Words: ${count}`)
    }
});