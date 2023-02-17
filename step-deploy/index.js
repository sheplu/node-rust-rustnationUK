const addon = require('./index.node');

console.log('Loading function');


exports.handler = async (event, context) => {
    console.log(addon.sum(3, 4));
    return "hello world";
};
