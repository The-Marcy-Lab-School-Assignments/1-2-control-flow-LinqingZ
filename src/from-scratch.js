const measureRain = (inches) => {
  if (inches === 0){
    console.log('drought')
  }
  else if (inches < 2){
    console.log("dry")
  }
  else if (inches < 4){
    console.log("average")
  }
  else if (inches < 6){
    console.log("rainy")
  }
  else if (inches >= 6) {
    console.log("flood")
  }
};

const happyBirthdayPet = (breed, age) => {
  if (breed === 'snake') {
    console.log('Hiss hiss!');
  }
  else if (breed === 'cat') {
    if (age < 5) {
      console.log('Mew mew!');
    } 
    else {
      console.log('Meow meow!');
    }
  }
  else if (breed === 'dog') {
    if (age < 5) {
      console.log('Arf arf!');
    }
    else if (age < 10) {
      console.log('Woof woof!');
    }
    else {
      console.log('Boof!');
    }
  }
  else {
    console.log('Happy birthday!');
  }
  // switch (breed) {
  //   case 'snake':
  //     console.log('Hiss hiss!');
  //     break;
  //   case 'cat':
  //     switch (true) {
  //       case age < 5:
  //         console.log('Mew mew!');
  //         break;
  //       default:
  //         console.log('Meow meow!');
  //     }
  //     break;
  //   case 'dog':
  //     switch (true) {
  //       case age < 5:
  //         console.log('Arf arf!');
  //         break;
  //       case age < 10:
  //         console.log('Woof woof!');
  //         break;
  //       default:
  //         console.log('Boof!');
  //     }
  //     break;
  //   default:
  //     console.log('Happy birthday!');
  // }
};

const funTypes = (jsType) => {
  if (typeof jsType === 'string') {
    console.log("That's just some text.");
  }
  else if (typeof jsType === 'number') {
    if (Number.isNaN(jsType)) {
      console.log("Well, now you're just showing off.");
    }
    else{
      console.log("That's a good number.");
    }
  }
  else if (typeof jsType === 'boolean') {
    console.log("To bool, or not to bool?");
  }
  else if (typeof jsType === 'undefined') {
    console.log("Nothing, but I didn't set that.");
  }
  else if (jsType === null) {
    console.log("Nothing, and I did set that.");
  }
  else if (typeof jsType === 'object') {
    if (Array.isArray(jsType)) {
      console.log("I order you to be indexed.");
    } else {
      console.log("Anybody got the key?");
    }
  }
};
// const funTypes = (jsType) => {
//   switch (typeof jsType) {
//     case 'string':
//       console.log("That's just some text.");
//       break;
//     case 'number':
//       switch (true) {
//         case Number.isNaN(jsType):
//           console.log("Well, now you're just showing off.");
//           break;
//         default:
//           console.log("That's a good number.");
//       }
//       break;
//     case 'boolean':
//       console.log("To bool, or not to bool?");
//       break;
//     case 'undefined':
//       console.log("Nothing, but I didn't set that.");
//       break;
//     case 'object':
//       switch (true) {
//         case jsType === null:
//           console.log("Nothing, and I did set that.");
//           break;
//         case Array.isArray(jsType):
//           console.log("I order you to be indexed.");
//           break;
//         default:
//           console.log("Anybody got the key?");
//       }
//       break;
//     }
// };

const rounder = (float, roundingSetting) => {
  if (roundingSetting === "up"){
    return Math.ceil(float)
  }
  else if (roundingSetting === "down"){
    return Math.floor(float)
  }
  else if (roundingSetting === "honest"){
    return Math.round(float)
  }
};

const fizzBuzzish = (num) => {
  if (num %3 === 0 && num %5 === 0){
    console.log("fizzBuzz!")
  }
  else if (num %3 === 0){
    console.log("fizz") 
  }
  else if (num %5 === 0){
    console.log("buzz")
  }
  else{
    console.log(num)
  }
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
