//  console.log('Hello World');  


                  /*** Section 3 values and  variables in javascript****/

//  var myName="ankit rai";
// // var $myname="Ankit rai"//we can't use special character in var variable
// /*semi colon is only practice in javascript it is not necessary*/
// console.log(myName); 


      
                          /*** SEC 4 DATA TYPES IN JAVASCRIPT  ***/


// undefined:type instance==="undefined"
// Boolean:typeof instance==="boolean"
// Number:typeof instance==="number"
// String:typeof instance==="string"
// BigInt:type of instance==="bigint"
// Symbol:type of instance=="symbol"

// var myName="Ankit";
// console.log(myName)



                                /*type operator*/
//  console.log(typeof(myName));

  // var myAge=26;
  // console.log(myAge);
  // console.log(typeof(myAge));
//  var iAmAnkit = true;
//  console.log(iAmAnkit);
//  console.log(typeof(iAmAnkit));

// console.log(10+"20");/* we always write string inside double inverted comma or single inverted comma */
//  console.log(9-"5");/*basically it is bug*/
 /*as we can't add string with number but while substraction it give answer so it is bug*/
 //  console.log("java" + "Script");/*as when we add string it get concatenation*/
// console.log(" "+0);//output 0

//console.log(true + true);/*basically in java script true represent 1 and false represent 0*/
// console.log(false-true);


                    /** first interview question difference between null vs undefined **/

//   var iamUseless = null;
//   console.log(iamUseless);
//  console.log(typeof(iamUseless));/*giving output"object"*//*it is 2nd bug*/

//  var iamStandBy;
//  console.log(iamStandBy);
//  console.log(typeof(iamStandBy));



                          /** 2nd interview question what is NAN ***/

// 1.when subtract two string the NAN come out as Result.
// 2.NAN is a property of the global Object.(hum kahi bhi code likh rahe hai we can acsses any where).
// 3.in other words,it is a variable in global Scope . 
// 4. The initial value of NAN is Not-A-Number. 
// var myPhoneNumber= 123345346;
// var myName="Ankit";
//  console.log(isNaN(myPhoneNumber));
//   console.log(isNaN(myName));
// if(isNaN(myName)){
//         console.log("plz enter valid phone number");
// }


                                        /** interview q. 3 ***/

//     NaN === NaN;
//     Number.NaN === NaN;
//     isNaN(NaN);
//     isNaN(Number.NaN);
//     Number.isNaN(NaN);
//  console.log(NaN === NaN);//output false
// console.log(Number.NaN === NaN);//output false
// console.log(isNaN(NaN));//
// console.log(Number.isNaN(NaN));
// console.log(isNaN(NaN));  



                                                               /***EXPRESSION AND OPERATORS***/


// expression is combination of opreands and operator

                                 /**Assignment operators**/ 

// An assignment operator assign a value to its left operand 
// based on the value of its right operand.
// the simple assignment opretor is equal(=)
//  var x=5;
//  var y=5;
//  console.log("is both the x and y is equal or not" + x==y); //giving output false so avoid this method becuase give false answer becuse it first concatenate string and that var.
//  console.log(x==y);//giving output true

                                    /*Arithmetic operator */

 // An arithmetic operator takes numerical values
 //(either literals or variable) as their operandsand
 //return single numerical value.
//  console.log(3+3);
//  console.log(10-5);
//  console.log(20/5);
//  console.log(5*6);
// console.log("remainder operator "+ 81%8);
/* important line if we write string and number togther then always use '+' sing between them*/


                              /* Increment or Decrement operator*/

//operator: x++ or ++x or x-- or--x;
//If used postfix,with operator after operands (for example,x++ ) ;the increments operator increments and returns the value before increments.
//jo original value hai wh increments ho gai hai lakin usese pahle original value ko store ker lia gya hai 
//  var num =15;
//  var Newnum=num++ +5;
//  var newNum=num++;
//  console.log(num);//output=17
//  console.log(newNum);//output=16
//  console.log(Newnum);//output=20
 
//if used prefix,with operator before operand;the increments operator increments and return the value after incrementing
//  var num =15;
//  var Newnum=++num +5;
//  var newNum=++num;
//  console.log(num);//output=17
//  console.log(newNum);//output=17
//  console.log(Newnum);//output=21

                                     /*compresion operator*/

//A compresion operator compares its operands and return a logical value based on whether the comparison true .
// var a=30;
// var b=10;
// var c=-20;
            //1. Equal(==)
//console.log(a==b);

              //2. not equal(!=)
//3. console.log(a!=b);
//4. greater than(>)
//5. greater than and equal(>=)
//6. less than(<)
//7. less than and equal(<=)
    
                                       /**Logical Operator**/

//Logical operator are typically used with boolean (logical) values;
//when they are, they return  a boolean value.

          /*1. logical AND(&&) */
// The logical AND(&&) operator (logical conjuction ) for a set of opreands is true if and only if all of its opreands are true.
//  console.log(a>b && b<0 );

           /*2. Logical OR(||)*/
// the logical OR(||) (disconjuction)operator for a set of opreands true if and only if one or more opreands are true .
//console.log(a>b||b<0||c<0);
          
        /*3. Logical operator NOT(!)*/
//takes truth to falsty and vice versa
// console.log(!(a>b||b<0||c<0));

                                                               /** String concatenation operator **/

//The concatenation oprends (+) concatenates two string values together returning another string that is the union of the two oprends strings.     
// console.log("hello word");
// console.log("hello " + "world");
// var myName="Ankit";
// console.log(myName +" Rai");

                                    /** challenge 4 */

    /*Q.1 what will be the output of 3**3 ?
       Q2. What will be the output, when we add a number and a string?
       Q3. write a program to swap two numbers?do by own
       Q.4 write a program to swap two number without using third variable?*/
        
 /*Ans1.*/ //console.log(3**3);
//  console.log(10**-1);//basicaly it means power called exponential operator 

///*Ans2.*/   console.log("ankit "+ 21);

//Sol4.
// var a=30;
// var b=10;
//output a=10,b=30;
// var a=a+b;
// var b=a-b;
// var a=a-b;
// console.log("a= "+a);
// console.log("b= "+b);

        
                      /**interview q. difference between == vs ===  ? */
 //Ans.
//  var num1=5;
//  var num2='5';     
// console.log(num1==num2);//when we used double equal then it only check value not data type
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1===num2);//triple equal check both value as well as data type 


                                                                 /***CONTROL STATEMENT AND LOOPS ***/

        /*1.if else*/
// var tomr= 'sunny';
// if(tomr == 'rain'){
//         console.log("take raincoat");

