function generate_error(error_list) {
    return `<p>${error_list.join(" && ")}</p>`;
}

var lo = document.getElementById("log");

lo.onclick = function (ev) {
    
    var username = document.getElementById("user");
    var password = document.getElementById("pass");
    var er = document.getElementById("err");
   
    var usernametxt = username.value.trim();
    var passwordtxt = password.value.trim();

    er.innerHTML = "";
    
    let error_list = [];
    if (usernametxt.length <= 0) {
        error_list.push(" User is required!");
    } else if (usernametxt.length <= 5) {
        error_list.push(" Username must at least 5 char!");
    }

    if (passwordtxt.length <= 0) {
        error_list.push(" pass is required");
    } else if (passwordtxt.length <= 5) {
        error_list.push("pass must at least 5 char!");
    }
    
    if (error_list.length>0){
        ev.preventDefault();
        var errorHTML = generate_error(error_list);
        er.insertAdjacentHTML("afterbegin", errorHTML);
    }else{  
            ev.preventDefault();
            
            window.open("index2.html", "_blank");
          
    }
};

