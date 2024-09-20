function Add( a:number, b:number){
  return a + b;
}
let sum = Add(20, 80);
console.log(sum);

// Data Type... 
let num:number = 20;
let str:string = "Hello Abhishek!";
let bolo:boolean = true;
console.log(num,str,bolo);

function SetTime(){
  console.log("Hello TypeScript!");
};

setTimeout(()=>{
  SetTime()
},2000);