var u=Object.defineProperty;var m=(o,e,t)=>e in o?u(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var l=(o,e,t)=>m(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const d=class d{constructor(e=[]){this.todos=e}addTodo(e,t){if(!(e.length>0)||!(t>=1&&t<=3))return!1;const s={task:e,completed:!1,priority:t};return this.todos.push(s),!0}markTodoCompleted(e){if(!this.todos[e])throw new Error("The given todoIndex gave no results.");this.todos[e].completed=!0}getTodos(){return this.todos}saveToLocalStorage(){const e=JSON.stringify(this.todos);localStorage.setItem(d.key,e)}loadFromLocalStorage(){const e=localStorage.getItem(d.key);this.todos=e?JSON.parse(e):[]}};l(d,"key","todos");let i=d;function a({task:o,completed:e,priority:t}){const s=document.createElement("p");s.innerText=`${t}`;const r=document.createElement("p");r.innerText=o;const n=document.createElement("button");n.innerHTML='<i class="fa-solid fa-check"></i>',n.setAttribute("id","complete"),n.setAttribute("data-completed",`${e}`);const c=document.createElement("li");return c.appendChild(s),c.appendChild(r),c.appendChild(n),c}function f(o){const e=document.querySelector("ul"),t=document.createDocumentFragment();o.forEach(({task:s,completed:r,priority:n})=>{const c=a({task:s,completed:r,priority:n});t.appendChild(c)}),e.appendChild(t)}function p(o){document.querySelector("form").addEventListener("submit",t=>h(t,o))}function h(o,e){o.preventDefault();const t=new FormData(o.target),s={task:t.get("todo-desc"),completed:!1,priority:Number(t.get("todo-prio"))};e.addTodo(s.task,s.priority),e.saveToLocalStorage(),g(s)}function g(o){const e=document.querySelector("ul"),t=a(o);e.appendChild(t)}document.addEventListener("DOMContentLoaded",()=>{const o=new i;o.loadFromLocalStorage(),f(o.getTodos()),p(o)});
