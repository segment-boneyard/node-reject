
## reject

  Simple reject utility, works on objects and arrays.

  ```bash
  $ npm install reject
  ```

### Example

```js
// arrays

reject([1, null]); // => [1]
reject([1, null], parseInt) // => [null]
reject.types([1, null], 'null') // => [1]
reject.types([1, null, undefined], ['undefined', 'null']) // => [1]

// objects

reject({ one: 1, two: null }) // => { one: 1 }
reject({ one: 1, two: null }, parseInt) // => { two: null }
reject.types({ one: 1, two: null }, ['null']) // => { one: 1 }
```

### License

  (MIT)
