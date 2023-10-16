//The difference of (var, let , const)

            //  Var  //
//   function a (){
//     for(var i = 0; i < 12 ; i++){
//         console.log(i);
//     }
//     console.log(i);
//   }

//  a();

            // let //
// function mod(){
//     for(let i = 0; i < 10; i++){
//         console.log(i);
//     }
// }

// mod();


//var adds itself to the windos object

// var a = 10;

//let,const dosn't adds to window object
// var b = 12;s


             // lexical Environment  //

//   function abc(){
//       var a = 12;
//       function def(){
//         var b = 3;
//       }
//   }


               //Copy tha values not refrence //

//  var a = [1,2,3,4,5];
//  var b = [...a];

//  a.pop();
//  a.push(20);
//  a.shift();
//  a.unshift(23);
//  a.splice(1,2)
// console.log(a);
// console.log(b);

//With objects

// var obj = {name: "Alex"};
// var copyboj = {...obj};

// console.log(obj);
// console.log(copyboj);

            // Truthy and falsy //

// if(0){
//     console.log("Hello");
// }

// else{
//     console.log("Ola");
// }

             // foreach forin do-while //


 //foreach
//  var a = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

// a.forEach(function(val){
//      console.log(val+2);
// })


//forin

// var obj = {name: "picku" , age: 24, city: "surat"}

// for(var key in obj){
//      console.log(`${key}: ${obj[key]}`);
// }


          //practice Question

// const num = [20, 23, 26, 29, 30];

// var text = "";

// for(var key in num){
//      text += num[key] + " ";
// }

// document.getElementById("demo").innerHTML = "This is a forin loop : " + text;



                  //Callback function //

// var text = "Hello";
// setTimeout(function(){
//     console.log(text)
// }, 2000);


                // first class function //

// function abcd(a){
//         a();
// }

// abcd(function(){console.log("hey")});


               //Bahind the scenes of Array //

// var arr = [1, 2, 4, 5];

// typeof arr
// Array.isArray([])
// Array.isArray({})


                // How to delete object prop //

// var a = {name: "priyansh" , age: 45};

// delete a.age;
// console.log(a);