// } 
// else{
//      console.log("no need raincoat");
// }      
      
                                                                              /**CHALENGE 5  */

//Q.1 write a program that works out whether if a given year is leap year or not?
  //Ans..
// var year = 2000;
// if((year%400==0)||((year%4==0)&&(year%100!==0))){
// console.log(year+" is leap year");
// }
// else{
//         console.log(year+" is not leap year");
// }
/*ques.> what is truthy and falsy values in javascript?*/
//we have total 5 falsy values in javascript i.e 0,undefined,null,NAN,false** is false anyway.
// if(score=0){
//         console.log("we loss the game");
// }
// else{
//         console.log("we won the game");
// }

 
                                                            /**CONDITUONAL(TERNARY) OPERATOR */

//The conditional (ternary)operator is the only javascript operator that takes three operands.
//variable name=(condition)?value1:value2
// var age=17;
// console.log((age>=18)?("this is applicable for vote"):("not eligible")



                                                                /**SWITCH STATEMENT**/

//Evaluate an expression, matching the expression's value to a case cluase, and executes statements associated with that case.

//1st without break statment
// switch(area){
// case 'circle':
// console.log("the area of circle is: "+PI*r**2);
// break;
// case 'triangle':
//         console.log("the area of the triangle is: "+a*b/2);
//         break;
// case 'rectangle':
//       console.log("the area of rectangle "+a*b) ; 
//       break;
// default:
//         console.log("please enter valid data");
//         break;}                                 /*BREAK*/

//Terminates the current loop,switch,or label statement and transfers program contorl to the statement following the terminated statement .


                                                                     /**WHILE LOOP STATEMENT */
//The while statement creats a loop that executes a specified statement as long as the test condition evaluates to true.      
// var num=0;
// while(num<=10){
//   console.log(num); //infinite rule
//     num++;   
// }
//block scope {}

                                                                       /**DO WHILE LOOP*/

// var num=0;
// do{
//         debugger;
//         console.log(num);
//         num++;
// }while(num<=10);

                                                                         /** FOR LOP */

// for(var num=0;num<=10;num++){
//         debugger;
//         console.log(num);
// }

                                                                           /**6.CHELLANGE */
//q. javaScript program to print table for given number (8,9,12,15)using for loop?
// for(var i=1;i<=10;i++){
//         var tableof=8;
//         console.log(tableof+"*"+i+"="+tableof*i);
// }


                                            /*** SECTION 5 */


                                                                    /**FUNCTION */
 //A block of code to perform a perticular task
//  syntex: function functionName(){
// statement
//  }   define a function uske baad calling funtion
//      function sum(){
//         var a=10, b=20;
//         var total=a+b; 
//      }
//      console.log(sum());its output is undefined becuase we have tell to function that output will be passed to console.log.
// function sum(a,b){
//         
//         var total=a+b; 
//         console.log(total);
//      }
//    sum();
//sum(20,30); function arguments


                                                                       /**CHALLENGE QUESTION 7*/
//Q.What is the difference between function parameter vs function Arguments
// Function parameters are the names listed in the function's definition.
// Function arguments are the real values passed to the function.


                                                                        /**WHY FUNCTION */
//we can use the same code many times with different arguments,to produce different results.          
//DRY-do not repeat yourself


                                                             /*FUNCTION EXPRESSION*/
//function expression simply means create a function and put it into the variable.       
// function sum(a,b){
//       var total=a+b;
//       console.log(total);
// }
// var funexp=sum(5,15);




                                                    /**Return keyword*/
//when javascript reaches a return statement,the function will stop executing. 
//The return value is "returned"  back to the "caller"        
// function sum(a,b){
//       return total=a+b;
//    }
// var funexp=sum(5,15);
//    console.log("the sum of two number "+funexp);


                                                     /**ANONYMOUS FUNCTION */
//A function expression is similar to and has the same syntax
//As a function declaration one can define "named"
//function expression (where the name of the expression might be used in the call stack for example)
//or "anonymous" function expression.
// var funexp=function(a,b){
// return total=a+b;
// }
// funexp(10,15);
// console.log("the sum of two no. is "+funexp(10,15));
// var sum=funexp(10,15);
// console.log("the sum of two no. is "+sum);

                 
//**************************** **************************************************************************

                                                             /**WELCOME TO ECMAScript*/

                                                  //Features of ECAMAScript 2015 also known as ES6  

                                                         /**1 LET VS CONST VS VAR**/

//var- Function scope
//let and condst -Block scope               
// var myname="Ankit Rai";
// console.log(myname);
// myname="lucky rai";
// console.log(myname);

// let myname="Ankit Rai";
// console.log(myname);
// myname="lucky rai";
// console.log(myname);


// const myname="Ankit Rai";
// console.log(myname);
// myname="lucky rai";
// console.log(myname);

//  function biodata(){
//        var myfirstname="Ankit";
//       console.log(myfirstname);

// if(true){
//       var mylastname="Rai";
//       console.log("inner "+ mylastname);
//       console.log("inner "+ myfirstname);
// }
// console.log("innerouter "+ mylastname);
// }
//  biodata();
//  console.log(myfirstname);
//if we using var keyword anywhere  inside function then that variable will be accessible for entire function but not accessible for outside function.


// function biodata(){
//       let myfirstname="Ankit";
//       console.log(myfirstname);

// if(true){
//       let mylastname="Rai";
//       console.log("inner "+ mylastname);
//       console.log("inner "+ myfirstname);
// }
// console.log("innerouter "+ mylastname);
// }
// biodata();
//if we using let keyword globally (globally in the refernce of inside function) then it will accessible for whole function but if we not use globally(globally in the refernce of inside function) then it will n0t accessible for whole function only accesible inside that block{}.



                                                              /**TEMPLATE LITERALS(Template strings) */
// javaScript program to print table for given number(8)?
//output: 8*1=8
//8*2=16
//8*10=80
//  for(let num=1;num<=10;num++){
//       let tableof=12;
//       // console.log(tableof+"*"+num+"="+tableof*num);
//    console.log(`${tableof}*${num}=${num*tableof}`) ;  
//  }


                                    /**DEFAULT PARAMETERS */
//Default function parameters alllow named parameters to be initialized with default values if no value or undefined is passed.
// function mult(a=5,b){
//       return a*b;
// }
// console.log(mult(3));//output-NAN because value always go for first parameters.
// function mult(a,b=5){
//       return a*b;
// }
// console.log(mult(3));

         
                                                                        /**FAT ARROW FUNCTION */

