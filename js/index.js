//alert('i am here');
//console.log('hello hamid');
//console.warn('hello hamid');
//console.error('hello hamid');

///////////////// integer data type///////////////////////
//var num=12;      
//console.log(num);

////////////////// string data type/////////////////////
//var str ="hamid"; 
//console.warn(str);

///////////////////////// object define ///////////////
//var marks={      
    //ahsan: 90,
    //hamid: 95
//}
//console.error(marks['hamid']);

/////////////// boolen/////////////////
//var s=true;   
//console.log(s);

/////////////////////////// string////////////////
//var s='true';   
//console.log(s);
//var a;
//console.log(a);


/////////////////// primitive datatype : integer, string, boolean/////////////////////////
// referrence datatype : array
//var marks={                // object define
    //ahsan:90,              // ahsan is the key and 90 is the value
    //hamid:95
//}
//console.warn(marks['ahsan']);
//var a=[1,5,'hamid','ahsan',true]             // array
//console.log(a[3]);
//console.log(a);


/////////////////// arthmetic operators +-*%//////////////////////
//var num1=50;
//var num2=70;
//console.log(num1+num2);
//console.log(num1-num2);
//console.log(num1*num2);
//console.log(num1%num2);


////////// Comparison Operators ==,!=,>,</////////////////////

//var num1=50; /// when you asign the value of any varible use = for example var a =60/////
//var num2=70;
//console.log(num1<num2)
//console.log(num1>num2)
//console.log(num1!=num2)  // != means not equal to/////////
//console.log(num1==num2)   // == means boths value are equal ////////
//console.log(num1===num2) // === means both values are equal as well as datatype will be same as well ////



///////////logical operators   && (And operator), || (OR operator), !(Not operator)////////////////
////// these operators only work in boolean mean true and false /////////////


//var a= true;
//var b= false;      /// And operator means if both conditions are true then it provide 1 otherwise 0////////
//console.log(a & b);

//var a= true;
//var b= false;      /// OR operator means if one variable is  true then it provide true ////////
//console.log(a || b);

//var a= true;
//var b= false;      /// Not operator means when we use ! operator with any value then it provide oposite value////////
//console.log(!a);


//////////////// If else condition /////////////////////

// var a=10;
// if(a>10){
//    console.log('value of a is greater than 10')
// }
// else if(a==10){
//     console.log('value of a is equal to  10')  ////// both values are equal then we use == ////////
// }
// else if(a==9){
//     console.log('value of a is equal to  9')     //////// we can use multiple else if condition in if else condition///////
// }
// else if(a==8){
//     console.log('value of a is equal to  8')
// }
// else
// {
//     console.log('value of a is less than 10')
// }


///////////////////////////Arrays///////////////////////////

//var a=[1,2,'hamid','ahsan'];
//console.log(a);
//console.log(a.length)    /// we can use the length function to get the length of array/////


//var a=[1,2,'hamid','ahsan'];
//a.push(12)
 //console.log(a);   /// we can use the push function to add the last value of array/////


 //var a=[1,2,'hamid','ahsan'];
 //a.shift()     /// we can use the shift function to delete the first index (like first number or value) of array/////
//console.log(a);
    

//var a=[1,2,'hamid','ahsan'];
 //a.unshift('Australia')     /// we can use the unshift function to Add the value in first index (like first number or value) of array/////
//console.log(a);

// var a=[1,2,'hamid','ahsan'];
//  var b= a.toString()   /// we can use the tostring function to convert the value in to string and we always use string in single ''/////
// console.log(b);

///////////////////////////////// javascript functions /////////////////////////////////////////////////////

//var str='hamid is a man hamid is a programmer';
// console.log(str.length); ///////// check the total length///////////////
// console.log(str.indexOf("man")); /// check the length from start to this word man////////
// console.log(str.indexOf('hamid')); /////// this function just pick the first hamid in the text.////////
// console.log(str.lastIndexOf('hamid'));/////// this function just pick the last hamid in the text.////////
// console.log(str.slice(0,4));/////////// this slice function just break the words according to requirement/////
// console.log(str.replace("hamid","ahsan"));/////// this function just replace word //////////


////////////////////////////// date functions in javascript/////////////////////////////////
// let mydate= new Date();
// console.log(mydate);////////// to get the current date//////////
// console.log(mydate.getDay());/////////////// to get the today number////////// like monday is 1 tuesday is 2 so on///
// console.log(mydate.getFullYear());///////// to get the current year/////////////
// console.log(mydate.getHours());////////// to get the hours //////////////
// console.log(mydate.getMinutes());/////////// to get the minutes /////////


////////////// looopsssss///////////////////////


/////////////////////For Loop/////////////////////////////////////////

// for(var i=1; i<11;i++){
//     console.log(2*i);   /////////// For loop for concept of table 2/////////
// }

// var arr=[1,2,3,"hamid",true];
// for(var i=0; i<arr.length;i++){   /////// for looop to get the length of array ////////////////////
// console.log(arr[i]);
// }

// var arr=[1,2,3,"hamid",true];
// for(var i=0; i<arr.length;i++){  /////////// for loop with using array ///////////////
//     if(arr[i]==2){

//     }  
//     else{
//         console.log(arr[i]);
//     }
// }


//////////////////////////// while loop ///////////////////////////
// var arr=[1,2,3,"hamid",true];
// let i=0;
// while(i<arr.length){
//     console.log(arr[i]);
// }

var arr=[1,2,5,"Hamid",true];
// for(var i=0;i<=5;i++){
//     console.log(arr[i]);   /////////////// foor loop////////////////////
// }

// arr.forEach(function(element){
//     console.log(element); ////////////////For Each ///////////////////////
// })

let i=0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}