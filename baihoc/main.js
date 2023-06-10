$(document).ready(function(){
    $(".menu").click(function(){
        $("nav").slideToggle();
    });
});

// Slideshow 
var hinh=[
    'img/banner1.jpg',
    'img/banner2.jpg',
    'img/banner3.jpg',
    ];
    var index=0;
    function prev(){
    index--;
    if (index<0) index=hinh.length-1;
    document.getElementById('banner').src=hinh [index]; document.getElementById('0').style.color='white';
    document.getElementById('1').style.color='white'; document.getElementById('2').style.color='white'; document.getElementById(index).style.color='#1598d4';
    }
    function next(){
    index++;
    if (index==hinh.length) index=0;
    document.getElementById('banner').src=hinh [index]; document.getElementById('0').style.color='white';
    document.getElementById('1').style.color='white';
    document.getElementById('2').style.color='white'; document.getElementById(index).style.color='#1598d4';
    }
    setInterval('next()', 2000);
    