const cfg = window.PORTFOLIO_CONFIG || {};
const root = document.documentElement;
const screens = [...document.querySelectorAll(".screen")];
const bug = document.getElementById("cursorBug");
const status = document.getElementById("systemStatus");
const home = document.getElementById("home");
let unlocked = new Set(["home"]);
const levels = [
  ["about","01","PROFILE","Identity, education & focus"],
  ["achievements","02","ACHIEVEMENTS","Awards, competitions & leadership"],
  ["leetcode","03","LEETCODE","Algorithmic competition"],
  ["github","04","GITHUB","Source, open source & contribution"],
  ["projects","05","PROJECTS","Deployed work & project vault"],
  ["research","06","RESEARCH","Papers, reviews & research roles"],
  ["experience","07","EXPERIENCE","Internships & leadership"],
  ["skills","08","SKILLS","Technical + creative loadout"],
  ["yz","B","WHY YZ?","Sanghamitra Ventures flagship"],
  ["education","E","EDUCATION","Academic + extracurricular"],
  ["contact","X","CONNECT","Links & contact"]
];

function setLink(id,url){
  const el=document.getElementById(id);
  if(!el)return;
  if(url && /^https?:\/\//.test(url)){el.href=url;el.removeAttribute("aria-disabled");}
  else {el.href="#";el.onclick=(e)=>{e.preventDefault(); toast("Add your personal URL in config.js");};}
}
setLink("linkedinLink",cfg.linkedin); setLink("githubLink",cfg.github); setLink("leetcodeLink",cfg.leetcode);
setLink("githubLink2",cfg.github); setLink("leetcodeLink2",cfg.leetcode);

function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
function openScreen(id){
  if(!unlocked.has(id)){toast("LOCKED — complete this level first.");return}
  screens.forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  history.replaceState(null,"","#"+id);
  if(id==="map") renderMap();
  window.scrollTo({top:0,behavior:"instant"});
}
document.querySelectorAll("[data-open]").forEach(x=>x.onclick=()=>openScreen(x.dataset.open));
document.querySelectorAll(".back-btn").forEach(x=>x.onclick=()=>openScreen("map"));
document.getElementById("homeBtn").onclick=()=>openScreen(unlocked.has("map")?"map":"home");
document.getElementById("themeBtn").onclick=()=>{document.body.classList.toggle("light");document.getElementById("themeBtn").textContent=document.body.classList.contains("light")?"☼":"♢"};

function renderMap(){
  const grid=document.getElementById("levelGrid"); grid.innerHTML="";
  levels.forEach(([id,n,title,desc])=>{
    const locked=!unlocked.has(id), el=document.createElement("div");
    el.className="level"+(locked?" locked":"");
    el.innerHTML=`<span class="num">${n}</span><h3>${title}</h3><p>${desc}</p><span class="unlock">${locked?"LOCKED":"OPEN →"}</span>`;
    if(!locked)el.onclick=()=>openScreen(id);
    grid.appendChild(el);
  });
  document.getElementById("mapCount").textContent=[...unlocked].filter(x=>x!=="home"&&x!=="map").length;
}

function unlock(id){
  unlocked.add(id); unlocked.add("map"); renderMap();
  status.textContent="PROFILE UNLOCKED"; status.classList.add("status-unlocked");
  toast("LEVEL COMPLETE — "+id.toUpperCase()+" UNLOCKED");
}

// cursor bug
window.addEventListener("pointermove",e=>{bug.style.transform=`translate(${e.clientX+14}px,${e.clientY+12}px)`});

// canvas helpers
function ctxFor(id){return document.getElementById(id).getContext("2d")}
function resizeCanvas(canvas){
  const ratio=canvas.width/canvas.clientWidth;
  return {ctx:canvas.getContext("2d"),sx:canvas.width/canvas.clientWidth,sy:canvas.height/canvas.clientHeight};
}

// BOOT GAME
(()=>{
 const c=document.getElementById("bootCanvas"),ctx=c.getContext("2d"); let p={x:55,y:150}, keys={};
 let gate={x:690,y:125,w:45,h:80}, walls=[{x:150,y:0,w:25,h:210},{x:300,y:120,w:25,h:210},{x:460,y:0,w:25,h:210},{x:580,y:120,w:25,h:210}];
 addEventListener("keydown",e=>keys[e.key.toLowerCase()]=1); addEventListener("keyup",e=>keys[e.key.toLowerCase()]=0);
 function loop(){ctx.clearRect(0,0,c.width,c.height);ctx.fillStyle="#050505";ctx.fillRect(0,0,c.width,c.height);
  ctx.strokeStyle="#1a1a1a";for(let x=0;x<c.width;x+=30){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,c.height);ctx.stroke()}for(let y=0;y<c.height;y+=30){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(c.width,y);ctx.stroke()}
  ctx.fillStyle="#fff";ctx.fillRect(gate.x,gate.y,gate.w,gate.h);ctx.fillStyle="#000";ctx.fillText("EXIT",gate.x+5,gate.y+43);
  ctx.fillStyle="#222";walls.forEach(w=>ctx.fillRect(w.x,w.y,w.w,w.h));
  let dx=(keys["arrowright"]||keys["d"]?2.8:0)-(keys["arrowleft"]||keys["a"]?2.8:0),dy=(keys["arrowdown"]||keys["s"]?2.8:0)-(keys["arrowup"]||keys["w"]?2.8:0);
  let nx=Math.max(12,Math.min(c.width-12,p.x+dx)),ny=Math.max(12,Math.min(c.height-12,p.y+dy));
  const hit=walls.some(w=>nx+10>w.x&&nx-10<w.x+w.w&&ny+10>w.y&&ny-10<w.y+w.h);if(!hit){p.x=nx;p.y=ny}
  ctx.font="25px sans-serif";ctx.fillText("🐞",p.x-12,p.y+9);
  if(p.x>gate.x-10&&p.y>gate.y-10&&p.y<gate.y+gate.h+10){document.getElementById("bootStatus").textContent="UNLOCKED";unlock("about");openScreen("map");return}
  requestAnimationFrame(loop)
 }loop()
})();

