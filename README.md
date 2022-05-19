# fwsjs
FWS reader JS module.

example:

```js
const fwsjs = require('fwsjs');

let s = fwsjs.compile('file.fws');
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
