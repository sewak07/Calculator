let display=document.querySelector("#display"); //select the display
let btns=document.querySelectorAll(".btnNum"); //select the buttons with class .butNum
for(let btn of btns){                       //loop to get all the buttons
    btn.addEventListener("click",()=>{      // event listner
         display.value+=btn.textContent;    //display the text written in the button to display
            if(btn.textContent=="c"){
                display.value="";            // clears the display
            }
        }
)}

let Equal=document.querySelector(".btnEqual");// select the button with class .btnEqual
Equal.addEventListener("click",()=>{         //event listner
   try{
    display.value=eval(display.value);//evaluate the expression
   }catch(error){
    display.value="error"; //handle invalid expression
   }
})




