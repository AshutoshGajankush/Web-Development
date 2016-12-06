function isEmail(email) {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(email);
            }
            
            $("#submitButton").click(function(){
                var fieldsMissing = "";
                if($("#email").val() == ""){
                    fieldsMissing += "Email";
                }
                
                if($("#telephone").val() == ""){
                    fieldsMissing += "<br>Telephone";
                }
                
                if($("#password").val() == ""){
                    fieldsMissing += "<br>Password";
                }
                
                if($("#confirmPassword").val() == ""){
                    fieldsMissing += "<br>Confirm Password";
                }
                
                var errorMessage = "";
                if(fieldsMissing != ""){
                    errorMessage = "<p>These Fields are missing: </p>" + fieldsMissing;
                }
                errorMessage += "<p>ERRORS!!</p>";
                var emailValid = isEmail($("#email").val());
                if(emailValid == false){
                    errorMessage += "<p>Email is not valid!!</p>";
                }
                if( $.isNumeric($("#telephone").val()) == false){
                    errorMessage += "<p>Phone Number is not numeric!!</p>";
                }
                if($("#password").val() != $("#confirmPassword").val()){
                    errorMessage += "<p>Please confirm the Password</p>";
                }
                
                if(errorMessage == "<p>ERRORS!!</p>"){
                    errorMessage = "";
                    var successMessage = "You are Signed Up!!";
                    $("#errorMessage").html(errorMessage);
                    $("#successMessage").html(successMessage);
                }else{
                    $("#errorMessage").html(errorMessage);
                }
            });