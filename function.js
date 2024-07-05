function myfunction(){
    console.log("Hello Wolrd!");
}
myfunction();
//------------------------------------
function mfunction(msg,n){
    console.log(msg,n);
}
mfunction("hello world",20);

function sum(a,b){
    console.log(a+b);
}
sum(67,5);

//arrow function:
 const arrowsum= (a,b)=>{
    console.log(a+b);
 }
 arrowsum(3,5);

 //Functtion that returns number of vowels in word
 function vowels(str){
        i=0;
        for(const char of str){
            if(char==="a" || char==="e"|| char==="i" || char==="o"||char ==="u"){
                i++;
            }
        }
        console.log(i);
 }
 vowels("abdulrehman");
//Using arrow function
 const vowelcount=(str)=>{
    i=0;
    for(const char of str){
        if(char==="a" || char==="e"|| char==="i" || char==="o"||char ==="u"){
            i++;
        }
    }
    console.log(i);
 }
 vowelcount("weeb");
 
 //Array that returns square of each value using for each function( high order function)
let arr=[1,2,3,4,5];
arr.forEach((val)=>{
     sqr=val*val;
     console.log(sqr);  
     return sqr;
}
)

//Array marks of students 90+
let marks =[79,56,45,98,89,91,95];
let newarr=marks.filter((val)=>{
    return val>90;
}
)
console.log(newarr);

//use of reduce method in array:
let n=prompt("Enter a number for array=");
let array=[];
for(let i=1;i<=n;i++){
    array[i-1]=i;
}
console.log(array);
//Sum 
let summ =array.reduce(((prev,curr)=>{
    return  prev+curr;
}))
console.log(summ);
//product
let mult=array.reduce(((res,cur)=>{
    return res*cur;
}))
console.log(mult);
