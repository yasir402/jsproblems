// normal way to solve the problem
// var obj = {
//     name:'fatima',
//     cast:'ansari'
// }

// // var obj2 = obj;
// var obj2 = {...obj}
// obj2.cast = "sheikh"
// console.log(obj);
// console.log(obj2);

// Cyber way to solve this problem

var obj = {
    name:'fatima',
    cast:'ansari',
    social:{
        fb:{
            username:"Fatima Ansari",
            pass:"pgli thi yawr"
        },
        X :{
            username:"FAtima Pgli",
            pass:"pglihun yawr"
        }

    }
}
// var obj2 = JSON.parse(JSON.stringify(obj)); short method
function copy(obj){
    if( typeof(obj) !=="object" || obj === null ){
       return obj
    }
    var copied = Array.isArray(obj) ? [] : {};
    var key = Object.keys(obj);
     for (let i = 0; i < key.length; i++) {
        copied[key[i]] = copy(obj[key[i]]);
     }
     return  copied;

}
   var copiedobj =copy(obj);
   copiedobj.social.fb.username = "Yasir"
   console.log(copiedobj);
   console.log(obj);