// console.log(sum());
// function sum(){
// let a=5,b=6;
// let sum=a+b;
// return `the sum of the two number is ${sum}`;
// } 
//How to convert in into Fat Arrow Function
// const sum = () => {
//       let a=5,b=6;
//       let sum=a+b;
//       return `the sum of the two number is ${sum}`;  
// }
//  console.log(sum());//in fat arrow first we have define function and then call function.
//1.in normal or traditional mthd we can call function first and after then we can define but in arrow functiomn we have to first difine function and then only we can  call function.
//2.instead of function we are using fat arrow and function name consider as const and var.
// const sum = () => {
//       return `the sum of two number is ${(a=5)+(b=6)}`;
// }
// console.log(sum());

//if we want to return only  one output there is no require of return statement.
// const sum=()=>`sum of two number is ${(a=5)+(b=11)}`if we not want write return keyword then we  have not use of block{} after fat arrow sing. 
// console.log(sum());



                                                                   /***6 SECTION ARRAYS IN JAVASCRIPT */

//when we use var, we can stored only one value at a time.
//instead of var,we will use an Array.
//In javascript,we have an array class,and
//arrays are the prototype of this class.    
//var myfriends=['ramesh',22,'ankit',true];
// var Names=['vinod','bahadur','thapa','ramesh'];
//first element called LOWER INDEX/LOWER BOUNDRY and last element called UPPER INDEX/UPPER BOUNDRY
// var Names=new Array;optional.


                                                                         /**1.Traversal in array */
//navigate through an array
//if we want to get the single data at a time and also 
//if we want to change the data 
// var myfriends=['vino','ramesh','arjun','ankit'];
// console.log(myfriends[1]);   
//if we want to check the length of elements of an array
// console.log(myfriends.length);  
// console.log(myfriends[myfriends.length-1]); 
//we use loop to naviagte

// var myfriends=['vino','ramesh','arjun','ankit'];
// for (var i=0;i<myfriends.length;i++){
// console.log(myfriends[i]);
// }
 
                                                            /**After ES6 we have for..in and for..of loop too*/


// for in loops return index value of element
//  var myfriends=['vino','ramesh','arjun','ankit'];
// // for(let elements in myfriends){
// //       console.log(elements);
// // }

// for(let elements of myfriends){
//       console.log(elements);
// }
//for of loop give elements

                                                                    /**Array.prototype.forEach()**/


//calls a function for each element in the array.
//  var myfriends=['vino','ramesh','arjun','ankit'];
// myfriends.forEach(function(element,index,array){
// console.log(`${element} index: ${index} ${array}`);
// });
//using for in we only get index value and using for of we only get elements but using forEach we get both.
// myfriends.forEach((element,index,array)=>{
//       console.log(`${element} index: ${index} ${array}` ); 
// });
//note** if we want use "this " argument then we have to go through traditional function rule


                                                                       /**2.searching and filter in an array*/
//Array.prototyoe.indexOf() 
//  var myfriends=["vino","ramesh","rai","ankit","rai"];
//   console.log(myfriends.indexOf("rai",3));
//if element not match then it give -1 as output.
                            /**lastIndexOf("",index value) */
  //  console.log(myfriends.lastIndexOf("rai",4));
//return the last(greatest) index of an element within the array equal to an element, or -1 if none is found.It search the element last to first



                                                                        /**Array.prototype.includes() */
//Determines whether the array contains a value,
//returning true or false as appropriate.
// var myfriends=["vino","ramesh","rai","ankit"];
// console.log(myfriends.includes("rai"));



                                                             /**FILTRATION IN JAVASCRUPT */
 
                                                                   /*1.FIND MTHD.*/
//Array.prototype.find()
//Returns the found element in the array, if some element in the array satisfied the testing function, or undefined if not found.only problem is that it return only one element    
// const prices = [200,300,350,400,450,500,600];
 // price <400
//  const findElem = prices.find((currVal)=>{
//       return  currVal <400; 
//  });
//  console.log(findElem);
// console.log(prices.find((currVal) => currVal<400));

                                                                    /**findIndex */
 
//returns the found index in the array,if an element in the array satisfies the testing function, or -1 if not found.it is also return single value.
 //console.log(prices.findIndex((curVal)=>curVal<400)) ;      
//if condition are not statisfied then -1 will be return .


                                                                    /**filter mthd. */
//Array.prototype.filter()
//Return a new array containing all elements of the calling array for which the provided filtering function returns true.
// const prices = [200,300,350,400,450,500,600];
// //price<400;
// const newPriceTag=prices.filter((elem,index,arr)=>{
// return elem<400;
// });
// console.log(newPriceTag);
//if condition are not statisfied then it pass an empty array [].


                                                               /**3 ARRAY SUBSECTION HOW TO SORT AN ARRAY */

//Array.prototype.sort()
//The sort() method sorts the elements of an array in place and returns the sorted array.The default sort order is ascending,built upon converting the elements into strings,
//then comparing their sequence of UTF-16 code units values.
//  const months = ['March','jan','feb','Dec','Nov'];  

// console.log(months.sort());
// const array1=[1,30,4,21,100000,99];
// console.log(array1.sort());//this mthd of sorting only work with string
//however,if numbers are sorted as string,
//"25"is bigger than "100",because "2"is bigger than "1".
//becuase of this, the sort() method will produce an incorrect result when sorting numbers.


                                                  /**4.How to Insert,Add,Replace and Delete Elements in Array(CRUD) */

                                                                         /**push() */
//Array.prototype.push()
//the push method add one or more elements to the ended of array and return new length of array.
// const animals=["pig","goats","sheep"];
//  const count=  animels.push("chicken");
  //console.log(animels);
//console.log(count);
// animels.push("chicken","cow","cat");
// console.log(animels);
    
                                                                      /**unshift() */
//Array.prototype.unshift()
//The unshift() method adds one or more elements to the new length of the array
// const count=animals.unshift("chicken");
// console.log(animals);
// console.log(count);
// const myNumber=[1,2,3,5];
// myNumber.unshift(4,6);
// console.log(myNumber);


                                                                         /**POP() */
//Array.prototype.pop()
//The pop() method removes the last element from an array and returns that element.This method changes the length of the array.
// const plants=["broccoli","cauliflower","kale","tomato","cabbage"];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

                                                                       /**shift() */
//Array.prototype.shift()
//The shift() method removes the first element from an array and returns that removed elements.this method change the length of the array.
// const plants=["broccoli","cauliflower","kale","tomato","cabbage"];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);    

                                                                    /**10:CHALLENGETIME */
//1:Add Dec at the end of an array?
//2:What is the return value of splice method?
//3:update march to March (update)?
//4:Delete june from array?

// const months=['Jan','march','April','June','July'];


                                                                       /**splice() */
