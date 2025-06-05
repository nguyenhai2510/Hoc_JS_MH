// const myPerson = {
//     Name: 'Long',
//     Age: 20,
//     isStudent : false
// };
//  for (let key in myPerson){
//     console.log(key, myPerson[key])
// }

// object method

// const person = {
//   name: "An",
//   greet: function() {
//     console.log("Hello, " + this.name);
//   }
// };

// person.greet();

// console.log(person.add)

// -------------------------------------------

// object contructor

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function(){
//     console.log(`hello  ${this.name}`)
//   }
// }
/*
cách hoạt động:
1. tạo 1 project mới rỗng
2. gán this cho hàm mới đó
3.thực thi hàm contructor
4. trả về project mới

*/

// const person1 = new Person("AN", 25);

// object prototype -> chia sẻ các thuộc tính 
// Person.prototype.className = 'MH'
// Person.prototype.abc = function(){
//     return this.className;
// }

// console.log(person1.className);
// console.log(person1.abc);
// ---------------------
// Date object 
// const now = new Date();
// console.log(now);

// const date = new Date();

// console.log(date.getFullYear()); 
// console.log(date.getMonth() + 1);    
// console.log(date.getDate()); 

// -------------------------------

// var date = 2;

// if(date == 2){
//     console.log('nay la thu 2')
// } else if(date == 3){
//     console.log(' nay la thu 3')
// } else{
//     console.log("off")
// }
// ------------------
// switch case 
// const day = 3;

// switch(day) {
//   case 1:
//     console.log("Thứ Hai");
//     break;
//   case 2:
//     console.log("Thứ Ba");
//     break;
//   case 3:
//     console.log("Thứ Tư");
//     break;
//   default:
//     console.log("Không phải ngày trong tuần");
// }

// --------------------------------

// ternary operator

// const user = {
//     name: 'JS',
//     coins : 250
// }
// var result = user.coins > 0 ? `${user.coins} coins` : 'miễn phí';
// console.log(result); 

// --------------------------------------------------------

// for Loops

// for(let i = 0; i <10; i++){
//     console.log(i);
// }

// var myArray = [
//   'JS',
//     'PHP',
//     'C++'
// ]

//  var l = myArray.length;
//  for(let i =0; i<l; i++){
//     console.log(myArray[i]);
//  }

// for/in
// var myInfo = {
//     name : 'Long',
//     age : 20,
//     email : 'abc'
// }
// for(var key in myInfo){
//     console.log(myInfo[key])
// }

// var s ='javaScript';

// for(let i in s){
//     console.log(s[i])
// }

// for /of
// const arr = [10, 20, 30];

// for (let num of arr) {
//   console.log(num);
// }
// var myInfo = {
//     name : 'Long',
//     age : 20,
//     email : 'abc'
// }

// console.log(Object.keys(myInfo))

// do/while 
// let i = 0;
// while(i < 5){
//     console.log(i),
//     i++
// }

// const myArray = [
//     'java',
//     'PHP',
//     'Ruby'
// ]
// let i = 0;
// while(i < myArray.length){
//     console.log(myArray[i])
//     i++;
// }
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);


// for (let i = 0; i < 10; i++) {
//   if (i === 5) break;     
//   if (i % 2 === 0) continue; 
//   console.log(i);          
// }


// myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ]
// for(var i =0; i< myArray.length; i++){
//     for(var j =0; j < myArray[i].length; j++){
//         console.log(myArray[i][j])
//     }
// }

// -------------------------------------------------------------
/*  Array Method:
  forEach()
  every()
  some()
  find()
  Filter()
  map()
  reduce()
*/

//             push -> thêm vào cuối mảng
// const a = [1,2];
// a.push(3);
// console.log(a)

//                pop  -> xóa ở cuối mảng
// const arr = [1, 2, 3];
// const last = arr.pop();
// console.log(last); // 3
// console.log(arr);  // [1, 2]

//                  shift() -> xóa ptu dau mang và tra ve ptu đó
// const arr = [1, 2, 3];
// const  fi = arr.shift();
// console.log(fi);
// console.log(arr)

//                     unshift() -> thêm ptu dau mang
// const arr = [1, 2, 3];
// arr.unshift(0);
// console.log(arr)

//                       indexOf -> tim vị trí phần tử
// const arr = ['apple', 'banana', 'cherry']
// console.log(arr.indexOf('cherry'));  // trả về index

//                  includes -> kiem tra phan tu có tồn tại trong mảng ko  -> true/false 
// const arr = [1, 2, 3];
// console.log(arr.includes(2));
// console.log(arr.includes(5));

//                  slice -> lấy 1 phần của mảng 
// const arr = [1,2,3,4,5];
// const part= arr.slice(1,4); //-> từ start -> trước end
// console.log(part) //2,3,4

//       splice -> thêm  hoặc xóa 1 phần tử 
// const arr = [1, 2, 3, 4]; 
// arr.splice(1,3,10,20,30); // index bắt đầu,số phần tử xóa, item1,item2,item3 là các phần tử thay thế
// console.log(arr);

// forEach(), every, some
// const  courses = [
//     {
//         id: 1,
//         name: 'java',
//         coin: 20
//     },
//     {
//         id: 2,
//         name: 'PHP',
//         coin: 30
//     },
//     {
//         id: 3,
//         name: 'javaScript',
//         coin: 0
//     },
// ];

