const button=document.querySelector("button");
const ul=document.querySelector('ul')
const input=document.querySelector("input");


// Create a "close" button and append it to each list item
var i;
var tasklist=document.getElementsByTagName('li');
for(i=0 ; i<tasklist.length ; i++){
    var span=document.createElement('SPAN')
    var icon=document.createTextNode('\u00D7')
    span.className = "close";
    span.appendChild(icon);
    tasklist[i].appendChild(span)
}

// Click on a close button to hide the current list item
var close=document.getElementsByClassName("close");
for(var i = 0 ; i< close.length ; i++){
    close[i].onclick= function(){
        var div=this.parentElement;
        div.style.display= "none"; 
    }
}

// add a "checked", when clicked on the tasklist
var list=document.querySelector('ul')
list.addEventListener("click", function(event){
    if(event.target.tagName=== "LI"){
        event.target.classList.toggle("checked");
    }
})


// Create a new list item when clicking on the "Add" button
function addtodo(){
    let todovalue=input.value;
    var li =document.createElement('LI')
    var text = document.createTextNode(todovalue)
    li.appendChild(text);
    if(todovalue===""){
        alert("empty todos are not allowed")
    }else{
        document.querySelector(".todoWrapper").appendChild(li);
    }
    input.value=" "
    var span=document.createElement('SPAN')
    var icon=document.createTextNode('\u00D7')
    span.className = "close";
    span.appendChild(icon);
    li.appendChild(span)
    for(var i = 0 ; i< close.length ; i++){
        close[i].onclick =function (){
            var div=this.parentElement;
            div.style.display= "none"; 
        }
    }
}
input.addEventListener("keyup", function(event){
 if(event.keyCode==13){
     event.preventDefault();
     addtodo();

 }
})

