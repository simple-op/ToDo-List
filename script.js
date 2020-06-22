//counter variable
var count=0;

//on deletion
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    count=count-1;
    var countTASK1=document.getElementById("count");
    countTASK1.innerHTML="Task Count:" +count;
  }
}

// button function for adding element 
var Button=document.getElementById("button");




Button.addEventListener("click",function(){
    
    
   var value= document.getElementById("adder").value ;
   
   
   
   
   var tag= document.createElement("li");

   //checking for empty input
   if (value === '') {
    alert("Empty task cannot be added");}
    else{ tag.appendChild(document.createTextNode(value));
   var ele=document.getElementById("list");
   ele.appendChild(tag);
   count=count+1;
   var countTASK=document.getElementById("count");
countTASK.innerHTML="Task Count:" +count;
document.getElementById("adder").value = "";
    }

    var span = document.createElement("span");
    
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    
    span.appendChild(txt);
    tag.appendChild(span);
    //itirating each item in having class close
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          count=count-1;
          var countTASK=document.getElementById("count");
          countTASK.innerHTML="Task Count:" +count;

        }
      }
   

    
});





  






   
   



