//             // for Each  -> duyệt qua các phần tử trong mảng
// courses.forEach(function (item, index){
//    console.log(index, item);
// })

//              every() -> xem tât cả các dk có thỏa mãn hay không -> tra ve true false
// var isFree = courses.every(function(item , index){
//     return item.coin === 0;
// })
// console.log(isFree);

//                some() -> 1 trong các ptu duyệt qua thỏa mãn -> tra vè true/false
// var isFree = courses.some(function(item , index){
//     return item.coin === 0;
// })
// console.log(isFree);

//               find -> tìm kiếm phần tử dau tien thõa mãn ĐK
// const arr = [1, 2, 3, 4];
// const firstEven = arr.find(x => x%2 ===0)
// console.log(firstEven);

//               filter -> lọc phần tử theo điều kien  
// const arr = [18, 5, 21, 25];
// const adult = arr.filter(age => age > 18);
// console.log(adult); // tra ve mang [21,25]

// map  -> mỗi phần tử biến đổi theo hàm callback
// const  courses = [

//     {
//         id: 2,
//         name: 'PHP',
//         coin: 30
//     },
//     {
//         id: 3,
//         name: 'javaScript',
//         coin: 0
//     },
// ];
//  const  courseHandler = function (item, index, arr) {
//     //  console.log(item);
//     return{
//         id: item.id,
//         name: `ten ${item.name}`,
//         coin: `gia tien ${item.coin}`,
//         myArr: arr
//     }
// }

// var newCourses = courses.map(courseHandler);
// console.log(newCourses);

//                 reduce -> rút gọn mảng thành 1 giá trị duy nhất, vd  như tính tổng , đếm số lần xuất hiện

// const  courses = [
//     {
//         id: 1,
//         name: 'java',
//         coin: 40
//     },
//     {
//         id: 2,
//         name: 'PHP',
//         coin: 30
//     },
//     {
//         id: 3,
//         name: 'javaScript',
//         coin: 20
//     },
// ];
// var i =0;
// function coinHandler(accumulator, CurrentValue, CurrentIndex, OrginArr){
//       i++;
//       total = accumulator+ CurrentValue.coin;
//       console.table({
//           'lượt chạy i': i,
//           'Biến tích trữ' : accumulator,
//           'gia': CurrentValue.coin,
//           'Tong' : total
//       });
//       return total;

// };
// var totalCoin = courses.reduce(coinHandler, 0);
// console.log(totalCoin);

// var totalCoin = courses.reduce((acc, cur)=>
//      acc + cur.coin,0
// );
// console.log(totalCoin);

// const nested = [[1, 2], [3, 4], [5, 6],7];

// const flat = nested.reduce((acc , curr)=> {
//     return acc.concat(curr);
// },[]);


// console.log(flat);  

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// var count = fruits.reduce((acc, curr)=> {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
// },{});
// console.log(count);

// const people = [
//   {name: "An", age: 25},
//   {name: "Binh", age: 30},
//   {name: "Cuong", age: 25},
//   {name: "Duyen", age: 30},
// ];

// const groupByAge = people.reduce((acc, person)=>{
//     let key = person.age;
//     if(!acc[key]){
//         acc[key] =[];
//     }
//     acc[key].push(person.name);
//     return acc;
// }, {});

// console.log(groupByAge);

// callback

// Array.prototype.map2= function(callback){
//    var l = this.length;
//    for( let i = 0; i < l; i++){
//        var result =  callback(this[i], i);
//        console(result);
//    }
// };
// var  courses = [
//     'Java',
//     'PHP',
//     'JavaScript'
// ];

//  var htmls = courses.map2(function( item, index){
//     return `<h2>${item}</h2>`;
// });
// // courses.map2(function(item){
// //     console.log(item);
// // })

// function greeting(name) {
//   console.log("Hello " + name);
// }

// function processUserInput(callback) {
//   const name = "An";
//   callback(name);
// }

// processUserInput(greeting);

// function doSomething(callback) {
//   console.log("Start task...");
//   setTimeout(() => {
//     console.log("Task done!");
//     callback();
//   }, 2000);
// }

// doSomething(() => {
//   console.log("Callback function called!");
// });

// Array.prototype.forEach2 = function(callback){
//     for(var index in this){
//         console.log('index:', index)
//     }
// }

// var courses = [
//     'JavaScript',
//     'Java',
//     'PHP'
// ];
// courses.forEach2(function (item, index, array) {
//     console.log(item, index, array)
// })

// Array.prototype.filter2 = function(callback){
//     var output = [];
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//              var result = callback(this[index], index);
//              if(result){
//                 output.push(this[index]);
//              }
//         }
//     }
//     return output;
// }
// const  courses = [
//     {
//         id: 1,
//         name: 'java',
//         coin: 40
//     },
//     {
//         id: 2,
//         name: 'PHP',
//         coin: 30
//     },
//     {
//         id: 3,
//         name: 'javaScript',
//         coin: 20
//     },
// ];
// var cs =  courses.filter2(function(item, index){
//     return item.coin >= 30;
// })
// console.log(cs);

//                 đệ quy 
// function gt (number){
//     if(number > 0){
//         return number * gt(number-1);
//     }
//     return 1;
// }
// console.log(gt(6))

