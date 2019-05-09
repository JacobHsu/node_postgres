
## [require，import區別？](https://www.zhihu.com/question/56820346)    
CommonJS 作為 Node.js 的規範，一直沿用至今。由於 npm 上 CommonJS 的類庫眾多，以及 CommonJS 和 ES6 之間的差異，Node.js 無法直接兼容 ES6。所以現階段 require/exports 仍然是必要且實必須的。 

## [Node.js require vs. ES6 import/export](http://researchhubs.com/post/computing/javascript/nodejs-require-vs-es6-import-export.html)  

## [Difference between import `http = require('http');` and `import * as http from 'http'`;?](https://stackoverflow.com/questions/35728117/difference-between-import-http-requirehttp-and-import-as-http-from-htt)  
```js
import * as http from 'http';
// and
import http = require('http');
```
> In the first form, you create an `http` object in your code (totally clean), then, the interpreter will look for each possible import in http module and append it, one by one, to the http object in your code, this is a little slower (not much) than the second form where you are getting the module.exports object defined in the http module, then copying this reference to a new http object in your code, this is object in a node special function with a particular context, not only an object created in your code with the contents of the module.
