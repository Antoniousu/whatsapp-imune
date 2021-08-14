var nome = prompt(`Qual Seu Nome ? Isso Personalizará O Site!`);

alert(`Olá  ${nome} É Um Prazer Te Conhecer`);

document.write(`Olá ${nome}`)


function somarValores(){
  var n1 = document.getElementById("s1").value;
  var n2 = document.getElementById("s2").value;
  var n3 = parseInt(n1) + parseInt(n2)
  alert(`Olá ${nome}  o resultado é: ${n3}`);
}

function limpar(){
  var limp = document.getElementById("clear");
  var s1 = limp.s1;
  var s2 = limp.s2;
  s1.value = "";
  s2.value = "";
}

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

