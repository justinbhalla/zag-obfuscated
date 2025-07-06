<script>
(function(){
  const _s=document.querySelectorAll('.animate-fade');
  const _o=new IntersectionObserver(e=>{
    e.forEach(x=>{
      if(x.isIntersecting){
        x.target.classList.add('visible');
        _o.unobserve(x.target);
      }
    });
 },{threshold:0.1});
  _s.forEach(s=>_o.observe(s));

  async function _t(i,t,d=60){
    const el=document.getElementById(i);
    if(!el) return;
    el.textContent='';
    for(let j=0;j<t.length;j++){
      el.textContent+=t.charAt(j);
      await new Promise(r=>setTimeout(r,d));
    }
  }

  window.addEventListener("DOMContentLoaded",()=>_t("typed-text","Strategic Thinking. Intelligent Results."));
})();
</script>
