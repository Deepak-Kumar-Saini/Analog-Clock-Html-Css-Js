let hour=document.getElementById("hour");
let min=document.getElementById("minute");
let sec=document.getElementById("second");

let setclock = setInterval(() =>{

let currentTime= new Date(); // Creating new date object

let hr=currentTime.getHours(); // hr for HOur
let mi=currentTime.getMinutes(); // mi for Minute
let se=currentTime.getSeconds(); // se for Second

sec=sec*6;

hr=(hr*30)+(mi/2);

mi=(mi*6)+(se/10);

se=se*6;

hour.style.transform=`rotate(${hr}deg)`;
minute.style.transform=`rotate(${mi}deg)`;
second.style.transform=`rotate(${se}deg)`;

},1000);