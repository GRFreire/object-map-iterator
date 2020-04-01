function objectMapIterator(itFunc) {
    const keys = Object.keys(this);
    
    for(let i = 0; i < keys.length; i++) {
        this[keys[i]] = itFunc(this[keys[i]], keys[i], i) || this[keys[i]];
    }

}

Object.prototype.map = objectMapIterator;