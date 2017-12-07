/*\
title: $:/plugins/DocTool/macros/incr.js
type: application/javascript
module-type: macro

Macro to increment a value by 1

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
	{name: "val"}
];

/*
Run the macro
*/
exports.run = function(val) {
        var n = Number(val) + 1;
        return (n);
};

})();