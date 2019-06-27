$(function(){
   
    $('#quadro38').load('src/pages/tabelas/Quadro38.html')
    //$('#quadro39').load('src/pages/tabelas/Quadro39.html')
    $('#quadro40').load('src/pages/tabelas/Quadro40.html')
    $('#quadro41').load('src/pages/tabelas/Quadro41.html')
    $('#quadro42').load('src/pages/tabelas/Quadro42.html')
    $('#quadro43').load('src/pages/tabelas/Quadro43.html')
    //$('#quadro44').load('src/pages/tabelas/Quadro44.html')
    $('#quadro45').load('src/pages/tabelas/Quadro45.html')
    $('#quadro46').load('src/pages/tabelas/Quadro46.html')
    $('#quadro47').load('src/pages/tabelas/Quadro47.html')
    $('#quadro48').load('src/pages/tabelas/Quadro48.html')
})

$(document).ready(function() {
    let last_known_scroll_position = 0;
    let ticking = false;
    console.log('opa' )

    function doSomething(scroll_pos) {
      if(scroll_pos > 10 ) {
        $('#navheader').removeClass('bg-dark')
        $('#navheader').addClass('navheader-color')
      }else{

        $('#navheader').removeClass('navheader-color')
        $('#navheader').addClass('bg-dark')

      }
    }
    
    window.addEventListener('scroll', function(e) {
      last_known_scroll_position = window.scrollY;
    
      if (!ticking) {
        window.requestAnimationFrame(function() {
          doSomething(last_known_scroll_position);
          ticking = false;
        });
    
        ticking = true;
      }
    });

    
});