// generic target game
(()=>{
 const c=document.getElementById("targetCanvas"),ctx=c.getContext("2d"),targets=[];let score=0;
 function spawn(){targets.length=0;for(let i=0;i<7;i++)targets.push({x:80+Math.random()*740,y:50+Math.random()*230,r:15})}
 c.addEventListener("click",e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)*c.width/r.width,y=(e.clientY-r.top)*c.height/r.height;let i=targets.findIndex(t=>Math.hypot(t.x-x,t.y-y)<t.r+10);if(i>=0){targets.splice(i,1);score++;document.getElementById("targetScore").textContent=score+" / 7";if(score>=7){unlock("achievements");}}});
 function loop(){ctx.clearRect(0,0,c.width,c.height);targets.forEach(t=>{ctx.beginPath();ctx.arc(t.x,t.y,t.r,0,7);ctx.strokeStyle="#fff";ctx.stroke();ctx.beginPath();ctx.arc(t.x,t.y,3,0,7);ctx.fillStyle="#fff";ctx.fill()});requestAnimationFrame(loop)}spawn();loop()
})();

// dodge game
(()=>{
 const c=document.getElementById("dodgeCanvas"),ctx=c.getContext("2d");let x=360,alive=true,started=performance.now(),rocks=[];
 addEventListener("keydown",e=>{if(e.key==="ArrowLeft"||e.key.toLowerCase()==="a")x-=25;if(e.key==="ArrowRight"||e.key.toLowerCase()==="d")x+=25});
 function loop(now){ctx.clearRect(0,0,c.width,c.height);ctx.fillStyle="#050505";ctx.fillRect(0,0,c.width,c.height);x=Math.max(20,Math.min(c.width-20,x));
  if(Math.random()<.05)rocks.push({x:20+Math.random()*(c.width-40),y:-10,s:3+Math.random()*4});
  rocks.forEach(r=>r.y+=r.s);rocks=rocks.filter(r=>r.y<c.height+20);
  ctx.font="24px monospace";ctx.fillStyle="#fff";ctx.fillText("▰",x-10,c.height-35);ctx.fillStyle="#888";rocks.forEach(r=>ctx.fillText("◆",r.x-8,r.y));
  if(rocks.some(r=>Math.hypot(r.x-x,r.y-(c.height-35))<22)){started=now;rocks=[]}
  if(now-started>15000){alive=false;document.getElementById("dodgeStatus").textContent="CLEARED";unlock("leetcode");}
  else requestAnimationFrame(loop)
 }requestAnimationFrame(loop)
})();