//sol1..        
//  const newMonth=months.splice(months.length,0,"Dec");//first value is where we want to add value,second value is  number of  element which will be delete and 3rd value is value which we want to insert
// console.log(months);

//sol2.
// console.log(newMonth);//if we will not delete any element then splice method return empty array or if we delete any element then it will return that value in form of array

//sol3
// const months=['Jan','march','April','June','July'];
// const updateMonth=months.splice(1,1,'March');
// console.log(months);
// const indexOfMonth=months.indexOf('march');
// if(indexOfMonth!=-1){
//  const updateMonth=months.splice(indexOfMonth,1,'March');     
// console.log(months);
// }
// else{
//       console.log('no such data form');
// }

//sol.4
// const months=['Jan','march','April','June','July'];
// const indexof=months.indexOf('June');
// if(indexof!=-1){
//       const updateMonth=months.splice(indexof,1);//if write 2 instead of 1 then two element will be delete one is which has index value equal to indxof value and another will be just next one.
//       console.log(months);
// }
// else{
//       console.log('no such element found');
// }
// const months=['Jan','march','April','June','July'];
// // suppose want to delete all data  from April to the end
// const indexof=months.indexOf('April');
// if(indexof!=-1){
//       const updatemonth=months.splice(indexof,Infinity);
//       console.log(updatemonth);
//       console.log(months);
// }
// else{
//       console.log('no data found');
// }


                                                              /**5 ARRAY SUBSECTION MAP AND REDUCE METHOD */

// // Array.protoptype.map()  
// let  newArray=arr.map(callback(currentValue[,index[,array]])){
//       return element for newArray,after executing something}[,thisArg]);

//Returns a new array containing the results of calling a function on every element in this array.
//  const array1=[1,4,9,16,25];
// //num>9
// let newArr=array1.map((curElem,index,arr)=>{
//     return curElem>9;
// })//if in map method we use map mthd then it return array of true and false.
// console.log(array1);
// console.log(newArr);
// //map method return an array containing element which want perform.
// const array1=[1,4,9,16,25];
// let newarray=array1.map((elem,index,arr)=>{
//       return `${index} ${elem}  ${arr}`
// })
// console.log(newarray);
// // it return new array without mutating the original array


// let newarrayfor=array1.forEach((elem,index,arr)=>{
//       return `Index no=${index} and the value is ${elem} belongs to ${arr}`
// })
//  console.log(newarrayfor);
// forEach value return undefined Index 

                                                                   /**11:Challenge Time */

//1: Find the square root of each element in an array?
//let arr=[25,36,49,64,81];

//2.Multiply each element by 2 and return only those elements which are greater than 10?

 
//sol1.
//  let arr=[25,36,49,64,81];

// let arrSqr=arr.map((elem)=>Math.sqrt(elem));
// console.log(arrSqr);

           /******* */
//sol 1.>
// var arr1=arr.forEach((elem)=>{
//   console.log( Math.sqrt(elem));
// })

           /**** */

//sol2.
// let arr=[2,3,4,6,8];
// let newarr=arr.map((elem)=> elem*2).filter((elem)=>elem>10)
// console.log(newarr);
//we can not use foreach becuase we can't add another function 



                                                                        /***REDUCE METHOD**** */


//flatten an array means to convert the 3d or 2d array into a single dimensional array and many more mthd.
 //The reduce() method executes a reducer function (that you provide)on each element of the array,resulting in single output value.
 //The reducer function takes four arguments:
 //Accumulator
 //current value
 //curent index
 //source array

//  let arr=[5,6,2];//find sum
//  let sum=arr.reduce((accumulator,currelem,index,arr)=>{
//       return accumulator+=currelem;
//  })
 
// console.log(sum);

//keep in mind most timefirst map then filter and then reduce.
// let arr=[5,6,2];
// let sum =arr.reduce((accumulator,curelem)=>{
//       return accumulator+=curelem;
// },7)
// console.log(sum);


                                                                         /**HOW TO FLAT AN ARRAY */

//or convert 2d and 3d array in 1d array
  
// const arr=[
//       ['zone_1','zone_ 2','zone_ 3','zone_ 4','zone_ 5','zone_ 6','zone_ 7','zone_ 8']
// ];
// let flatarray=arr.reduce((accum,curelem)=>{
//       return accum.concat(curelem);
// })
// console.log(flatarray);
//  const arr=[
//      ['zone_1','zone_ 2','zone_ 3','zone_ 4','zone_ 5','zone_ 6','zone_ 7',['zone_ 7','zone_ 8']]
//  ];

// console.log(arr.flat(infinity));//we can write 2 in place of infinity//ES2019

// let flatarray=arr.reduce((accum,curelem)=>{
//       return accum.concat(curelem);
// })
// console.log(flatarray);//reduce mthd can not reduce nested array but in 2020 ecma script introduces a new method for nested array even we will not reduce mtd for this problem.

  

                                                                                   /**STRING */
                   
 //a javascript string is zero or more characters written inside quotes.
 //javascript string are used for storing and manipulating text.
 //we can use single and double quotes

 //String can be created premitives,
 //from string literals,or as objects,using the string() constructor
// let myname="Ankit rai";
// let myname2="luck rai"

// let ytName=new String("Thapa Technical");

// console.log(myname);
// console.log(ytName);

                                                                        /*how to find string length**/
//String.length;
// let myname="Ankit rai";
// console.log(myname.length);

                                                                          /** ESCAPE CHARACTER */

// let anySentence="we are the so-called \"vikings\" from the north";
// console.log(anySentence);


// if you don't want mess, simply use the alternate quotes
// let anySentence ='we are the so-called "vikings" from the north';
// console.log(anySentence);//if we using double quotes then use single quotes with vikings or vivi-versa.

                     /**FINDING A STRING IN A STRING */
       
//String.prortotype.indexOf(searchValue[,fromindex])
//the indexOf() method returns the index of (the position of)the first occurence of a specified text in a string if data not found it will return -1.                    

// const myBioData='I am the thapa Techanical';
//  console.log(myBioData.indexOf("thapa"));
// console.log(myBioData.indexOf("am"));
//  console.log(myBioData.indexOf("t",6));


                           /**lastIndexOf( )method */
//String.prototype.lastIndexOf(searchValue)[, fromIndex])
// //Returns the index within the calling String object of the last occurence of searchvalue,or -1 if not found.

// const myBioData='I am the thapa Techanical';
// console.log(myBioData.lastIndexOf("t",6));//it means that first it move on index 6 from starting and then it will move back to check or find the index vaule of element.


                      /**SEARCHING FOR A STRING IN A STRING */

                      /** Search() method*/

//string.prototype.search(regexp)
//The search() method searches a string for specified value and returns the position of the match

