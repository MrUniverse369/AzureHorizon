const addForm = document.forms['add-form'];

addForm.addEventListener('submit',function(e){
    e.preventDefault()
    const fName = document.getElementById("Fname").value;
    const lName = document.getElementById("Lname").value;
    const addLine = document.getElementById("addLine").value;
    const townCity = document.getElementById("townCity").value;
    const pCOde = document.getElementById("pCode").value;
    const cSelect = document.getElementById("cSelect").value;
    const eMail = document.getElementById("Email").value;
    const pNum = document.getElementById("Pnum").value;
    const pSelect = document.getElementById("pSelect").value;
    console.log(fName);
    console.log(lName);
    console.log(addLine);
    console.log(townCity);
    console.log(pCOde);
    console.log(cSelect);
    console.log(pSelect);
    console.log(eMail);
    console.log(pNum);
    alert("Your "+pSelect+" Package has been booked a confirmation email should be with you shortly");
    
});
    

