define('validation',[],function(){
    let methods = {
        notEmpty: function (value){
            if($.trim(value)=="" || value==null){
                return false;
            }
            return true;
        },
        password: function (password){
            // minimum 8 characters at least 1 Alphabet and 1 Number with Optional Special Chars
            let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{6,30}$/;
            if(!this.notEmpty(password)){
                return false;
            } else if (!re.test(password)){
                return false;
            }
            return true;
        },
        email: function (email){
            let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(!re.test(email)){
                return false;
            }
            return true;
        },
        username: function (username){
            // allow a-z,A-Z,0-9,-,_ length 3-16
            let re = /^[A-Za-z0-9_-]{3,16}$/;
            if(!re.test(username)){
                return false;
            }
            return true;
        },
        name: function(name){
            // only alphabets no special character
            let re = /^[a-z,\s]{1,20}[a-z,A-Z]$/i;
            if(!re.test(name)){
                return false;
            }
            return true;
        },
        role: function(role){
            if(!this.notEmpty(role)){
                return false;
            } else if(!(role=="interpreter" || role=="transcriber")){
                return false;
            }
            return true;
        },
        emailNotification: function(email_notification){
            // TODO
            return true;
        },
        signupInput: function (email, username, password, confirm_password, last_name, first_name, role, email_notification){
            let validPassword = this.password(password,confirm_password),
                validEmail = this.email(email),
                validUsername = this.username(username),
                validFName = this.name(first_name),
                validLName = this.name(last_name),
                validRole = this.role(role),
                validEmailNotification = this.emailNotification(email_notification);
            
            if(validPassword && validEmail && validUsername && validFName && validLName && validRole && validEmailNotification){
                return true;
            }else{
                return false;
            }
        }
    }
    return methods;
});

