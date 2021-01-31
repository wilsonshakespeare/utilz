# JS Library (utilzed)

Despite lodash and many functionalities out there, there are still some utilities didn't achive what I intend to have.

## Install:

```shell
npm install utilzed
```

### Upgrade:

```shell
# set specific version
npm install utilzed@0.1.3
```

## Library Functions:

This library has jsdoc generated comment.

### Promise Related:

#### waitForTrue

In case you might be polling for a condition before proceed:

```ts
import utilized from 'utilzed'
// import waitForTrue from 'utilzed/dist/promise/waitForTrue'

const checkCondition = async () => (await somePollCheckFunction());

// this will waitForTrue checkCondition to be true
// checkCondition will be called every 100ms
const success = await utilized.waitForTrue(100, checkCondition, 1000);

if (success) {
  // Meaning checkCondition function returns true before 1000 ms
  return;
}

// meaning after 1000ms the checkCondition returns false still
// handle unsuccessful poll for true
```

#### sleep

`await sleep(100)` will await for 100ms before proceed to next function

```ts
import utilized from 'utilzed'

await utilized.sleep(100);

// will proceed after sleep for 100 ms
```

### Validation Related:

#### isEmptyOrZero

This will return true if object is empty, string is empty, number is 0 or array is empty

```ts
import utilized from 'utilzed'

// if lodash isEmpty the following will return true
utilized.isEmptyOrZero(100); // returns false
utilized.isEmptyOrZero(0); // returns true

```

### Others

#### TimeConverter

Convert time value without mathematical headache

```ts
import utilized from 'utilzed'

// Can use destructured assignment
const { TimeConverter } = utilized;

// returns 123000 (target in ms) from 123 (seconds)
TimeConverter.target(Format.MILISECONDS).from(Format.SECONDS, 123);

```

**TODO: host it on github pages**

## Generating library template

This library template will soon be generated from npx command.
