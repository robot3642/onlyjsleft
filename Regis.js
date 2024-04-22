let userUsername = document.getElementById('user');
let userPassword = document.getElementById('pass');
let userEmail = document.getElementById('email');
let userAllinfo = document.querySelectorAll('.textbox');

function checkRegister(e){
    console.log('123');
    console.log(e);
    e.preventDefault();
    if(userUsername.value == ''){
        Swal.fire({
            title: "กรุณากรอกข้อมูลให้ครบ",
            icon: "error"
          });
    }
    else {
        Swal.fire({
            title: "Good job!",
            icon: "success"
          });
    }
}