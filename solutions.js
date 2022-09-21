import printStars from "./stars.js";
import process from "process";

const num_argv = process.argv.slice(2, 3);
const str_argv = process.argv.slice(3, 4);

printStars(...num_argv, ...str_argv);
