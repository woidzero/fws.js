# fwsjs
FWS reader JS module.

by @Sazix1337


example:

```js
const fwsjs = require('fwsjs');

let s = fwsjs.read('file.fws');
console.log(s)
```

```
{
    $ "test" : "hello-world",
    & "data" : [
       $ "key" : "value"
    ]
}
```

output:
```json
{
    "test": "hello-world"
    "data": {
        "key": "value"
    }
}
```
