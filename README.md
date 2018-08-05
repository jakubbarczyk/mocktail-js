<img width="597" src="/mocktail-js.png">

**A JavaScript library that takes the pain out of mocking deep objects.**

## Installation

Install the package with npm:

```shell
npm install mocktail-js
```

Include it in your project:

```javascript
import mocktail from "mocktail-js";
```

## Documentation

MocktailJS builds a JavaScript object off of a string pattern. The deepest keys may be assigned values, left to right, based on the passed pattern.


#### Mock deep object
Use _period_ character to indicate parent-child relation.

```javascript
mocktail("foo.bar.baz", 123);
 
/*
 *  Returned object:
 *  
 *  {
 *      foo: {
 *          bar: {
 *              baz: 123
 *          }
 *      }
 *  }
 */
```

#### Mock deep and wide object
Use _comma_ character to indicate sibling relations.

```javascript
function getStuff() { return "stuff"; }
 
mocktail("foo.bar,boo.baz", null, getStuff);
 
/*
 *  Returned object:
 *  
 *  {
 *      foo: {
 *          bar: null
 *      },
 *      boo: {
 *          baz: getStuff
 *      }
 *  }
 */
```

#### Mock deep and wide object with forks
Use _colon_ character to indicate forking and _semicolon_ to terminate it.

```javascript
mocktail("foo.bar,boo:baz.one,ban.two.three;", 123, null, "awesome");
 
/*
 *  Returned object:
 *  
 *  {
 *      foo: {
 *          bar: 123
 *      },
 *      boo: {
 *          baz: {
 *              one: null
 *          },
 *          ban: {
 *              two: {
 *                  three: "awesome"
 *              }
 *          }
 *      }
 *  }
 */
```

## License

[MIT](http://ilee.mit-license.org)
