function Login(){
    var emad = document.getElementById('emad').value;
    var pax = document.getElementById('pax').value;

    var x = 0;
    var y = 0;
    if(emad != ""){
        x = 1;
    }
    if(pax != ""){
        y = 1;
    }

    if(x==1 && y==1){
        document.getElementById('results').innerHTML = "Logging in...";
        setTimeout(function(){
            window.open('2qproj/index.html')
        }, 1000);
    }else if(x==1 && y==0){
        document.getElementById('results').innerHTML = "Please enter your password.";
        console.log("Login error.");
    }else if(x==0 && y==1){
        document.getElementById('results').innerHTML = "Please enter your username.";
        console.log("Login error.");
    }else{
        document.getElementById('results').innerHTML = "Please enter your username and password.";
        console.log("Login error.");
    }    
}