const years=[];for(let y=1982;y<=2026;y+=4)years.push(y);
const sel=document.getElementById('year');
years.forEach(y=>sel.add(new Option(y,y)));
const countries=['Brazil','Argentina','France','Germany','Italy','Spain','England','Netherlands','Portugal','Belgium','Japan','Korea','USA','Mexico','Morocco','Croatia','Uruguay','Cameroon','Nigeria','Ghana','Australia','Switzerland','Denmark','Sweden','Norway','Poland','Serbia','Chile','Colombia','Ecuador','Canada','Saudi Arabia','Iran','Tunisia','Senegal','Paraguay'];
document.getElementById('play').onclick=()=>{
 const list=[...countries].sort(()=>Math.random()-0.5).slice(0,32);
 teams.innerHTML=list.map((t,i)=>`<div class='card'><h3>${i+1}. ${t}</h3></div>`).join('');
};