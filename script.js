const toast=document.querySelector('.toast');
function notify(message){toast.textContent=message;toast.style.transform='translateY(0)';setTimeout(()=>toast.style.transform='translateY(100px)',2800)}
document.querySelector('#newsletter').addEventListener('submit',e=>{e.prevent.preventDefault();notify('You’re on the list—welcome to WiseBridge!')});
document.querySelectorAll('[data-tool]').forEach(button=>button.addEventListener('click',()=>notify(button.querySelector('h3').textContent+' is coming soon')));
document.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();notify('This section is ready for the next WiseBridge update.')}));
