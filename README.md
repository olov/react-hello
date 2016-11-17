# react-hello
a minimal react example using plain es5 and webpack with no special 
configuration (perhaps there shouldl be?) other than source maps.

if the externals section is removed from webpack config, then it takes 
about 600ms to regenerate dist/bundle.js and dist/bundle.js.map as a consequence of 
a tiny change in index.js. this is when running webpack --watch and after letting run 
a few times so that it's warmed up.

a typical output:
```
Hash: 0ef9b2764bc4b2c1ffa3
Version: webpack 1.13.3
Time: 616ms
               Asset    Size  Chunks             Chunk Names
    ./dist/bundle.js  741 kB       0  [emitted]  main
./dist/bundle.js.map  862 kB       0  [emitted]  main
   [0] ./index.js 220 bytes {0} [built]
    + 177 hidden modules
```

with react as an external, webpack has almost nothing to do, no source maps to generate, 
so things are spiffy (~10ms):
```
Hash: 6c4a658039eb861db41a
Version: webpack 1.13.3
Time: 10ms
               Asset     Size  Chunks             Chunk Names
    ./dist/bundle.js  1.86 kB       0  [emitted]  main
./dist/bundle.js.map  2.11 kB       0  [emitted]  main
   [0] ./index.js 161 bytes {0} [built]
    + 2 hidden modules
```

## specs
MBP 2012 13" 2.5ghz i5
