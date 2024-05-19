// const array = [
//     "cat" , "dog" , "cow","gg","example"
// ];
 
//  console.log(
//     array.reduce((a, b)=> {
//       return a.length > b.length ? a : b;
//     })
//   )

////////////////////////////////////////////////

const array = [
    "cat" , "dog" , "cow","gg","example","","aa",null,"ss"
];

console.log(array.filter((arr)=>{
 return arr != null && arr != '' && arr != 'ss'
}));  



 