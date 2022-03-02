console.log("Fine");

var toppings = ["mushroom","tomatoes",,"eggs","chili","lettuce","avacado","chiles","bacon","pickles","onions"];
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