// const myBioData='I am the thapa Techanical';
// let sData =myBioData.search("Techanical");
// console.log(sData);
//The search() method cannot take a second start position arguments.


                         /**EXTRACTING STRING PARTS */
//There are 3 methods for extracting a part of a string:

//slice(start, end)
//substring(start,end)
//substr(strat,length)

//The slice() method
//slice() extracts a part of a string and returns the extracted part in a new string.

//The method takes 2 parameters: the start position,and the end position(end not included).

// var str="Apple, Bananaa, kiwi";
//  let newstr=str.slice(0,4);
// let newstr=str.slice(7,-2);//first input i.e 7 tells that it will satrt from index number 7 and second number -2 it menas that it will leave last two element.
// // let newstr=str.slice(7);//in this spice mthd. return all value from index number7.
//  console.log(newstr);


//The slice() mthd. selects the elements starting at the given start argument, and ends at,but does not include,the given end 

//note:The original array will not be changed.


                /**CHALLENGE QUESTION */
//Q. Display only 280 character of a string like the one used in twitter? 


//sol..
//  let myTweets = "lorem fxegdxfxcsbgddfgyfgewhfgerwwgw efxgvdaghsafwejxdb x fggrw fewfgewgf wcxdf ukyf wnd eyr not onlr wehw dh qwcxey fq wxqw qgrhqwger qwcxrgerqewgyrg wxdj asdbfyueg frwhebfyuasgahdyuegw cwye ewrqwjeh suyhw c wyr7wey7 erw7yrw uehfjsdh f cejfhhsf we7f i am ghjyg yufhgy yutjg tjt utv  sorry g";

// let myActualTweet=myTweets.slice(0,280);
//     console.log(myActualTweet);         
//      console.log(myActualTweet.length);

                
              /**substring() methd */
//substring() is similar to slice().
//The difference is that substring() cannot accept
//negative indexes.

// var str="Apple, Bananaa, Kiwi";
// var newStr=str.substring(0,4);
// console.log(newStr);
// //if we give negative value then the character are counted from the 0th pos.
// var newStr=str.substring(8,-2);//it will show all data from 0th index to just befor index having 8.
// console.log(newStr);


               /**substr() mthd */
//The substr() method
//substr() is similar to slice().

//The difference is that the second parameter specified the length of the extracted part.

//  var str="Apple, Bananaa, Kiwi";
// var res=str.substr(7,-2);//if we use negatve value then  it will not give any response.

//but if we want to extract data from outside.
// var res=str.substr(-4);//it select only last four word
//  console.log(res);



                 /***REPLACING STRING CONTENT()*/

//String.prototype.replace(searchFor, replaceWith)

//The replace() method replaces a specifies value with another value in a string.
// let myBioData='I am vinod thapa vinod';
// let newStr=myBioData.replace('vinod', 'Vinod');
// console.log(newStr);

//Points to remember
//1.The replace() methd does not change the string 
//it is called on .It returns a new string
//2:By replace() mthd replaces only the first match.
//3: By deafult, the replace mthd is case sensitive.Writing VINOD (with upper caes)will not work.


            /**EXTRACTING STRING CHARACTERS */
//There are 3 methods for extracting String Characters:
//charAt(position)
//charCodeAt(position)
//Property access[]


                    /**charAt() mthd. */

//The charAt() mthd. return the character at a specified index (position) in a string

// let str="HELLO WORLD";
// console.log(str.charAt(0));

                          /**charCodeAt() mthd.*/

//The charCodeAt() method returns the unicode of the character at a specified index in a string:
// the method returns UFT-16 code (an integer between 0 and 65535)

// var str="HELLO WORLD";
// console.log(str.charCodeAt(0));//output 72.
 
//The Unicode Standard provides a unique number for every character, no matter the platform,device,application,or language.UFT-8 is a popular Unicode encoding which has 88-bit code units.

                     /**CHALLENGE 12 */
//Return the unicode of the last character in a string

//sol.
// var str="HELLO WORLD";
// let lastchar=str.length;
// console.log(str.charCodeAt(lastchar-1));
 

                     /**Property Access */
//ECMAScript 5(2009) allows property access[ ] on string

// var str="HELLO WORLD";
// console.log(str[1]);//when we use[] with string i.e stringname[] then it is called access


                        /**OTHER USEFUL METHODS */

// let myname="vinod tHapa";
// console.log(myname.toUpperCase());
// console.log(myname.toLowerCase());


                           /**concat() method */
//concat() joins two ot more string
// let fName="ankit"
// let lName="rai"
// console.log(`${fName} ${lName}`);
// console.log(fName + lName);//not having space between two strung
// console.log(fName.concat(lName));
// console.log(fName.concat(" ",lName));

                          /*****trim() mthd */

//The trim() method removes whitespace from both sides of a string kdep in mind it does not remove spaces between the strings.
// var str="              Hello World!        ";
// console.log(str.trim());


                       /**CONVERTING A STRING TO AN ARRAY */

//A string can be converted to an array with the split () mthd.

// var txt="a, b,c, d,e"//string
// console.log(txt.split(","));//split on commas
// console.log(txt.split(" "))//split on space
// console.log(txt.split("|"));//split on pipe



/********************************************************************** */


                /***SECTION 8 */
                          /**DATE AND TIME IN JAVASCRIPT */
//javaScript data objects represent a single moment in time in a platform-independent format.Date objects contain number tha represents millisecond since 1 january 1970 UTC.


//creating Date Objects
//There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, second, milliseconds);
// // it takes 7 arguments or less than 7
// new Data(milliseconds);
// //we cannot avoid month swction
// new Date(date string);


                  /**new Date() methd.**/
//Date objects are creted with the new Date() constructor.

// let currDate=new Date();
// console.log(currDate); 

// console.log(new Date());
// console.log(new Date().toLocaleString());// 9/11/2022, 1:25:01 PM
// console.log(new Date().toString());//sat Nov 26 2022 23:31:29 


             /** Date.now() */
//returns the numeric value corresponding to the current time-the number of millisecond elapsed since january 1, 1970 00:00:00 UTC

// console.log(Date.now());//it return millisecond elapsed since january 1, 1979.

/**new Date(year,month,....) */

// 7 number of argument
//and millisecond (in that order)
//note: javascript counts months from 0 to 11.

// //  var d= new Date(2022, 0, 5, 10, 33, 30, 0);
//  var d= new Date(2022, 0, 5, 20, 33, 30, 0);
//  var d= new Date(2022,0);//month should be in argumnet so atleast 2 arguments required or else does not feed any argument
//  console.log(d.toLocaleString());

