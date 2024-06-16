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


    fNameErr.style.display = "none";
    lNameErr.style.display = "none";
    bAddErr.style.display = "none";
    tcErr.style.display = "none";
    pcErr.style.display = "none";
    eMailErr.style.display = "none";

   
    const hasNumbers = (str) => {
        return /\d/.test(str);
      };

      function InputHasValue(){
        if(fName.value === '' || fName.value == null){
            fNameErr.style.display = "block"; 
            fNameErr.style.color = "red";
            fNameErr.innerHTML = "Field can not be empty";
           }
           else{
            fNameErr.style.display = "none";
         }


          if(lName.value === '' || lName.value == null){
            lNameErr.style.display = "block";
            lNameErr.style.color = "red";
            lNameErr.innerHTML = "Field can not be empty";
          }
          else{
            lNameErr.style.display = "none";
         }

          if(Badd.value === '' || Badd.value == null){
            bAddErr.style.display = "block";
            bAddErr.style.color = "red";
            bAddErr.innerHTML = "Field can not be empty";
          }
          else{
            bAddErr.style.display = "none";
         }

          if(townCity.value === '' || townCity.value == null){
          tcErr.style.display = "block";
          tcErr.style.color = "red";
          tcErr.innerHTML = "Field can not be empty";
          }
          else{
            tcErr.style.display = "none";
         }
       
          if(pCOde.value === '' || pCOde.value == null){
            pcErr.style.display = "block"; 
            pcErr.style.color = "red";
            pcErr.innerHTML = "Field can not be empty";
        }
        else{
            pcErr.style.display = "none";
         }
       
       
      }

      function InputHasNumbers(){

        fNameHasNumbers = hasNumbers(fName.value);
        lNameHasNumbers = hasNumbers(lName.value);

        if(fNameHasNumbers){ 
         fNameErr.style.display = "block";
         fNameErr.style.color = "red";
         fNameErr.innerHTML = "First name can not contain numbers";
         }
    

         if(lNameHasNumbers){
          lNameErr.style.display = "block";
          lNameErr.style.color = "red";
          lNameErr.innerHTML = "last name can not contain numbers";
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
    }
    else{
        eMailErr.style.display = "none";
    }
}
      
addForm.addEventListener('submit',function(e){
    e.preventDefault();
    InputHasValue();
    InputHasNumbers();
    isEmailValid();
});
 

