let addBtn = document.querySelector(".add-btn");    // isse button select ho jaega
let info1 =  document.querySelector(".info"); 

let modal = document.querySelector(".modal-cont"); 
let modal1 =  document.querySelector(".modals-cont"); 
let taskArea = document.querySelector(".textarea-cont"); 
let taskArea1 = document.querySelector(".textarearinfo-cont");
let mainCont =  document.querySelector(".main-cont");
let allPriorityColor =  document.querySelectorAll(".priority-color");
let addModal = true;
let addModal1 = true;
let removeFLag  = false;
let removeBtn = document.querySelector(".remove-btn");
let color = ['lightpink' , 'brown' , 'green', 'black'];
let modalPriorityColor = color[color.length-1];  // color ke order maintain karne ke liye

addBtn.addEventListener("click", function(){
    // console.log("Button is clicked");
    // modal.style.display = "flex";
    if(addModal){
        // show modal
        modal.style.display = "flex";
    }else{
        // hide modal
        modal.style.display = "none";
    }
    addModal = !addModal;
}) 

// code 2

info1.addEventListener("click", function(){
    // console.log("Button is clicked");

    taskArea1.value = " Jira  App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules.  Benefits of a JIRA are Increases productivity , Provides motivation , Improves memory";
    // modal.style.display = "flex";
    if(addModal1){
        // show modal
        modal1.style.display = "flex";
    }else{
        // hide modal
        modal1.style.display = "none";
    }
    addModal1 = !addModal1;
}) 

for(let  i = 0; i < allPriorityColor.length; i++){
    let PriorityDivOneColor = allPriorityColor[i];
    PriorityDivOneColor.addEventListener("click", function(){
        for( let j = 0; j < allPriorityColor.length; j++){
            allPriorityColor[j].classList.remove("active");
        }
        PriorityDivOneColor.classList.add("active");
        modalPriorityColor = PriorityDivOneColor.classList[0]; 
       
})
}


modal.addEventListener('keydown',function(e){
let key = e.key;
//console.log(key);

if(key == 'Enter'){
   createTicket( modalPriorityColor, taskArea.value);
    taskArea.value = "";
   modal.style.display = "none";
  addModal  = !addModal; 
}
})



// code 2

modal1.addEventListener('keydown',function(e){
   // let key = e.key;
  // taskArea1.value = "lordskjnfjsndjvn njvxcjnvire jncjvifjnkjvnjnxcjv jncxjvndf";
  // modal.style.display = "none";

    addModal1 = !addModal1; 
    
    
})


removeBtn.addEventListener("click",function(){
    if(removeFLag){
        removeBtn.style.color = "black";
    }else{
        removeBtn.style.color = "red"
    }

    removeFLag = !removeFLag
})




function createTicket( ticketColor,task){
   


let ticketCont = document.createElement("div");
ticketCont.setAttribute('class','ticket-cont' );
ticketCont.innerHTML = `<div class="ticket-cont">
                 <div class="ticket-color ${ticketColor}"></div>
                 <div class="ticket-id">#dsjc23n24</div>
                 <div class="task-area">${task}</div>
                 <div class="lock-unlock"><i class="fa fa-unlock"></i></div>`


    mainCont.appendChild(ticketCont);  
    
    
    // lock un lock handle

    let lockUnlockBtn = ticketCont.querySelector(".lock-unlock i");
    let ticketTaskArea = ticketCont.querySelector(".task-area");
    lockUnlockBtn.addEventListener("click", function () {
        if (lockUnlockBtn.classList.contains("fa-lock")) {
            lockUnlockBtn.classList.remove("fa-lock");
            lockUnlockBtn.classList.add("fa-unlock");
            ticketTaskArea.setAttribute("contenteditable", "true");
        } else {
            lockUnlockBtn.classList.remove("fa-unlock");
            lockUnlockBtn.classList.add("fa-lock");
            ticketTaskArea.setAttribute("contenteditable", "false");
        }

        //update ticketArr
        let ticketIdx = getTicketIdx(id);
        ticketArr[ticketIdx].task = ticketTaskArea.textContent;
        updateLocalStorage();
    })


    // handling delete
    
    ticketCont.addEventListener("click",function(){
        if(removeFLag)
        ticketCont.remove()
    })

    
         
    

   // handle color

   let ticketColorBand = ticketCont .querySelector(".ticket-color");
   ticketColorBand.addEventListener("click" , function(){
     
    let currentTicketcolor = ticketColorBand.classList[1];
    let currentTicketcolorIdx = -1;
    for(let i = 0; i < color.length; i++){
        if(currentTicketcolor == color[i]){
            currentTicketcolorIdx = i;
            break;
        }
    }

    let nextColorIdx = (currentTicketcolorIdx+1)%color.length;
    let nextColor = color[nextColorIdx];

    ticketColorBand.classList.remove(currentTicketcolor);
    ticketColorBand.classList.add(nextColor);



   })
    



}