/**new Date(dateString) */
//new Date(dateString) creates a new date object from a date string

// var d=new Date("October 13, 2021 11:13:00");
// console.log(d.toLocaleString());

/**new Date(milliseconds) */
// var d=new Date(1669487676950);
// console.log(d.toLocaleDateString());


/******************DATE METHOD */

// const curDate=new Date();
// // how to get indivisual date
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());//it give in numeric form


                            /**TIME METHODS */

// const curTime = new Date();

// //how to get indivisual time

// console.log(curTime.getTime());
// // //The getTime() method returns the number of milliseconds since january 1, 1970
// console.log(curTime.getHours());
// // the getHours() method returns the  hours of a date as a number(0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());


             /**set time */
// let curtime=new Date();
// console.log(curtime.setTime(5));
// console.log(curtime.setHours(5));
// console.log(curtime.setMinutes(5));
// console.log(curtime.setSeconds(5));
// console.log(curtime.setMilliseconds(5));


               /**PRACTICE TIME**/
// new Date().toLocaleTimeString();//only time
// new Date().toLocaleDateString();//only date
// new Date().toLocaleString();//date and time both



/********************************************SECTION 9 MATH OBJECT IN JAVASCRIPT*******/

//The javaScript math object allow you to perform mathematical tasks on numbers.

//console.log(Math.PI);

//Math.round()
//returns the value of x rounded to its nearest integer

// let num=10.2565;
// console.log(Math.round(num));

//Math.pow()
//Math.pow(x, y)returns the value of x to the power of y

// console.log(Math.pow(2,3));
// console.log(2**3);

//Math.sqrt()
//returns square root of number
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(66));


//Math.abs()
//Math.abs(x) returns the absolute (positive value of x)

// console.log(Math.abs(-55));
// console.log(Math.abs(4-6));
// console.log(Math.abs(-55.56));


//Math.ceil()
//Math.ceil(x) returns the value of x rounded up to its nearest integer

// console.log(Math.ceil(4.51));
// console.log(Math.ceil(99.1));
// console.log(Math.ceil(99));

//Math.floor()
//Math.floor(x) returns the value of x rounded down to its nearest int 
// console.log(Math.floor(4.7));
// console.log(Math.floor(99.1));

//Math.min()
//Math.min() can be used to find the lowest value in a list of arguments


//Math.max()
//Math.max() can be used to find the max value in a list of arguments

// console.log(Math.min(0,150,30,20,-8,-200));
//console.log(Math.max(0,150,30,20,-8,-200));


//Math.random()
//Math.random() returns a random number between 0(inclusive), and 1()

// console.log(Math.random());it always give in 0.18721736 
// console.log(Math.floor(Math.random()*10));//0 to 9


//Math.trunc()
//The trunc() method returns the integer part of a number
// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));



                      /****PRACTICE TIME */

                    
//if the argument is a positive number, Math.trunc() is equaivalent to Math.floor(),
//otherwise Math.trunc() is equaivalent to Math.ceil().



                 /***************************SECTION10 DOM IN JAVASCRIPT */
                /**window v/s DOM */
//1. Window is the main container or we can say the global objects and any operations related to entire browser window can be a part of windowonjects.

//for ex the history or to find the url etc.//through window object we can find location of web page i.e href link

//1. whereas the DOM is the child of window object

//2.WINDOW HAS METHODS, PROPERTIES AND OBject , ex setTime() or setInterval() are the methods, where as Document is the object of the Window and it also has a screen object with properties describing the physical display.

//2. documnets is just the object of the global object that is window which deals with documents, the HTML elements themselves.

//3.Window has methods,properties and object.ex setTimeout() or setInterval() are the methods, where as Document is the object of the window and it also has a screen object with properties describing the physical display.

//**********************************DOM VS BOM********************************

//The DOM is the Documnets object Model, which deals with the document,the HTML elements themselves, e.g document and all traversal you would do in it, events, etc.

//For Ex:
//change the background colorto red
//document.body.style.background="red";

//The BOM is the browser object model, which deal with browser component aside from the documnet, like history,location,navigator and screen (as well as some others that vary by browser).OR 
//In simple meaning all the window operation which comes under BOM are performed using BOM.

//window object property are innerHeight,InnerWidth and there are many more

//LET,s see more practical on history object

//Function alert/confirm/prompt are also a part of BOM: they are directly not related to the documnet, but represent pure browser methods of communication with the user.

// alert(location.href);//show current URL
// if(confirm("want to visit ThapaTechnical")){
//   location.href="https://www.youtube.com/watch?v=PODgPW-hbfU&t=0s";
// }


                        /**DOM Navigation */

//root element of document is <HTML>.
//1: document.documentElement
         //return the element that is root element of document 
         
//2: document.head
//it show all data inside head

//3: document.body:
//it show all data inside body

//4:document.body.childNodes//to find out number of nodes(include tab,enter and whiteSpace)
// list of the direct children only

//5:document.children(without text nodes, only regular elements)

//if we want no. of element in body then we hqve to write (document.body.children.)

//6:documents.childNodes.length

//7:document.body.firstChild//one problem with this method that it show text also

//8:document.body.firstElementChild// it will not include space and text direct give actual data


              //PRACTICE TIME
//Q...How to check whether an element has child nodes or not?

//Ans...> //Ans...>document.body.hasChildNodes() 


 //Q..how to find the child in DOM tree   
 
  //9:document.body.firstElementChild.firstElementChild

//const firstChild=document.body.firstElementChild.firstElementChild =>press enter after then write variable name i.e firstChild =>press enter

//varname.style.color="red"


//const childtwo=document.querySelector('.child-Two')
//childtwo.style.color="red";


                         

//to check parent

//document.body.parentNode//body ke parent ke bare me baataya ga
//document.body.parentElement//same output

//document.body(head).nextsibling(agla sibling ke bare me batayaga)(previousSibling,previousElementSbiling)


//diference between previous sibling and previous element sibling are that previous sibling return text ,enter space all but previousElementSbiling will not return space and enter. 

                //PRACTICE TIME
//Q..How to check whether an element has child nodes or not?
//we will use hasChidNodes() if it will give true then it has childnodes




           /***SECTION 4:How to Search the Elements and the references */  

   //by taking reference, heading isobject here      
// const headingchange=document.getElementById('heading');
// headingchange.innerHTML="welcome bakesh"

                      /*****INTERVIEW QUESTION */

//Difference Between getElementById and querySelector?

                    //What is getElementById();
//syntax: element=document.getElementById(id);
//Returns a reference to the element by its ID.
//If the element with the specified ID is not in the document,it will retuns null.


                  //What is querrySelector()?
//Syntax:
       //element=document.querrySelector(selectors);

