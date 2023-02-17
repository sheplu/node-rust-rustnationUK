const addon = require('./sum/dist/index.node');

function main() {
    // base call Node-Rust
    console.log(addon.sum(3, 4));
    let array = addon.makeArray(10000);

    console.log(array.length)
    // call another function
    console.log(addon.sumArray([1,2,3]))

    // First perf test with the full array
    console.time('time')
    addon.addArray(array)
    console.timeEnd('time')


    // Second perf test one item per one item
    const arr = []
    console.time('time2')
    array.forEach(element => {
        arr.push(addon.addNumber(element))
    });
    console.timeEnd('time2')
}

main();