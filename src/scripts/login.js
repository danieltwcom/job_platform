define(['jquery','validation','common'], function($,validation,common){
    $(document).ready(function(){
        // --- DOMs ---
        // login doms
        let login_email = $("#login_email"),
            login_password = $("#login_password"),
            login_submit_btn = $("#login_submit_btn");

        // signup doms
        let signup_email = $("#signup_email"),
            signup_username = $("#signup_username"),
            signup_password = $("#signup_password"),
            signup_confirm_password = $("#signup_confirm_password"),
            signup_first_name = $("#signup_first_name"),
            signup_last_name = $("#signup_last_name"),
            signup_role = $("#signup_role"),
            signup_submit_btn = $("#signup_submit_btn");
        
        // alert doms
        let alert_box = $("#alert_box"),
            alert_text = $("#alert_text"),
            alert_close_btn = $("#alert_close_btn");

        // --- Initialize ---
        // - active tab by url -
        // - localhost:port/register
        let url = window.location.href;

        if(window.location.pathname == "/register"){
            $("#login_form_tab").removeClass("active show");
            $("#signup_form_tab").addClass("active show");
            $("#login_form").removeClass("active show");
            $("#signup_form").addClass("active show");
        }else{
            $("#signup_form_tab").removeClass("active show");
            $("#login_form_tab").addClass("active show");
            $("#signup_form").removeClass("active show");
            $("#login_form").addClass("active show");
        }

        // --- Triggers ---
        // - login form submit button - 
        login_submit_btn.on("click",function(){
            let emailValid = validation.email(login_email.val());
            let passwordValid = validation.password(login_password.val());
            if(emailValid && passwordValid){
                loginUser();
            }else{
                showAlert("Please check inputs");
            }
        });

        // - signup form submit button -
        signup_submit_btn.on("click",function(){
            let inputValid = validation.signupInput(
                signup_email.val(),
                signup_username.val(),
                signup_password.val(),
                signup_confirm_password.val(),
                signup_last_name.val(),
                signup_first_name.val(),
                signup_role.val(),
                $("#signup_email_notification").is(":checked")
            );
            
            if(inputValid){
                registerUser();
            }else{
                showAlert("Please check inputs");
            }
        });

        // - alert close button -
        alert_close_btn.on("click",() => { alert_box.hide(); });

        // - input(signup) validation feedback -
        signup_username.on("focusout",()=>{
            common.showValidFeedback(signup_username,validation.username(signup_username.val()));
        });
        signup_email.on("focusout",()=>{
            common.showValidFeedback(signup_email,validation.email(signup_email.val()));
        });
        signup_password.on("focusout",()=>{
            common.showValidFeedback(signup_password,validation.password(signup_password.val(),signup_confirm_password.val()));
        });
        signup_confirm_password.on("focusout",()=>{
            common.showValidFeedback(signup_confirm_password,signup_password.val()==signup_confirm_password.val())
        });
        signup_first_name.on("focusout",()=>{
            common.showValidFeedback(signup_first_name,validation.name(signup_first_name.val()));
        });
        signup_last_name.on("focusout",()=>{
            common.showValidFeedback(signup_last_name,validation.name(signup_last_name.val()));
        });
        signup_role.on("focusout",()=>{
            common.showValidFeedback(signup_role,validation.role(signup_role.val()));
        });


        // --- Functions --- 
        // - show alert -
        function showAlert(text,styleClass="alert-danger"){
            alert_box.addClass(styleClass);
            alert_text.html(text);
            alert_box.show();
        }

        // - user login -
        function loginUser(){
            $.ajax({
                type:"POST",
                url:"/login",
                data:{
                    email: login_email.val(),
                    password: login_password.val()
                },
                success:function(res){
                    if(res.status == "success"){
                        showAlert(res.status,'alert-success');
                        // redirect to board
                        window.location.href = "/board";
                    }else{
                        showAlert(res.status,'alert-danger');
                    }
                }
            });
        }

        // - create user ajax -
        function registerUser(){
            $.ajax({
                type: "POST",
                url:"/register",
                data:{
                    email: signup_email.val(),
                    username: signup_username.val(),
                    password: signup_password.val(),
                    first_name: signup_first_name.val(),
                    last_name: signup_last_name.val(),
                    role: signup_role.val(),
                    email_notification: $("#signup_email_notification").val()
                },
                success:function(res){
                    showAlert(res.status,'alert-success');
                }
            })
        }
    });
});