//Returns the first element within the document that matches the specified group of selectors,or null if no matches are found.

                    

           /*******************************EVENTS IN JAVASCRIPT */


//HTML events are "things" that happen to HTML elements.

//When javaScript is used in HTML pages, javaScript can "react" on these events.

//An HTML event can be something the browser does, or something a user does.

//Here are some example of HTML events:

//An HTML web page has finished loading
//An HTML input field  changed
//An HTML button  clicked
//often,when events happen,you may want to do something.

//javascript lets you execute code when events are detected.

//HTML allows event handler attributes,with javascript code, to be added to HTML

             /**Section 4 ways of writing Events in javascript */
  

//1: using inline events alert();

//2: By Calling a function (We already seen and most common way of writing)

//3:using Inline events (HTML onclick=""property and element.onclick)

//4:using event Listeners(addEventListener and IE's attachEvent)


//when a function call in a another function as a argument called callbackfunction.or function call as argument in method.


                 /**what is event object */

//Event object is the parent object of the event object.
//for Example:-MouseEvent, focusEvent, keyboardEvent etc.


                 /**MOUSEEVENT IN JAVASCRIPT */

//The MouseEvent Object Events that occur when the mouse interacts with the HTMLdocument belong to the MouseEvent Object.
//1>mousedown
//2.mouseup
//3.mouseenter
//4.mouseleave
                  /**KEYBOARDEVENT IN JAVASCRIPT */
//Events that occur when user pressure a key on the keyboard,belongs to the keyboardEvent Object.
//1>onkeypress
//2>onkeydown
//3>onkeyup



                 /**InputEvents in javascript */ 
               
//The onchange event occur when the value of an element has been changed.

//for radiobuttons and checkboxes, the onchange event occurs when the checked state has been chnaged.

//.value to get that value
//e.g=> const hh=document.getElementById('').value



                     /**INTERVIEW QUESTION */

//Q.> difference between onclick and addEventListener

//Ans check in eventtypes.html
//if we run onclick action for two time for same id then it overlap that is firt action is going to show but we can show both action using .addeventListener('').

  //Conclusion
  //This is becuse addEventListener does not overwrite axisting event handelrs,
  //whereas onclick override difference, of course, is that onclick will always work,
  //whereas addEventListener does not work in Internet Explorer before version 9.







 
               /***TIME BASED EVENTS IN JS */
  
//The window object allows execution of code at specified time intervals.

//These time intervals are called timing events.

//The two key methods to use with javascript are:

// setTimeout(function,milliseconds)
//Executes a function, after waiting a specified number of milliseconds.

// setInterval(functio, milliseconds)
//same as setTimeout(),but repeat the execution of thefunction continously.

//1> setTimeout()
//2>  clearTimeout()
//3>  setInterval()
//4>  clearInterval()


                     /***INTERVIEW QUESTION**/
//Q.> Diffrence between setTimeout and setIntervsl()?


          
                      /**OOPS IN JAVASCRIPT*/

//1 what is Object Literal?
//object literal is simply a key:value pair data structure.

//storing variable and functions together in one container,
//we can refer this as an Objects.    

//1st way
//in array we use square bracket and in object we use currly bracket
// let bioData={
//   myName : "ankittechanical",
//   myAge : 26,
//   // getData : function(){
//   //   console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   // }

//   //in es6
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

//    console.log(bioData.myName);
//    console.log(bioData.getData());



//what if we want object as a value inside an object

// let bioData={
//   myname : {
//     realname : "Ankit",
//     lastname : "rai",

//   }
// }
// console.log(bioData.myname.lastname);

//what is this Object?

//The definition of "this" object is that it contain the current context.

//The this object can have different values depending on where it is placed.

// //For example 1
// // console.log(this);
// // it refers to the current context and that is window global object


// ex2
//function myname(){
//   console.log(this);
// }
// myname();
//here current contex of this is global window

//ex3
// let myNames='ankit';
//function myName(){
//   console.log(this.myNames);
// }
// myName();


// //ex 4
// const obj={
//   myAge : 26,
//   myName() {
//     console.log(this);
//     console.log(this.myAge);
//   }
// }
// obj.myName();
//if we use this inside object then current contex of this will be object itself.


// //ex5
//  this object will not work with arrow function


                    /**INTERVIEW QUESTION */

//what will be output of
// const obj={
//   myAge : 26,
//   myName : ()=>{
//     console.log(this);
//   }
// }
// obj.myName();
//output again it will give window


  // let biodata={
  //   myname :{
  //     realname : "ankit",
  //     channelname : "technical"

  //   },
  //   myAge:26,
  //   getData(){
  //     console.log(`My name is ${this.myname.channelname} and my age is ${this.myAge}`);
  //   }
  // }   
  // biodata.getData();             


  


                   /**Destructuring in ES6 */

//The destructuring assingement syntax is a javaScript that makes it possible to unpack values from arrays, or properties from onjects, intomdistinct variables.



// Array Destructuring

// const myBioData =['vinod','thapa',26];

//let myFName = myBioData[0];
//let myLName = myBioData[1];
//let myAge = myBioData[2];
//console.loog(myAge);



// let [myFName,myLName,myAge]=myBioData;
// console.log(myFName);


//we can add values too
                        
// let [myFName,myLName,myAge,myDegree="MCS"]=myBioData;
// console.log(myDegree);




// Object destructuring

//  const myBioData={
//   myFname: 'Ankit',
//   myLname: 'rai',
//   age : 23
//  }

// //  let age = myBioData.age;
// //  let myFname = myBioData.myFname;
// //  console.log(age);
  
// let {myFname,myLname,age,myDegree="MCS"}=myBioData;



//Object Properties

//how to get dynamic dsata in object?
// we can now use Dynamic Properties->>use square bracket
      // let myName="Ankit";
      // const myBio={
      // [myName]: "hello how are you?",
      // // 26: "is my age"
      // [20+6]:"is my age"

      

      // }
      // console.log(myBio);


//no need to write key and value, if both are same
// let myname="ankit";
// let myage=26;
//  const mybio={myname,myage}
//  console.log(mybio);





                   //Spread Operator

// const colors=['red','green','blue','white'];

// // const mycolors=['red','green','blue','white','yellow','black'];
// //2nd time add one more color on the top and tell we need to write it again on mycolor array too

// const MyFavColors=[...colors,'yellow','black'];

// console.log(MyFavColors);




                   /**ES7 features */

//1: array include
// const colors=['red','green','blue','white','pink'];
// const ispresent=colors.includes('pink');
// console.log(ispresent);

//2: ** (exponentiation Opretor)

