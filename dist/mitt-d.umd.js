!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["mitt-d"]={})}(this,(function(e){"use strict";e.mitt=function(e){return{all:e=e||new Map,on(t,n){const o=e.get(t);o?o.push(n):e.set(t,[n])},emit(t,n){const o=e.get(t);o&&o.map((e=>{e(n)}))},off(t,n){const o=e.get(t);if(o)if(n){let e=o.indexOf(n);o.splice(e,1)}else e.set(o,[])}}},Object.defineProperty(e,"__esModule",{value:!0})}));
