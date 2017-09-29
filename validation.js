$(document).ready(function(){
	$("#form1").validate({
		rules: {
			
			 firstname: {
                
                required: true,
                 minlength: 4
			 },
            lastname: {
            	
            	required: true,
            	minlength: 4
            },
            mail: {
            	required: true,
            	email: true
            },
            securepassword: {
            	required: true,
            	minlength: 5
            },
            txtaddress1: {
            	required: true
            },
            txtaddress2: {
            	required: true
            },
            city: "required",
            state: "required",
            gender: "required",
            check:  "required"
		},
		messages: {
			
				firstname: {
					firstname: "please enter your firstname",
				    minlength: "your name must consist of 4 letters"
			    },
			    lastname: {
					lastname: "please enter your lastname",
					minlength: "your name must consist of 4 letters"
			    },
				mail: {
					mail: "please enter mail"
				},
				password: {
					password: "please enter password",
					minlength: "password must be 5 letters"
				},
				txtaddress1: "enter your address",
				txtaddress2: "enter your address",
				city: "choose city",
				state: "choose state",
				gender: "select gender",
				check: "check details"
		},
		submitHandler: function(form) {

			return false;
			// form.submit();
		}
		
	});
});                 
