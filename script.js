/*Fill your code */
var total=0;

function render1(){
   var i1=document.getElementById("layer1");
    if(i1.style.visibility=='hidden'){
        i1.style.visibility='visible';
        i1.style.height='30px';

        document.getElementById("item1").innerHTML="Chocolate.....300";
        total += 300;
    }
     else{
        i1.style.visibility='hidden';
        i1.style.height='0px';
       
        document.getElementById("item1").innerHTML="";
     }
}

function render2(){
    var i1=document.getElementById("layer2");
     if(i1.style.visibility=='hidden'){
         i1.style.visibility='visible';
         i1.style.height='30px';
 
         document.getElementById("item2").innerHTML="Strawberry....100";
         total += 100;
     }
      else{
         i1.style.visibility='hidden';
         i1.style.height='0px';
        
         document.getElementById("item2").innerHTML="";
      }
 }

 function render3(){
    var i1=document.getElementById("layer3");
     if(i1.style.visibility=='hidden'){
         i1.style.visibility='visible';
         i1.style.height='30px';
 
         document.getElementById("item3").innerHTML="Butterscotch......200";
         total += 200;
     }
      else{
         i1.style.visibility='hidden';
         i1.style.height='0px';
       
         document.getElementById("item3").innerHTML="";
      }
 }
 
 function render4(){
    var i1=document.getElementById("layer4");
     if(i1.style.visibility=='hidden'){
         i1.style.visibility='visible';
         i1.style.height='30px';
 
         document.getElementById("item4").innerHTML="Vanilla.......250";
         total += 250;
     }
      else{
         i1.style.visibility='hidden';
         i1.style.height='0px';
        
         document.getElementById("item4").innerHTML="";
      }
 }
 
 function render5(){
    var i1=document.getElementById("layer5");
     if(i1.style.visibility=='hidden'){
         i1.style.visibility='visible';
         i1.style.height='30px';
 
         document.getElementById("item5").innerHTML="Redvelvet.......350";
         total += 350;
     }
      else{
         i1.style.visibility='hidden';
         i1.style.height='0px';
       
         document.getElementById("item5").innerHTML="";
      }
 }

 function render6(){
    var i1=document.getElementById("image");

if(i1.style.visibility=='hidden'){
         i1.style.visibility='visible';
         i1.style.width='30px';
         i1.style.height='30px';
 
 
         document.getElementById("total").innerHTML="total......"+total;
        
     }
      else{
         i1.style.visibility='hidden';
         i1.style.height='0px';
 
         document.getElementById("total").innerHTML="";
      }


 }
 