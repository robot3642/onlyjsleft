let myinput = document.querySelectorAll('.mon-input');
let fullNameInput = document.getElementById('fullName');
let emailInput = document.getElementById('email');
let phoneNumber = document.getElementById('phoneNumber');
let address = document.getElementById('Address');
let message = document.getElementById('Message');


function checkPassword(){
    
    // if(fullNameInput.value === ''){
    //     Swal.fire({
    //         title: "Good job!",
    //         text: "You clicked the button!",
    //         icon: "error"
    //       });
    //     fullNameInput.style.border = '1px solid red'
      
    // }
    // else {
    //     fullNameInput.style.border =  '1px solid green'
    //     Swal.fire({
    //         title: "Good job!",
    //         text: "You clicked the button!",
    //         icon: "success"
    //       });
    // }
    // if(emailInput.value === ''){
    //     emailInput.style.border = '1px solid red'
    // }
    // else {
    //     emailInput.style.border =  '1px solid green'
    // }
    // if(phoneNumber.value === ''){
    //     phoneNumber.style.border = '1px solid red'
    // }
    // else {
    //     phoneNumber.style.border =  '1px solid green'
    // }
    // if(address.value === ''){
    //     address.style.border = '1px solid red'
    // }
    // else {
    //     address.style.border =  '1px solid green'
    // }
    // if(message.value === ''){
    //     message.style.border = '1px solid red'
    // }
    // else {
    //     message.style.border =  '1px solid green'
    // }
    myinput.forEach((e)=>{
        if(e.value == ''){
            e.style.border = '1px solid red'
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "error"
              });
        }
        else {
            e.style.border = '1px solid green'
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
        }
    })
}