var x ;

function kgten(){

document.getElementById("kg10").style.backgroundColor="lightgreen";
document.getElementById("kg5").style.backgroundColor="white";
document.getElementById("quantity").value = 1;
 document.getElementById("bag").src= "aata.jpeg";

x = 399;
return x;


}

function kgfive(){

    document.getElementById("kg5").style.backgroundColor="lightgreen";
    document.getElementById("kg10").style.backgroundColor="white";
    document.getElementById("quantity").value = 1;
    document.getElementById("bag").src= "aata5kg.jpg";
    x = 209;
    return x;

    }





const ammount =()=>{

    var y= document.getElementById("quantity").value;
    document.getElementById("totalprice").innerHTML = x*y;
    }
    setInterval(ammount,100);