// 1) variables
// 1-1) default type
/*
import msg from './data1.js';

console.log(msg);
*/

// 1-2) element type
/*
import { msg } from './data1.js';

console.log(msg);
*/

// 2) object
// 2-1) default type
/*
import member from './data2.js';

member.forEach(person => {
	console.log(`id : ${person.id}, name : ${person.name}`);
});
*/

// 2-2) element type
/*
import { member } from './data2.js';

member.forEach(person => {
	console.log(`id : ${person.id}, name : ${person.name}`);
});
*/

// 3) function
// 3-1) default type
/*
import utility from "./data3.js";

utility();
*/

// 3-2) element type
import { utility } from "./data3.js";

utility();