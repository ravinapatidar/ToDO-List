let input = document.querySelector(".input1");
let submitBtn = document.querySelector(".btn");
let taskInput = document.querySelector(".hidden-input");
let editTask = document.querySelector(".edit");
let deletTask = document.querySelector(".delet");
let hiddenContainer = document.querySelector(".hidden-container");
let addItemList = document.querySelector(".addList");
let items;
let i=1;
submitBtn.addEventListener("click",()=>{
    if(input.value === ""){
        alert("Please enter an task!");
        return;
      }    
     hiddenContainer.classList.add("active");
    taskInput.value = input.value;
     input.value = "";
    let items = document.createElement('li');
    items.innerText = `Task ${i++}: ${taskInput.value}`;
    addItemList.appendChild(items);

});

editTask.addEventListener("click",() => {
         input.value = taskInput.value;
         items.remove();
         console.log(items.remove())
});

deletTask.addEventListener("click",() => {
        alert("Are you sure");
        taskInput.value = "";
        hiddenContainer.classList.remove("active");
        items.remove();
        
});


