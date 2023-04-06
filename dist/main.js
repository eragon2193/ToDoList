(()=>{"use strict";const t=[{date:"31/12/2024",priority:"1",title:"cycling",description:"Learn how to cycle until next 2025"},{date:"07/04/2023",priority:"4",title:"todolist",description:"Work on my Odin ToDoList"},{date:"11/04/2023",priority:"5",title:"todolist",description:"Work on my Odin ToDoList"},{date:"10/04/2023",priority:"3",title:"todolist",description:"Work on my Odin ToDoList"}],e=document.getElementById("content"),n=document.body,o=document.getElementById("add-btn"),c=document.getElementById("all-tasks"),i=document.getElementById("important"),d=(document.getElementById("today"),function(t){function e(){for(;t.firstChild;)t.removeChild(t.firstChild)}function n(t,e){const n=document.createElement("p");n.classList.add("prio-card"),n.innerHTML=t.priority;const o=document.createElement("p");o.classList.add("date-card"),o.innerHTML=t.date;const c=document.createElement("h4");c.classList.add("title-card"),c.innerHTML=t.title;const i=document.createElement("p");i.classList.add("description-card"),i.innerHTML=t.description;const d=["","#b0cc70","#c0cc70","#ccbd70","#cc8c70","#cc7070"].filter(((e,n)=>{if(n==t.priority)return e}));console.log(d),e.style.backgroundColor=d[0],e.append(c,i,n,o)}return{Urgent:function(o){e(),o.filter((t=>Number(t.priority)>=4)).sort(((t,e)=>{Number(t.priority),Number(e.priority)})).forEach((e=>{const o=document.createElement("div");o.classList.add("task-card"),n(e,o),t.append(o)}))},Today:function(t){console.log(5)},Week:function(t){},All:function(o){e(),o.forEach((e=>{const o=document.createElement("div");o.classList.add("task-card"),n(e,o),t.append(o)}))},Group:function(){}}}(e));i.addEventListener("click",(()=>{d.Urgent(t)})),c.addEventListener("click",(()=>{d.All(t)})),o.addEventListener("click",(()=>{console.log(t),n.append(function(){const e=document.createElement("form");e.action="../src/data.json",e.method="POST";const n=document.createElement("label");n.htmlFor="title",n.innerText="Title:";const o=document.createElement("input");o.id="title",o.name="title";const c=document.createElement("label");c.htmlFor="date",c.innerText="Due Date:";const i=document.createElement("input");i.id="date",i.type="date",i.name="date";const d=document.createElement("label");d.htmlFor="description",d.innerText="Description:";const r=document.createElement("textarea");r.id="description",r.rows="5",r.name="description",r.placeholder="Your task description";const a=document.createElement("label");a.htmlFor="priority",a.innerText="Priority",a.name="priority";const l=document.createElement("select");l.id="priority",["1","2","3","4","5"].forEach((t=>{const e=document.createElement("option");e.text=t,e.value=t,l.append(e)}));const s=document.createElement("div");s.classList.add("add-interface");const m=document.createElement("div");m.classList.add("addDiv");const u=document.createElement("button");u.type="button",u.classList.add("close-btn"),u.innerText="x",u.addEventListener("click",(()=>{s.remove()}));const p=document.createElement("button");return p.id="submit-btn",p.type="button",p.innerHTML="Add Task",p.addEventListener("click",(()=>{const e={date:i.value,title:o.value,priority:l.value,description:r.value};t.push(e),s.remove()})),e.append(u,n,o,c,i,a,l,d,r,p),m.append(e),s.append(m),s}())}))})();