console.log("Done");

var nothing = {
    wood: 20,
    steel: 50,
    brick:40,
}

console.log(Object.entries(nothing));
console.log(Object.keys(nothing));
console.log(Object.values(nothing));

Object.entries(nothing).forEach(e =>{
    var key =e[0];
    var value = e[1];
    console.log(key, value);
})

// function handleFunction(){
//     console.log(nothing);
//     nothing.forEach(element => {
//         console.log(element.keys(nothing));
//     });
// }

// handleFunction();