(function(id) {
   'use strict';

    var modalId;

    const clickId=document.querySelectorAll(".dialog-link");
    const closeLinks=document.querySelectorAll(".close-link"); 
    
    Array.from(clickId).forEach(function(id){
      id.addEventListener("click",function(){
        return modalId=this.dataset.id;
      });
    });
    
    Array.from(closeLinks).forEach(function(close){
      close.addEventListener("click",function(){
        this.href='#';
        this.href+=modalId;
      });
    });

}(document));



