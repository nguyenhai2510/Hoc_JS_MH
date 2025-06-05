/* 
DOM
0. Document
1. element: ID, Class, tag, CSS selector, HTML selection
2. attribute
3. Text
-------------------------
JavaScript : Browser || Server
 Browser : Html -> DOM -> WEB API
*/
// document.write('Hello world!');
           //       chọc qua ID 
// var headingNote = document.getElementById('item');
// console.log(headingNote);

// var box = document.getElementById('item1');
// console.log(box.innerHTML);


            // chọc qua class 
// var box1 = document.getElementsByClassName('item2');
// console.log(box1);

         // chọc qua Tag
// var box2 = document.getElementsByTagName('h2');
// console.log(box2);

  // chọc qua CSS selector
// var box3 = document.querySelector('.item2');
// console.log(box3);

// var box4 = document.querySelectorAll('.item2');
// console.log(box4);

// var box4 = document.querySelector('.item3');
// // c1: 
// console.log(box4);
// console.log(box4.querySelectorAll('li'))

// ---------------------------------------
// DOM
// 0. Document
// 1. element: ID, Class, tag, CSS selector, HTML selection
// 2. attribute
// 3. Text
// -------------------------

// thêm sửa xóa Attribute 

// var headingElement = document.querySelector('h1');

// headingElement.className ='heading';
// headingElement.setAttribute('id' ,'heading') // thêm thuôc tính
// console.log(headingElement.getAttribute('class')) // lấy ra 
// console.log(headingElement)

// headingElement.innerText = ' <i>new heading</i>'
// headingElement.textContent = 'new heading1'; 

// getter
// console.log(headingElement.innerText), // -> người dufng nhìn thấy
// console.log(headingElement.textContent) //-> lấy nguyên bản text node



