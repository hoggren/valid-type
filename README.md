### valid-type
Type checking, regex testing and property exist for Javascript.

#### Usage
    var schema = [
        { property: "id", type: Number },
        { property: "date", type: String, regex: /^\d{4}-\d{2}-\d{2}$/ },
        { property: "text", type: String }
    ];

    if(validator(schema, objectToTest)) {
        console.log("validation ok");
    } else {
        console.log("validation failed");
    }

**See `test.js` in package for more information**
