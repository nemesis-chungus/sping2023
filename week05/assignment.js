const readline = require('readline')

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log("\nPress c to clear, s to start, q to quit\n")
var count = 0
var delta = 0
setInterval(() => {
    count += delta
    console.log("\x1b[1A" + `${count}`)
}, 1000)

process.stdin.on('keypress', (character, key) => {
    if (character == 'c') {
        console.clear()
    } else if (character == 's') {
        delta = 1
    } else if (character == 'q') {
    }
})
