console.log("Working");

const nothing = {
    age :100,
    name:'Mr',
    work:'Developer',
    place:'Erode',
    deg:{
        diploma:'75%',
        engg:'7.65',
    }
};
console.log(nothing);

nothing.age = 22;
console.log(nothing);

let nothing1;


nothing.job = 'Developer';
delete nothing.work;

console.log(nothing);

var key= prompt("Enter the Key That you want to Know");
var value = alert(nothing[key]);
console.log(nothing[key]);