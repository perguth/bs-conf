# bs-conf

*A wrapper of `browser-sync` that reads the configuration from `bs-conf.js`. This makes it easier to execute `browser-sync` from your `package.json` script section.*

## Install

`npm install bs-conf`

## Usage

Create `bs-conf.js` at the root of your project. Simply export a configuration object using [browser-sync options](http://www.browsersync.io/docs/options/) like so:

```js
// `bs-conf.js` example:
module.exports = {
  server: true,
  open: false,
  reloadOnRestart: true,
  files: [
    'index.html',
    'bndl/*'
  ],
  injectChanges: true,
  snippetOptions: {
    rule: {
      match: /\n$/i, // match last linebreak
      fn: function (snippet, match) {
        return snippet + match
      }
    }
  }
}
```

In your `package.json` you could now have an entry like

```js
{
  ...
  "scripts": {
    ...
    "watch": "npm run bs-conf"
  }
}
```

and start it with `npm run watch`.
