console.log("Fine");

var toppings = ["mushroom","tomatoes","eggs","chili","lettuce","avacado","chiles","bacon","pickles","onions"];
console.log(toppings);

var feedback = [
    { comment : 'Love hte burger', rating: 4},
    { comment : 'Horrible service', rating: 2},
    { comment : 'Smoothies are great ,Liked the burger too', rating: 5},
    { comment : 'Ambiance needs work', rating: 3},
    { comment : 'I dont like burgers', rating: 1},
]
console.log(feedback);

function findBurgRating(singleFeedback){
    if(singleFeedback.comment.includes('burg')){
        return true;
    }
}
var burgrating = feedback.find(findBurgRating);
console.log(burgrating);


var number1 = [1,2,100,3,200,400,155];

var number1sort = number1.sort((firstitem, seconditem) => firstitem - seconditem);
console.log(number1sort);


// toppings.forEach(topping => {
//     console.log(topping);
// })

console.log('----------------------------------');
function myFunction(value, index, orginalvalue){
    orginalvalue[index-1]?console.log(orginalvalue[index-1]): "";
    console.log(value);
    orginalvalue[index+1]?console.log(orginalvalue[index+1]): "";
    
    console.log('++++++++++++++');
}

toppings.forEach(myFunction);
