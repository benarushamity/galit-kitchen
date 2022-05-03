var divu =document.getElementById("divu")
    var bar =document.getElementById("bar")
    var tim =document.getElementById("tim")
    var taff =document.getElementById("taff")
    var op =document.getElementById("op")
    var opm =document.getElementById("opm")
    var oph1 =document.getElementById("oph1")
    
    
    taff.onmouseover = function(){
         op.className="close";
        opm.className="closem";
        taff.className="fa fa-minus";
    }
     oph1.onclick = function(){
         op.className="close";
        opm.className="closem";
        taff.className="fa fa-minus";
    }
    taff.onmousedown = function(){
         op.className="open";
         opm.className="openm";
        taff.className="fa fa-caret-down";
    }
    
    bar.onclick = function(){
        divu.style.right="0px";
    }
    tim.onclick = function(){
        divu.style.right="-200px";
    }