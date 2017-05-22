# SQLcl NPM demo

## Overview

This is just to show an SQLcl script working with an npm module. Note, the used library (nodyn/jvm-npm) doesn't give full access to the Node API, so not all sources will work.

## Usage

To try this program out:

```
git clone https://github.com/tschf/sqlcl-npm-demo
cd sqlcl-npm-demo
npm i
sql connectString
script lodashExample.js
```

Which should produce the following output:

```
SQL> script lodashExample.js
The second last item was 164

```

## Author

Trent Schafer

## License

Apache
