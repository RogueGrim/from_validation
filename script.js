function checkName(){
    const name = document.getElementById('name')

    name.addEventListener('input',()=>{
        name.reportValidity()
        if(name.validity.tooShort){
            name.setCustomValidity('Too Short')
        }else{
            name.setCustomValidity('')
        }
    
    })
}

function checkEmail(){
    const mail = document.getElementById('email')

    mail.addEventListener('input',()=>{
        mail.reportValidity()
        if(mail.validity.typeMismatch){
            mail.setCustomValidity('Plese Enter a Valid Email')
        }else{
            mail.setCustomValidity('')
        }
    })
}

function checkCode(){
    const selection = document.getElementById('country').value
    const input = document.getElementById('postalCode')

    const constraints = {
        india:[
            "\d{6}$",
            "Indian Postal Code must have 6 numbers"
        ],
        usa:[
            "\d{5}$",
            "US Postal Code must have 5 numbers"
        ],
        pakistan:[
            "\d{6}",
            "Pakistan Postal Code must have 6 numbers"
        ]
    }

    const constraint = new RegExp(constraints[selection][0], "");

    
    if (constraint.test(input.value)) {
        // The postal code follows the constraint, we use the ConstraintAPI to tell it
        input.setCustomValidity("");
      } else {
        // The postal code doesn't follow the constraint, we use the ConstraintAPI to
        // give a message about the format required for this country
        input.setCustomValidity(constraints[selection][1]);
      }
    

}

function checkPass(){
    const pass = document.getElementById('password')
    const confirmPass = document.getElementById('confirmPassword')

    confirmPass.addEventListener('input',()=>{
        if(pass.value==confirmPass.value){
            confirmPass.setCustomValidity('')
        }else{
            confirmPass.setCustomValidity('Passwords Do Not Match')
            confirmPass.reportValidity()
        }
    })

}

checkName()
checkEmail()
checkPass()
