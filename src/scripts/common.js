define("common",[],function(){
    methods = {
        showValidFeedback(inputDOM,valid){
            inputDOM.removeClass("is-invalid is-valid");

            if(valid){
                inputDOM.addClass("is-valid");
            } else {
                inputDOM.addClass("is-invalid");
            }
        }
    }
    return methods;
});