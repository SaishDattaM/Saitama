$(document).ready(function(){

$('#Login_form').submit(function(e){
    e.preventDefault();
   // window.alert('mmm');
    var username = $('#LoginUN').val();
    var $usernameRegExp= /^[a-zA-Z]+$*/;
    var password = $('#LoginPWD').val();
    if(username.length==0 || password.length==0 )
    {$('#msgval').text("username and password are mandatory");}
    if (password.length < 8) {
        $('#msgval').text("password min length is 8");
        $('#LoginPWD').focus()
        //window.alert('mmmdddddddd');
    }else{$('#msgval').text("");}
// Validating Username Field.
if (!(username.length >= 6 && username.length <= 8) && username.match($usernameRegExp) || username.length == 0) {
$('#p2').text("* Please enter between 6 and 8 alphabets only *"); 
$("#LoginUN").focus();
return false;
}
    //window.location.href='User.html'
    })
})
