const { addHarpWebpackConfig } = require("@here/harp-webpack-utils/scripts/HarpWebpackConfig");


const myConfig = {};

module.exports = function(env, arg) {
	return addHarpWebpackConfig(
		myConfig,
		{ mainEntry: "./src/index.js", decoderEntry: "./src/harp-gl-decoders.js", htmlTemplate: "./src/index.html" }
	);
} 

//The following configuration builds decoder.bundle.js without harp-webpack-utils

// module.exports = {
// 	"target":"webworker",
// 	"entry":{
// 	   "decoder":"./src/harp-gl-decoders.js"
// 	},
// 	"output":{
// 	   "filename":"[name].bundle.js",
// 	   "globalObject": "this"
// 	},
// 	"devtool":"source-map",
// 	"resolve":{
// 	   "extensions":[
// 		  ".webpack.js",
// 		  ".web.js",
// 		  ".js"
// 	   ]
// 	},
// 	"performance":{
// 	   "hints":false
// 	},
// 	"mode":"development"
//   };