$(document).ready(function(){
    $('form').validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            age:{
                required:true,
                maxlength:2
            },
            email:{
                required:true,
                email:true
            },
            day:{
                required:true
            },
            gender:{
                required:true
            },
            password:{
                required:true,
                minlength:8,
                maxlength:14,
                containsUppercase:true,
                containsLowercase:true,
                containsNumber:true
            },
            confirmpassword:{
                required:true,
                equalTo:"#password"
            }
            
        },
        messages:{
            fname:{
                required:"enter fullname",
                minlength:"enter atleast 4 charecters"
            },
            password:{
                containsUppercase:"password must contain atleast one uppercase letter",
                containsLowercase:"password must contain atleast one lowercase letter",
                containsNumber:"password must contain atleast one number",
            },
            confirmpassword:{
                equalTo:"passwords dont match"}
        }
    })
})
$.validator.addMethod("containsUppercase",function(value,element){
    return /[A-Z]/.test(value)
})
$.validator.addMethod("containsLowercase",function(value,element){
    return /[a-z]/.test(value)
})
$.validator.addMethod("containsNumber",function(value,element){
    return /[0-9]/.test(value)
})