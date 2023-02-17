const addon = require('./sum/dist/index.node');

function main() {
    console.log(addon.sum(3, 4));
    let array = addon.makeArray(10000);

    console.log(array.length)

    console.log(addon.sumArray([1,2,3]))

    console.time('time')
    addon.addArray(array)
    console.timeEnd('time')


    const arr = []
    console.time('time2')
    array.forEach(element => {
        arr.push(addon.addNumber(element))
    });
    console.timeEnd('time2')
}

main();