const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === '') {
        alert("You must add the task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData()
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

/*this function code for to save data in the browser */
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);

}
/*this function code is to get the data */
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask(); /*here we calling the function  */