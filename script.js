const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');

function addtask(){
    if(inputbox.value === ''){
        alert('your mast write sometime')

    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement('span');
        
    }
    inputbox.value = '' ;
    saveDate();
}


listcontainer.addEventListener("click", function(a) {
if(a.target.tagname === "li") {
    
    a.target.classlist.toggle("checked");
    saveDate(); 
}

else if(a.target.tagname === "SPAN") {
    console.log('click');
    a.target.parentElement.remove();
    saveDate();
}

},false);

function saveDate(){
    localStorage.setItem("Date" , listcontainer.innerHTML);

}

function showtask(){
    listcontainer.innerHTML = localStorage.getItem('data');
}

showtask();