// console.log(2**3);



                        /**ES 8 */

 //String padding
 //object.values()
 //object.entries()               

//  const message="my name is vinod";
//  console.log(message);
//  console.log(message.padStart(5));
//  console.log(message.padEnd(10));

// let myage="26".padEnd(10);
// myage (write in console)



//  const person = {name:'ankit',age:87};
// // console.log(Object.values(person));//if we want print all data in inside object then we will go for loop but we can get by Object.values(object name)
// console.log(Object.entries(person));//each key and its value save in an array and all array save in a single array.

        
                      /**ES 2018 */     

// const person={name:'ankit', age:22};

// const sPerson={...person};

// console.log(person);
// console.log(sPerson);


                       /**ES 2019 */
// const person = {name:'ankit',age:87};
        
// const entrie=Object.entries(person);
// // console.log(entrie);

// console.log(Object.fromEntries(entrie));//it reverse Object.entries.


                    /**ES 2020 */

//#1: BigInt

// let oldNum=Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(9007199254740991n + 12n);//if we want add nunber to maxsafe integer then we hav eto write n wit that number and also with safe max number.
// let newNum=9007199254740991n + 12n;
// console.log(newNum);
// console.log(typeof newNum)//answer is "bigInt".


//#3: NULLISH COALESCING
//the nullish coalescing operator(??)is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined and otherwise returns its left-hand side operand.


                        //ES 2014

//  x=3.14;
//  console.log(x);
 
// "use strict";
// x=3.14;
// console.log(x);// an error given
 

// "use strict";
// let x=3.14;
// console.log(x);//given output





     /*****************************************************************ADVANCED JAVASCRIPT**************************************/ 


     
              /**EVENT PROPAGATION AND EVENT BUBBLING AND EVENT CAPTURING*/

//WHAT IS EVENT PROPAGATION?
//Ans.>The Event Propagation mode determines in which order the element receive the event.              

//Capture phase==>>going from the window to the event target phase.//also called trickling.

//Target Phase==>> It is the target phase.

//Bubble Phase==>>From the event target parent back to the window.
// with Event bubbling. the event is first captired and handle by the innermost element and then propagated to outer elements.

//by defuat it is bubbling propagation.

//and to stop propagation we have to use event.stopPropagation().



                  /***HIGHER ORDER FUNCTION */

// // function which takes another function as an argumnent is caled HoF

// //wo function jo dusre function ko as an argument accept krta hai use HOF.


                      /***CALLBACK FUNCTION */

//function which get passed as an argument to another function is called CBF.
// // a callback function is function which passed as argument to another function, to be "called back"at a later time.

//                /*****MAKE A CALCULATOR  */

//  const add=(a,b)=>{
//   return a+b;
//  } 
//  const sub=(a,b)=>{
//   return Math.abs(a-b);
//  }
//  const mult=(a,b)=>{
//   return a*b;
//  }


//  const calculator=(num1,num2,operator)=>{
//          return operator(num1,num2);
//  }
//  console.log(calculator(5,2,add));






          /*************************ASYNCHRONOUS JAVASCRIPT */

  
             //HOISTING IN JAVASCRIPT
             
//1.>we have a certain phase and execution phase

////Hoisting in javascript is a machanism where variables and functions decalaration are moved to the top their scope before the code execute.

// for Example
// console.log(myName);
// var myName;
// myName="thapa";//output:undefined

// console.log(myname);
// let myname;
// myname="ankit";//output error

//so hoisting is not use after esc2015.


          /***SCOPE CHAIN AND LAXICAL SCOPING */

// // The scope chain is used to resolve the value of variable names in js.

////scope chain in js is lexically defined, which mean sthat we can see what the scope chain will be by looking at the code.

//// at the top, we have the global scope, which is the windoe object in the browser.

////Lexical scoping measns now, the inner function can get access to their parent functions variables but the vice-vers is not true.

////for example

// let a="Hello guys"; //global scope

// const first=()=>{
//   let b="How are you ?"
   
//   const second=()=>{
//     let c="hii, I am fine thsnk you";
//     //console.log(a+b+c);
//   }
//   // console.log(a+b+c);// i can not use c.
// }

  
               /**CLOSURES IN JAVASCRIPT */

//A closure is the combination of a function bundle together (enclosed) with references to its surrounding state (the lexical environment).

//In other words, a closure give you
// // access to an outer function's scope from an inner function.

// //In javascript, closures are created every time a function is created, at function creation time.



//// For exsample
// const outerFun=(a)=>{
//   let b=10;
//   const innerFun=()=>{
//     let sum=a+b;
//     console.log(`the sum of the two number is ${sum}`);
//   }
//   return innerFun;
// }
// let checkclosure=outerFun(5);
// console.dir(checkclosure);


// "use strict"
// x="ankit";
// console.log(x);



              /***DIFFERENCES BETWEEN SYNCHRONOUS AND ASYNCHRONOUS JAVASCRIPTS */

//// 6:Synchronous javascript prog

// const fun2=()=>{
//   console.log(`Function 2 is called`);
// }
//  const fun1=()=>{
//   console.log(`Function 1 is called`);
//   fun2();
//   console.loog(`Function 1 is called again`);
//  }

//  fun1();

////7: Asynchronous javascript 

// const fun2=()=>{
//    setTimeout (()=>{
//     console.log(`fumction 2 is called`),2000
//    });
//   }

//    const fun1=()=>{
//     console.log(`Function 1 is called`);
//     fun2();
//     console.log(`Function 1 is called again`);
//    }
  
//    fun1();




           

           /************************************EVENT LOOP IN JAVASCRIPT */

//global execution---->>execution stack----->webApi---->queu message





               /// Very imp...        / ***FUNCTION CURRYING */

//currying is a techanique of evaluating function with multiple arguments, into sequence of function with single argument.

//currying

// function sum(num1){
//   //console.log(num1);
//   return function(num2){
//    // console.log(num1,num2);
//    return function(num3){
//      console.log(num1+num2+num3);
//    }
//    }
//   }
// sum(5)(3)(8)

//we can complete one line above code using fat arrow function
// const sum=(num1)=>(num2)=> (num3)=> console.log(num1+num2+num3);
//     sum(5)(3)(8);


           /**************CALLBACK HELL */

//  setTimeout(()=>{
//    console.log(`1 work is done`);
//   setTimeout(()=>{
//      console.log(`2 work is done`);
//      setTimeout(()=>
//       {console.log(`3 work is done`);
//        setTimeout(()=>
//        {console.log(`4 work is done`);
//          setTimeout(()=>
//           {console.log(`5 work is done`)},1000)
//   },1000)
//   },1000)
//   },1000)
//  },1000)   

