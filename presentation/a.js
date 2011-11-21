window.onload = onLoad;

function onLoad(){
    if(window.location.hash == '') {
        window.location.hash = '1'; 
    }
    var articles = document.getElementsByTagName("article"); 
    for (var i=0; i<articles.length; i++) {
        articles[i].id = 'slide' + (i+1);
    }

    var currentSlide = window.location.hash.substr(1,100);
    document.getElementById('slide'+currentSlide).style.display = 'block';
}

function changeSlide(dir) {
    if(window.location.hash == '') {
        var currentSlide = 1;
    } else {
        var currentSlide = window.location.hash.substr(1,100);
    }
    if(dir == 'next') {
        var newSlide = parseInt(currentSlide) + 1;
    } else {
        var newSlide = parseInt(currentSlide) - 1;
    }
    window.location.hash = newSlide; 
    document.getElementById('slide'+currentSlide).style.display = 'none'; 
    document.getElementById('slide'+newSlide).style.display = 'block'; 
}
