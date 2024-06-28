const addForm = document.forms['add-form'];
const fName = document.getElementById("Fname");

    const lName = document.getElementById("Lname");
    const Badd = document.getElementById("Badd");
    const townCity = document.getElementById("townCity");
    const pCOde = document.getElementById("pCode");
    const cSelect = document.getElementById("cSelect");
    const eMail = document.getElementById("Email");
    const pNum = document.getElementById("Pnum");
    const pSelect = document.getElementById("pSelect");
  
    const fNameErr = document.querySelector(".FnameErr");
    const lNameErr = document.querySelector(".LnameErr");
    const bAddErr = document.querySelector(".BAddErr");
    const tcErr = document.querySelector(".TCErr");
    const pcErr = document.querySelector(".PCErr");
    const eMailErr = document.querySelector(".eMailErr");
    
    const bookingR = document.querySelector(".BookingReceived");
    const bookingRM = document.querySelector(".BookingReceivedM");
    const bKF = document.querySelector(".BKF");
    bookingR.style.display = "none";


    fNameErr.style.display = "none";
    lNameErr.style.display = "none";
    bAddErr.style.display = "none";
    tcErr.style.display = "none";
    pcErr.style.display = "none";
    eMailErr.style.display = "none";
let InputIsClean = [];
let InputIsCleanvar = true;
let inputNotClean = false;
   
    const hasNumbers = (str) => {
        return /\d/.test(str);
      };

      function InputHasValue(){
        if(fName.value === '' || fName.value == null){
            fNameErr.style.display = "block"; 
            fNameErr.style.color = "red";
            fNameErr.innerHTML = "Field can not be empty";
            InputIsClean.push(false);
          
           }
           else{
            fNameErr.style.display = "none";
            InputIsClean.push(true);
         }


          if(lName.value === '' || lName.value == null){
            lNameErr.style.display = "block";
            lNameErr.style.color = "red";
            lNameErr.innerHTML = "Field can not be empty";
            InputIsClean.push(false);
    
          }
          else{
            lNameErr.style.display = "none";
            InputIsClean.push(true);
         }

          if(Badd.value === '' || Badd.value == null){
            bAddErr.style.display = "block";
            bAddErr.style.color = "red";
            bAddErr.innerHTML = "Field can not be empty";
            InputIsClean.push(false);
           
          }
          else{
            bAddErr.style.display = "none";
            InputIsClean.push(true);
         }

          if(townCity.value === '' || townCity.value == null){
          tcErr.style.display = "block";
          tcErr.style.color = "red";
          tcErr.innerHTML = "Field can not be empty";
          InputIsClean.push(false);
          
          }
          else{
            tcErr.style.display = "none";
            InputIsClean.push(true); 
         }
       
          if(pCOde.value === '' || pCOde.value == null){
            pcErr.style.display = "block"; 
            pcErr.style.color = "red";
            pcErr.innerHTML = "Field can not be empty";
            InputIsClean.push(false);
            
        }
        else{
            pcErr.style.display = "none";
            InputIsClean.push(true);
         }
       
       
      }

      let InputHasNumbers = ()=>{

        fNameHasNumbers = hasNumbers(fName.value);
        lNameHasNumbers = hasNumbers(lName.value);

        if(fNameHasNumbers){ 
         fNameErr.style.display = "block";
         fNameErr.style.color = "red";
         fNameErr.innerHTML = "First name can not contain numbers";
         InputIsClean.push(false);
       
         }
         else{
          InputIsClean.push(true);
         }
   
    

         if(lNameHasNumbers){
          lNameErr.style.display = "block";
          lNameErr.style.color = "red";
          lNameErr.innerHTML = "last name can not contain numbers";
          InputIsClean.push(false);
         }
         else{
          InputIsClean.push(true);
         }
      
         

      }

     function isEmailValid(){
        const emailVal = eMail.value.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
if(!emailVal){

        eMailErr.style.display = "block";
        eMailErr.style.color ="red";
        eMailErr.innerHTML =  "Please enter a valid email";
        InputIsClean.push(false);
    }
    else{
        eMailErr.style.display = "none";
        InputIsClean.push(true);
    }
}

function BookingReceived(){

  bookingRM.innerHTML = "Hi "+fName.value+" thank you for booking the "+pSelect.value+" your booking request has been sent to "+eMail.value+" please check your mail for next steps of the procces";
  bKF.style.display = "none";
  bookingR.style.display = "block"
  bKF.style.color = "red";
}
      
addForm.addEventListener('submit',function(e){
  InputHasValue();
  InputHasNumbers();
  isEmailValid();
  inputNotClean = false;

  for(let input of InputIsClean ){
    console.log(input);
    if(input == false){
      console.log("Input is not clean");
      inputNotClean = true;
    }

  }

  InputIsClean.length = 0;
  if(inputNotClean){e.preventDefault();}
if(!inputNotClean){
  console.log("Booking Received");
  BookingReceived();
}
e.preventDefault();
});
 

