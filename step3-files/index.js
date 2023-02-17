const fs = require('fs/promises');

async function main() {
    const bookList = ['./../README.md', './../LICENSE'];
    const promises = []
    bookList.forEach(book => {
        promises.push(computeBooks(book))
    })

    Promise.all(promises)
        .then(result => {
            console.log(mergeCountedChar(result))
        });
}

async function computeBooks(link) {
    return readBook(link)
        .then(result => {
            return countCharFromFile(result)
        })
}

async function readBook(link) {
    console.log(`Reading book ${link}`)
    return fs.readFile(link, 'utf8');
}

function countCharFromFile(text) {
    const map = new Map()
    text.split('').forEach(element => {
        if(map.get(element) === undefined) {
            map.set(element, 1)
        } else {
            map.set(element, map.get(element)+1)
        }
    });
    return map
}

function mergeCountedChar(data) {
    const merged = data[0]
    for (let index = 1; index < data.length; index++) {
        for (const [key, value] of data[index]) {
            if(merged.get(key) === undefined) {
                merged.set(key, value)
            } else {
                merged.set(key, merged.get(key)+ value)
            }
          }
        
    }

    return new Map([...merged].sort());
}

main();