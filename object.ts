type infoType={name:string, age:number, gender:string}
const obj:infoType={
  name : 'Abhishek',
  age : 20000000,
  gender : 'Male'
};

type infomationType={name:string, age:number, gender:string}
const person:infomationType={
  name : 'Vishvakarma',
  age : 20040600,
  gender : 'Male'
};



console.log(person.name, person.age, person.gender);
console.log(obj.name, obj.age, obj.gender);