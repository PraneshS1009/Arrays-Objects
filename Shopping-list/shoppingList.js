console.log("Working");

var shopping = document.querySelector('.shopping');
var list = document.querySelector('.list');
// console.log(list);

var items =[];

function myFunction(e){
    e.preventDefault();
    console.log(e.currentTarget.item.value);
    var name = e.currentTarget.item.value;
    const item={
        name: name,
        id: Date.now(),
        complete: false,
    };
    items.push(item);
    console.log(items);
    e.currentTarget.item.value='';
    list.dispatchEvent(new CustomEvent('isUpDated'));
    // displayList()
}
function displayList(){
    var html =items.map(item=> `
    <li class="shopping-list">
        <input type="checkbox">
        <span>${item.name}</span>
        <button class="remove" id="${item.id}">&times;</button>
    </li>`
    )
    list.innerHTML=html.join('');
    
}
function toLocalStorage(){
    localStorage.setItem('items', JSON.stringify(items));
}
function toRestore(){
    const listofitems = JSON.parse(localStorage.getItem('items'));
    if(listofitems.length){
        items.push(...listofitems);
        list.dispatchEvent(new CustomEvent('isUpDated'));
    }
}
function deleteValue(id){
    console.log(id);
    items = items.filter(item => item.id !== id);
    console.log(items);
    list.dispatchEvent(new CustomEvent('isUpDated'));
}

shopping.addEventListener('submit', myFunction);
list.addEventListener('isUpDated', displayList);
list.addEventListener('isUpDated', toLocalStorage);

list.addEventListener('click', function(e){
    if(e.target.matches('button')){
        deleteValue(parseInt(e.target.id));

    }
});



toRestore();