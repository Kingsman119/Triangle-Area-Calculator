let a,b,h ;

document.getElementById("btn").onclick= function() {
    b = document.getElementById('base').value;
    h = document.getElementById('height').value;
    a = (b*h)/2;
    document.getElementById('area').innerHTML="Area of The Triangle is :" + a;
}