(function(){
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  function close(){m.classList.remove('open');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Open menu');}
  b.addEventListener('click',function(){
    var o=m.classList.toggle('open');
    b.setAttribute('aria-expanded',o?'true':'false');
    b.setAttribute('aria-label',o?'Close menu':'Open menu');
  });
  m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
