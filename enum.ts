// Add Enums only Numbers type...
//By default position of str == 0
enum student {
  num,  // position of str == 0
  num1 // position of str == 1
};

console.log(student.num);
console.log(student.num1);

enum school {
  number = 1,
  number1 = 2
}

console.log(school.number);
console.log(school.number1);

// Enums Add only String Type...
 
enum allStr {
  str = 'Hello',
  str1 = 'World!',
}

console.log(allStr.str);
console.log(allStr.str1);