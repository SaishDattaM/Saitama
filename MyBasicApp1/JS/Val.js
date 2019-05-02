$(document).ready(function(){

$('#Login_form').submit(function(e){
    e.preventDefault();
   // window.alert('mmm');
    var username = $('#LoginUN').val();
    var usernameRegExp= /^[a-zA-Z]+$/;
    var password = $('#LoginPWD').val();
    var messagevalidation = $('#valmsg').val();
    var valtest = usernameRegExp.test(username)
    $('#valmsg').text("");
    $('.error').remove();
    var validation = true;
// Validating Username Field.
if(username.length<1)
{    // $('#valmsg').text("* Username and Password are mandatory *");
$('#LoginUN').after('<span class="error">This field is required</span>');
validation = false;
//$("#LoginUN").focus();
}else
if (!(username.length >= 6 && username.length <= 8 && valtest==true)) {
$('#LoginUN').after('<span class="error">Please enter between 6 and 8 alphabets only</span>');
$("#LoginUN").focus();
validation = false;
}
//validating password field.
if(password.length<1)
{       $('#LoginPWD').after('<span class="error">This field is required</span>');
validation = false;
} else
if (password.length < 8) {
    $('#LoginPWD').after('<span class="error">password min length is 8</span>');
    $('#LoginPWD').focus()
    validation = false;
}
if(validation == true)
{
window.location.href='User.html'
   }
   });
$('#userForm').validate({
    rules : {
        StudentName: 'required',
        StudentID: {
            required:true,
            minlength:5
        },
        gender : 'required',
        Standard:'required',
        emailid:'required',
        phno:   'required'

    },
    messages:{
        StudentName:'This field is required',
        StudentID:'This field is required and min length is 5',
        gender:'This field is required',
        Standard:'This field is required',
        emailid:'This field is required',
        phno:'This field is required'

    },
    submitHandler: function(form) {
        form.submit();  
      }
});
$('#sigupform').validate({
    rules:{
        name:'required',
        DOB:'required',
        pwd:'required',
        pwd2:{
            equalto: '#pwd'
        }
    },
    messages:{
        name:'This field is required',
        DOB:'DOB is required field',
        pwd:'This is required field',
        pwd2:'This is required field'
    }
})
})
