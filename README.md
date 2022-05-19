# fwsjs
FWS reader JS module.

example JS:

```js
const fwsjs = require('fwsjs');

let s = fwsjs.compile('file.fws');
console.log(s)
```

```
{
    $ "test" : "hello-world",
}
```

output:
```json
{
  "test": "hello-world"
}
```
