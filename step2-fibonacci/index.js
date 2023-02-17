const addon = require('./fibonacci-nb/dist/index.node');

const number = 40

function main() {
    console.log("Hello, world!");
    let i = 0;
    console.time('time')
    while (i < 10) {
        console.log(fibonacci(number));
        i = i + 1
    }
    console.timeEnd('time')
}

function fibonacci(x) {
    if(x <= 2) {
        return 1
    } else {
        return fibonacci(x-1) + fibonacci(x-2)
    }
}

function mainAddon() {
    console.log("Hello, world!");
    let i = 0;
    console.time('time')
    while (i < 10) {
        console.log(addon.fibonacci(number));
        i = i + 1
    }
    console.log(addon.hello('world'))
    console.timeEnd('time')
}

//main()
mainAddon()