function rez()  {
var  r, result;
r = document.getElementById('r').value;
result = (Math.PI*r**2);
document.getElementById('textrez').innerHTML = 'Площадь круга:'+result+'см²';
}