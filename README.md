# bs-conf

[![Greenkeeper badge](https://badges.greenkeeper.io/pguth/bs-conf.svg)](https://greenkeeper.io/)

*`browser-sync` does not expose all its options as command line arguments. `bs-conf` makes it possible to execute `browser-sync` from your `package.json` script section and still use all options by wrapping `browser-sync` and feeding it with a local configuration file.*

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
