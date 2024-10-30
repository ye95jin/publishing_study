// 1) 변수
// 1-1) default : 데이터를 받을 때 사용하는 구문
/*
import msg from './data1.js'

console.log(msg);
*/

// 1-2) 개별 데이터 
// msg는 넘겨진 변수 이름으로 받을 수 있습니다. 
/*
import { msg } from './data1.js';

console.log(msg)
*/

// 2) function
// 2-1) default 

/*
import recieveFn from './data2.js';

// console.log(recieveFn);

recieveFn();
*/

// 2-2) 개별 데이터 
import { myFn } from "./data2.js";

myFn(); 

// 해체 할당 

let obj={
	a:1,
	b:2
};

let {a,b}=obj;