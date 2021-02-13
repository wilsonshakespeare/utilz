# JS Library (utilzed)

Despite lodash and many functionalities out there, there are still some utilities didn't achive what I intend to have.

## Install:

```shell
npm install utilzed
```

### Upgrade:

```shell
# set specific version
npm install utilzed@0.2.3
```

## Usage

This library has both flow and ts declarations

### For compiled library:

```javascript
import utilzed from 'utilzed';

// for promise module and functions
const { waitForTrue, sleep } = utilzed.promise;

// for timeconvert module
const { TimeConverter, Format } = utilzed.timeconvert;

// If index module getting too big for the size you can import specific module
import timeconvert from 'utilzed/dist/timeconvert';

```
### Important for pure ES6 (require)

```javascript
// If uses require function you will need to use .default
// For import in typescript or flow, this is not required

const utilzed = require('utilzed').default;
const timeconvert = require('utilzed/dist/timeconvert').default;

```

## Library Functions:

This library has jsdoc generated comment.

### Promise Related:

#### waitForTrue

In case you might be polling for a condition before proceed:

```ts
import utilzed from 'utilzed'
// import waitForTrue from 'utilzed/dist/promise/waitForTrue'

const checkCondition = async () => (await somePollCheckFunction());

// this will waitForTrue checkCondition to be true
// checkCondition will be called every 100ms
const success = await utilzed.waitForTrue(100, checkCondition, 1000);

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
import utilzed from 'utilzed'

await utilzed.sleep(100);

// will proceed after sleep for 100 ms
```

### Validation Related:

#### isEmptyOrZero

This will return true if object is empty, string is empty, number is 0 or array is empty

```ts
import utilzed from 'utilzed'

// if lodash isEmpty the following will return true
utilzed.isEmptyOrZero(100); // returns false
utilzed.isEmptyOrZero(0); // returns true

```

#### versionCheck

This module checks if the versioning meets the condition

```ts
import utilzed from 'utilzed'

const { OPERATORS, isVersionValid } = utilzed.versionCheck

// this will return true
isVersionValid('v2.1.1', OPERATORS.MORE_THAN_EQUAL, 'v1.1.1')

// this will return false
isVersionValid('v1.1.1', OPERATORS.LESS_THAN, 'v1.1.1')

```

### Others

#### TimeConverter

Convert time value without mathematical headache

```ts
import utilzed from 'utilzed'

// Can use destructured assignment
const { TimeConverter, Format } = utilzed.timeconvert;

// returns 123000 (target in ms) from 123 (seconds)
TimeConverter.target(Format.MILISECONDS).from(Format.SECONDS, 123);

```

**TODO: host it on github pages**

# This Library is Generated From create-tslibs

Can refer to [create-tslibs](https://www.npmjs.com/package/create-tslibs)

## To run development following will be recommended:

Use [VS Code](https://code.visualstudio.com/download) as IDE:

The library template is already setup with vscode settings for auto format.

Ensure the following plugins are enabled:
- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (This is setup with airbnb linting convention)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Add JSDoc Comment](https://marketplace.visualstudio.com/items?itemName=stevencl.addDocComments#)

Optional but Recommended:
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
- [Indenticator](https://marketplace.visualstudio.com/items?itemName=sirtori.indenticator)
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=coenraads.bracket-pair-colorizer)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
