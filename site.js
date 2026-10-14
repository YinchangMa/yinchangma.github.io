document.documentElement.classList.add('js');
const menu=document.querySelector('.menu'),nav=document.querySelector('.navlinks');
if(menu&&nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');menu.focus()}})}
const buttons=document.querySelectorAll('[data-filter]');
buttons.forEach(button=>button.addEventListener('click',()=>{buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;document.querySelectorAll('[data-topic]').forEach(p=>{p.hidden=button.dataset.filter!=='All'&&p.dataset.topic!==button.dataset.filter;if(!p.hidden)count++});document.querySelector('#result-count').textContent=`Showing ${count} selected publication${count===1?'':'s'}.`}));
