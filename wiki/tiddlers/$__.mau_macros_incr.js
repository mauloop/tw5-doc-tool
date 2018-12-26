/*\
title: $:/.mau/macros/incr.js
type: application/javascript
module-type: macro

Increments a given value by 1 (or more)
\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "incr";

exports.params = [
    {name: "val"},
    {name: "add", default: 1}
];

/*
Run the macro
*/
exports.run = function(val, add) {
    var n = Number(val) + Number(add);
    return (n);
};

})();