// commit runner
(()=>{
 const c=document.getElementById("commitCanvas"),ctx=c.getContext("2d");let score=0,pos=0,dir=1;
 addEventListener("keydown",e=>{if(e.code==="Space"){if(Math.abs(pos-450)<65){score++;document.getElementById("commitScore").textContent=score+" / 10";if(score>=10)unlock("github")}}});
 function loop(){ctx.clearRect(0,0,c.width,c.height);ctx.strokeStyle="#333";ctx.beginPath();ctx.moveTo(40,150);ctx.lineTo(860,150);ctx.stroke();for(let i=0;i<10;i++){let x=80+i*80;ctx.fillStyle="#777";ctx.fillRect(x,142,3,16)}pos+=dir*5;if(pos>850||pos<50)dir*=-1;ctx.fillStyle="#fff";ctx.fillRect(pos,142,7,16);ctx.fillStyle="#555";ctx.font="11px monospace";ctx.fillText("PRESS SPACE AT CENTER GATE",330,90);requestAnimationFrame(loop)}loop()
})();

// URL runner
(()=>{
 const c=document.getElementById("urlCanvas"),ctx=c.getContext("2d");let score=0,pos=0,dir=1;
 addEventListener("keydown",e=>{if(e.code==="Enter"&&Math.abs(pos-450)<70){score++;document.getElementById("urlScore").textContent=score+" / 6";if(score>=6)unlock("projects")}});
 function loop(){ctx.clearRect(0,0,c.width,c.height);ctx.fillStyle="#fff";ctx.fillRect(420,100,60,100);ctx.fillStyle="#000";ctx.font="10px monospace";ctx.fillText("OPEN",430,155);pos+=dir*7;if(pos>860||pos<40)dir*=-1;ctx.fillStyle="#fff";ctx.beginPath();ctx.arc(pos,150,12,0,7);ctx.fill();ctx.fillStyle="#555";ctx.font="10px monospace";ctx.fillText("ENTER AT THE GATE",380,60);requestAnimationFrame(loop)}loop()
})();

// skill chips
(()=>{
 const c=document.getElementById("skillCanvas"),ctx=c.getContext("2d"),chips=[];let score=0;
 for(let i=0;i<12;i++)chips.push({x:50+Math.random()*800,y:45+Math.random()*230,r:25,label:["C++","PY","AI","ML","DSA","JS","REACT","LLM","GIT","SQL","CSS","AGENT"][i]});
 c.addEventListener("click",e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)*c.width/r.width,y=(e.clientY-r.top)*c.height/r.height;let i=chips.findIndex(t=>Math.hypot(t.x-x,t.y-y)<t.r);if(i>=0){chips.splice(i,1);score++;document.getElementById("skillStatus").textContent=score+" / 12";if(score>=12){unlock("skills");}}});
 function loop(){ctx.clearRect(0,0,c.width,c.height);chips.forEach(t=>{ctx.strokeStyle="#666";ctx.beginPath();ctx.arc(t.x,t.y,t.r,0,7);ctx.stroke();ctx.fillStyle="#fff";ctx.font="10px monospace";ctx.textAlign="center";ctx.fillText(t.label,t.x,t.y+3)});requestAnimationFrame(loop)}loop()
})();

// Start map only after boot. Hash can be used for already-unlocked navigation during development.
renderMap();
