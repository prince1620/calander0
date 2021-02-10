const dateOrg= new Date();
const date = new Date();

const calendar = ()=>{
date.setDate(1);

let todo ={};
pointer = "";
const monthDays = document.querySelector(".days");

const lastDay = new Date(date.getFullYear(),
date.getMonth()+1,0).getDate();

const prevLastDay = new Date(date.getFullYear(),
date.getMonth(),0).getDate();

const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(),
date.getMonth()+1,0).getDay();

const nextDays = 7 -lastDayIndex -1;



const month = [
  "january",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.querySelector('.date h1').innerHTML
=month[date.getMonth()];
document.querySelector('.date p').innerHTML
=new Date().toDateString();


let days="";

for(let x=firstDayIndex; x>0; x--){
  days=days+`<div class="prev-date">${prevLastDay -x +1}</div>`
}

for(let i=1; i<=lastDay; i++){
  
  if(i === new Date().getDate()&& date.
  getMonth()=== new Date().getMonth()){
    days=days+"<div class='today' id='cl' > "+ i + "</div>";
  }else{
    days=days+"<div id='cl' >"+ i +"</div>";
  }
  
}


for(let j= 1; j<=nextDays; j++){
  days=days+`<div class ="next-date">${j}</div>`;
  monthDays.innerHTML = days;
}

}



function togglePopup(){

  document.getElementById("popup-1").classList.toggle("active");
  
}


const textVal = document.getElementById("textVal");
  function addLi(){
    
    const listNode =document.getElementById("list");
    const liNode = document.createElement("LI");
    const textNode = document.createTextNode(textVal.value);
    liNode.appendChild(textNode);
    listNode.appendChild(liNode ); 
        
  }


document.querySelector(".prev").addEventListener("click",()=>{
  date.setMonth(date.getMonth()-1);
  calendar();
})

document.querySelector(".next").addEventListener("click",()=>{
  date.setMonth(date.getMonth()+1);
  calendar();
})
calendar();