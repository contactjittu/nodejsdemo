## ctrlr

### Simple controller dispatcher for node.

Auto loads all modules from a particular directory, using `directory`, and allows you to try to invoke the method.

There are some upcoming features, such as before actions etc.

(You can probably also use it on the client side with something like browserify)

Usage:
```
npm install ctrlr
```

Example usage:
```javascript
var controllers = ctrlr(__dirname + '/controllers/');

controllers("cars#drive")('Filmore and Geary', 'Grant Ave and O\'farrel');
controllers('cars#shiftGears')(3);
```

License: MIT
