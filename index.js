module.exports = function(schema, obj) {
    for (prop of schema) {
        if(!obj.hasOwnProperty(prop.property))
            return false;

        if(obj[prop.property].constructor !== prop.type)
            return false;

        if(prop.hasOwnProperty('regex')) {
            if(!prop.regex.test(obj[prop.property]))
                return false;
        }
    }

    return true;
};
