// Function
//print the odd number1


function oddnumber(arr){
    arr.forEach(num => {
     if(num%2!==0){
         console.log(num);
       }
 }); 
}
let array=[1,2,3,8,10,12,13,15];
oddnumber(array);


//convert all the strig to titile  caps an string array

function convertarray(array) {
 return array.toLowerCase().replace(/\b\w/g, function(char) {
     return char.toUpperCase();
 });
}
let stringArray=["the hello verify","i am a fullstack developer"];
let titleCasedArray = stringArray.map(convertarray);
console.log(titleCasedArray);

//sum of all number in array

function sumArray(array) {
 let sum = 0;
 for (let i = 0; i < array.length; i++) {
     sum += array[i];
 }
 return sum;
}

let numbers = [1, 2, 3, 4, 5];
let sum = sumArray(numbers);
console.log(sum);

//return all the primnumber in array

let a=[1,4,7,9,3,5,7,15,14,27,45,41];

function primnumber(n){

 if(n<=1){

     return false;
 }
 for(let i=2;i<=Math.sqrt(n);i++){
     if(n%i===0){
         return false;
     }

 }
 return true;
}
function prime(array){
 return array.filter(primnumber);
}

let result=prime(a);
console.log(result);

//Retrun all the pailndromes in array

function pailndromes(pa){

 const len=pa.length;
 for(let i=0;i<len/2;i++){

     if(pa[i]!==pa[len-1-i]){
         return false;
     }
 }
return true;
}

function pailndromesarrys(str){
 return str.filter(item=>pailndromes(item.toString()));
}

let strarry=["level", "hello", "reaactt", "world", "power"];
let arraysresult=pailndromesarrys(strarry);
console.log(arraysresult);

//return median of two sorted array of the same size

const findMedianSortedArrays = (arr1, arr2) => {
 const combinedArray = [...arr1, ...arr2].sort((a, b) => a - b);
 const length = combinedArray.length;
 const mid = Math.floor(length / 2);
 return length % 2 === 0 ? (combinedArray[mid - 1] + combinedArray[mid]) / 2 : combinedArray[mid];
};

const sortedArray1 = [11, 31, 51];
const sortedArray2 = [21, 41, 61];
const median = findMedianSortedArrays(sortedArray1, sortedArray2);
console.log(median);

//  Removed Duplicates from in array

function Duplicates(arr){
 return arr.filter((iyem,index)=>arr.indexOf(iyem)===index);
}

const arrydeuplication=[1,2,3,3,4,4,5,5,8,9,10,17,14];
const resultarr=Duplicates(arrydeuplication);
console.log(resultarr);


//Rotate an array by k times;


function Roatearray(arr,k){
 k=k%arr.length;
 return arr.slice(k).concat(arr.slice(0,k));
}
const rotate=[1,2,3,3,4,4,5,5,8,9,10,17,14];
const  rotearray=Roatearray(rotate);
console.log(rotate);





