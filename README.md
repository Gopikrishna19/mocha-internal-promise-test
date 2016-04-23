# Mocha Internal Promise Test

We all know the mocha supports testing promises by returning the promise from system under test to mocha.

```js
it('should', () => {
  return systemUnderTest()
    .then(() => assert())
});
```

What happens if the system doesn't return a promise but handles a promise internally which needs to be tested? Included in this repository is a small sample on how to do that.

### Usage

Clone or download the repo and run

```
npm i
npm test
```

##### Enjoy!
