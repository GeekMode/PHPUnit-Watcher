# PHPUnit-Watcher
[![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

Autoruns PHPUnit on file changes. PUW works like a drop-in replacement for PHPUnit; any arguments passed to PUW will be piped to PHPUnit.

Installation
------------
------------
Global
```
npm install -g phpunit-watcher
```
Local
```
npm install phpunit-watcher
```

Launch
---
---
Global
<pre>
puw <i>[options] [php test file locations]</i>
</pre>
Local
<pre>
node puw <i>[options] [php test file locations]</i>
</pre>

Todo
----
----
- run all arguments as if they were passed to PHPUnit
- watch files in arguments for changes
- watch files in phpunit.xml for changes
- use packaged PHPUnit if it's not found globally
- enable passing of phpunit location as argument
- make PUW a standalone app using NW.js

[travis-image]: https://travis-ci.org/GeekMode/PHPUnit-Watcher.svg?branch=master
[travis-url]: https://travis-ci.org/GeekMode/PHPUnit-Watcher

[coveralls-image]: https://img.shields.io/coveralls/GeekMode/PHPUnit-Watcher/master.svg
[coveralls-url]: https://coveralls.io/r/GeekMode/PHPUnit-Watcher?branch=master
