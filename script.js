const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const hd=$('#hd'),lk=$('#lk'),bg=$('#bg');
const px=$$('[data-px]');
function onS(){hd.classList.toggle('sc',scrollY>30);px.forEach(i=>{const r=i.parentElement.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)i.style.transform='translateY('+((r.top+r.height/2-innerHeight/2)*-.12)+'px)'})}
addEventListener('scroll',()=>requestAnimationFrame(onS),{passive:true});onS();
bg.onclick=()=>{const o=lk.classList.toggle('o');bg.classList.toggle('o',o);bg.setAttribute('aria-expanded',o)};
lk.onclick=e=>{if(e.target.tagName=='A'){lk.classList.remove('o');bg.classList.remove('o')}};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
$$('.rv,.mask').forEach(e=>io.observe(e));
// hero tilt
const car=$('#car'),fr=$('#fr');
if(matchMedia('(hover:hover)').matches){car.onmousemove=e=>{const r=car.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;fr.style.transform='rotateY('+x*10+'deg) rotateX('+-y*8+'deg)'};car.onmouseleave=()=>fr.style.transform=''}
// colors
const im=$$('.stage img'),bt=$$('#sw button'),cn=$('#cn');
bt.forEach((b,i)=>b.onclick=()=>{im.forEach((m,j)=>m.classList.toggle('on',i==j));bt.forEach(x=>x.setAttribute('aria-pressed',x==b));cn.style.opacity=0;cn.style.transform='translateY(10px)';setTimeout(()=>{cn.textContent=b.dataset.n;cn.style.opacity=1;cn.style.transform=''},220)});
// lightbox
const lb=$('#lb'),li=$('#li');
$$('.gi').forEach(g=>g.onclick=()=>{const m=g.querySelector('img');li.src=m.src;li.alt=m.alt;lb.classList.add('o');$('#lx').focus()});
const cl=()=>lb.classList.remove('o');$('#lx').onclick=cl;lb.onclick=e=>{if(e.target==lb)cl()};addEventListener('keydown',e=>{if(e.key=='Escape')cl()});
