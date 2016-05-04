var validator = require('./index.js');

var schema = [
    {
        property: "id",
        type: Number
    },
    {
        property: "date",
        type: String,
        regex: /^\d{4}-\d{2}-\d{2}$/
    },
    {
        property: "text",
        type: String
    }
];

var wrongObject = {
    id: "foo",
    date: "bar",
    text: 0
}

var correctObject = {
    id: 3,
    date: "2014-01-01",
    text: "foobar"
}

console.log('Running "validator(schema, wrongObject)", should return false');
console.log('Result: ' + validator(schema, wrongObject));

console.log('Running "validator(schema, correctObject)", should return true');
console.log('Result: ' + validator(schema, correctObject));
