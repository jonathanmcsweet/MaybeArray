# MaybeArray
This may be a way to use the Maybe Monad with javascript arrays... maybe.

## Overview
The Maybe Monad can be useful when you want to add the context of failure to an Array.

## How To Use
```javascript
import MaybeArray from 'MaybeArray';

MaybeArray(null)
.map(x => x * 2)
.filter(x => x > 20);

>>> 'ShadowArray'
```
In the above example ShadowArray now contains the .ARGUMENT property with a value of null.
You can check for the .ARGUMENT property when you want to handle the failure at a later point in your code

The normal array properties like .map, .reduce, etc. do nothing but don't cause an error like it would if tried to call .map, .reduce, etc. in the following code example:

```javascript
null
.map(x => x * 2)
.filter(x => x > 20);

>>> 'Uncaught TypeError: Cannot ready property 'map' of null'

// throws an error and causes your code to terminate early
```

## Why
Because it's a fun excercise in using the Maybe monad with the native Javascript Array type

### Ex:
This monad allows you to handle your failures at a later time and keeps your code cleaner since there's now a single place where errors are handled.

```javascript
const dataSetOne =
  MaybeArray(apiOne)
  .map(mapData)
  .reduce(reduceData, {});

const dataSetTwo =
  MaybeArray(apiTwo)
  .map(mapData)
  .reduce(reduceData, {});

const dataSetThree =
  MaybeArray(apiThree)
  .map(mapData)
  .reduce(reduceData, {});

const finalData =
  [...dataSetOne, ...dataSetTwo, ...dataSetThree]
  .reduce((acc, val) => {
    val.ARGUMENT == null && notifyUser('data not found', val);
    val.ARGUMENT == 'blah' && errorLogger('api data malformed', val);
    !val.ARGUMENT && acc.concat(val);
  },[]);

```

### VS:

```javascript
try {
  const dataSetOne =
  apiOne
  .map(mapData)
  .reduce(reduceData, {});
} catch (e) {
  apiOne == null && notifyUser('data not found', apiOne);
  apiOne == 'blah' && errorLogger('api data malformed', apiOne);
}
  
try {
  const dataSetTwo =
  apiTwo
  .map(mapData)
  .reduce(reduceData, {});
} catch (e) {
  apiTwo == null && notifyUser('data not found', apiTwo);
  apiTwo == 'blah' && errorLogger('api data malformed', apiTwo);
}

try {
  const dataSetThree =
  apiThree
  .map(mapData)
  .reduce(reduceData, {});
} catch (e) {
  apiThree == null && notifyUser('data not found', apiThree);
  apiThree == 'blah' && errorLogger('api data malformed', apiThree);
}

```
