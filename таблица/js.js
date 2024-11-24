
function formTable(selector){
    var wrapper = document.querySelector(selector);
    var form = wrapper.getElementsByTagName("form")[0];
    var table = wrapper.getElementsByTagName("table")[0];
    
    form.onkeyup = function(ev){
      
      var 
       Num = form.elements[0].value,
       Vid  = form.elements[1].value,
       Mest = form.elements[2].value,
       Kol = form.elements[3].value,
       Pol = form.elements[4].value,
       Voz = form.elements[5].value;
     
  
     for(var i = 1; i < table.rows.length; i++){  
       table.rows[i].className = "";
       
       if( 
         table.rows[i].cells[0].innerHTML.indexOf(Num) == -1 ||
         table.rows[i].cells[1].innerHTML.indexOf(Vid) == -1  ||
         table.rows[i].cells[2].innerHTML.indexOf(Mest) == -1 ||
         table.rows[i].cells[3].innerHTML.indexOf(Kol) == -1 ||
         table.rows[i].cells[4].innerHTML.indexOf(Pol) == -1  ||
         table.rows[i].cells[5].innerHTML.indexOf(Voz) == -1 
       ){
         table.rows[i].className = "hide";
       }
  
     }    
  
    }  
  }
  formTable(".wrapper");
