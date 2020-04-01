# objectmapping

## Iterate an object with map function

### Installation

- Npm
```
npm install objectmapping --save
```
- Yarn
```
yarn add objectmapping
```

### Usage

```js
require('objectmapping');

const obj = { foo: 'FOO', bar: 'BAR' }

obj.map(( value, key, index ) => {
    if (key === 'foo') return;
    else return `... ${value}!!!`;
});

console.log(obj);
// returns { foo: 'FOO', bar: '... BAR!!!' }

```

### Be aware

 - You **can** leave function parameters empty.
 - If your function return ```undefined``` no values in the object will be changed.
 - You can only return the same datatype as the original value, otherwise the object will not be updated.

 > The package ```objectmapping``` adds the map function in the ```Object.prototype``` global variable. That doesn't imply javascript itself or any other library functionality, but it is good to know what you are dealing with.