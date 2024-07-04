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
  
  
    
    const bookingR = document.querySelector(".BookingReceived");
    const bookingRM = document.querySelector(".BookingReceivedM");
    const bKF = document.querySelector(".BKF");
    bookingR.style.display = "none";

$(".BookingReceived").css("display","none");
$(".BookingReceivedM");
$(".BKF");

    $(".FnameErr").css("display","none");
    $(".LnameErr").css("display","none");
    $(".eMailErr").css("display","none");
    $(".BAddErr").css("display","none");
    $(".TCErr").css("display","none");
    $(".PCErr").css("display","none");

let InputIsClean = [];
let InputIsCleanvar = true;
let inputNotClean = false;
   
    const hasNumbers = (str) => {
        return /\d/.test(str);
      };

      function InputHasValue(){
        if(fName.value === '' || fName.value == null){
            $(".FnameErr").css("display","block"); 
            $(".FnameErr").css("color","red");
            $(".FnameErr").text("Field can not be empty");
            InputIsClean.push(false);
          
           }
           else{
            $(".FnameErr").css("display","none"); 
            InputIsClean.push(true);
         }


          if(lName.value === '' || lName.value == null){
            $(".LnameErr").css("display","block"); 
            $(".LnameErr").css("color","red");
            $(".LnameErr").text("Field can not be empty");
            InputIsClean.push(false);
    
          }
          else{
            $(".LnameErr").css("display","none");
            InputIsClean.push(true);
         }

          if(Badd.value === '' || Badd.value == null){
            $(".BAddErr").css("display","block");
            $(".BAddErr").css("color","red");
            $(".BAddErr").text("Field can not be empty");
            InputIsClean.push(false);
           
          }
          else
          { 
            $(".BAddErr").css("display","none");
            InputIsClean.push(true);
          }

          if(townCity.value === '' || townCity.value == null){
          $(".TCErr").css("display","block");
          $(".TCErr").css("color","red");
          $(".TCErr").text("Field can not be empty")
          InputIsClean.push(false);
          
          }
          else{
            $(".TCErr").css("display","none");
            InputIsClean.push(true); 
         }
       
          if(pCOde.value === '' || pCOde.value == null){
            $(".PCErr").css("display","block");
            $(".PCErr").css("color","red");
            $(".PCErr").text("Field can not be empty");
            InputIsClean.push(false);
            
        }
        else{
          $(".PCErr").css("display","none");
            InputIsClean.push(true);
         }
       
       
      }

      let InputHasNumbers = ()=>{

        fNameHasNumbers = hasNumbers(fName.value);
        lNameHasNumbers = hasNumbers(lName.value);

        if(fNameHasNumbers){ 
          $(".FnameErr").css("display","block"); 
          $(".FnameErr").css("color","red");
          $(".FnameErr").text("First name can not contain numbers"); 
         InputIsClean.push(false);
       
         }
         else{
          InputIsClean.push(true);
         }
         if(lNameHasNumbers){
          $(".LnameErr").css("display","block"); 
          $(".LnameErr").css("color","red");
          $(".LnameErr").text("First name can not contain numbers");
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

      $(".eMailErr").css("display","block");
      $(".eMailErr").css("color","red");
      $(".eMailErr").text("Please enter a valid email address");
        InputIsClean.push(false);
    }
    else{
      $(".eMailErr").css("display","none");
        InputIsClean.push(true);
    }
}

function BookingReceived(){
$(".BookingReceivedM").text("Hi "+fName.value
+" thank you for booking the "+pSelect.value+" your booking request has been sent to "
+eMail.value+" please check your mail for next steps of the procces");
$(".BKF").css("display","none");
$(".BookingReceived").css("display","block");
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
 

