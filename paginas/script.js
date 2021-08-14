var nome = prompt(`Qual Seu Nome ? Isso Personalizará O Site!`);

alert(`Olá  ${nome} É Um Prazer Te Conhecer`);

document.write(`<strong>Olá ${nome}</strong>`)

function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}

