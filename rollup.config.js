import { terser } from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import path from "path";
export default {
	input: path.resolve(__dirname, "./src/index.js"),
	output: [
		{
			file: path.resolve(__dirname, "dist", "mitt-d.js"),
			format: "umd",
			name: "mitt-d",
		},
	],

	plugins: [
		resolve(),
		commonjs(),
		babel({
			exclude: "node_modules/**",
		}),
		terser(),
	],
};
