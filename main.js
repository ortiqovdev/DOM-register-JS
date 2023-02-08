let input1 = document.querySelector('#input1')
let check1 =document.querySelector('#check1')
function signUp(event) {

    event.preventDefault();

    if (document.getElementById("password2").value == document.getElementById("cfmpassword2").value) {
        var users = new Object();
            users.firstName = document.getElementById("firstName").value;
            users.lastName = document.getElementById("lastName").value;
            users.username2 = document.getElementById("username2").value;
            users.email = document.getElementById("email").value;
            users.password2 = document.getElementById("password2").value;


        var postUser = new XMLHttpRequest();
            /* 
                Optional:
                A callback to process response from the server and possibly manipulate the DOM
                or let the user know if things went OK.
            */
            postUser.onreadystatechange=function(){
                if( this.status==200 && this.readyState==4 ){
                    alert( this.response )
                }
            }
            postUser.open( "POST", "/users", true );
            postUser.setRequestHeader( "Content-Type", "application/json" );
            postUser.send( JSON.stringify( users ) );
    }
    else {
        alert("Password column and Confirm Password column doesn't match!")
    }
}