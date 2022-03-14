console.log("Working");

function galleryImage(gallery){
    var images = Array.from(gallery.querySelectorAll(`img`));
    var modal = document.querySelector(`.modal`);
    var leftbutton = modal.querySelector(`.left`);
    var rightbutton = modal.querySelector(`.right`);
    var currentimg;
    // console.log(leftbutton);
    function displayImage(element){
        modal.setAttribute('style', `visibility: visible;`);
        var modalimg = modal.querySelector('img');
        var title1 = modal.querySelector('h2');
        var par = modal.querySelector('p');
        modalimg.src=element.src;
        title1.textContent=element.title;
        par.textContent=element.dataset.desc;
        console.log(element)
        currentimg=element;
        window.addEventListener('keydown',closeDisplayImage);
    }

    images.forEach(images => images.addEventListener('click', e=>displayImage(e.currentTarget)));
    images.forEach(images => images.addEventListener('keyup', function(e){
    if(e.key==='Enter'){
        displayImage(e.currentTarget);
    }}));
    function closeDisplayImage(e){
        console.log(e);
        if(e.key==='Escape'){
            console.log("Done");
            modal.setAttribute('style', `visibility: hidden;`);
        }
        window.removeEventListener('keydown',closeDisplayImage);
    }
    function beforeImage(e){
        displayImage(currentimg.previousElementSibling);
    }
    function nextImage(e){
        displayImage(currentimg.nextElementSibling);
    }
    window.addEventListener('keydown',closeDisplayImage);
    leftbutton.addEventListener('click', beforeImage);
    rightbutton.addEventListener('click', nextImage);
}

var gallery1 = galleryImage(document.querySelector('.gallery1'));
var gallery2 = galleryImage(document.querySelector('.gallery2'));