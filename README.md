# PHPUnit-Watcher
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
pwu <i>[options] [php test file locations]</i>
</pre>
Local
<pre>
node pwu <i>[options] [php test file locations]</i>
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
