
var userName=document.getElementById("userName");
var userEmail=document.getElementById("userEmail");
var userPass=document.getElementById("userPass");
var success=document.getElementById("success");
var reject=document.getElementById("reject");
var logIncorrect=document.querySelector("#logIncorrect");

// _____________

var infoContiner=[];

if (localStorage.getItem("usersInfo")!= null) 
{
    infoContiner=JSON.parse(localStorage.getItem("usersInfo"));
}

// ++++++++++++++++++++++++++++ sign up ++++++++++++++++++++++++++++++++++++++
function signUpInfo(){

    var infoList=
    {
        userName:userName.value,
        userEmail:userEmail.value,
        userPass:userPass.value
    }
    if (validtionUserName()&&validtionUserEmail()&&validtionUserPass()==true)
    {
         infoContiner.push(infoList);
         localStorage.setItem("usersInfo",JSON.stringify(infoContiner));
         validSucsess();
         clrForm();
    }
    else
    {
        validReject();
    }
}
// +++++++++++++++++++
function validtionUserName(){
    var rejex=/^[a-zA-Z]{3}/;
    return rejex.test(userName.value);
}

function validtionUserEmail(){
    var rejex=/(.+)@(.+){2,}\.(.+){2,}/;
    return rejex.test(userEmail.value); 
}

function validtionUserPass(){
    var rejex=/[0-9]{8}$/;
    return rejex.test(userPass.value);
}
// +++++++++++++++++++
function validSucsess()
{
    success.classList.replace("d-none","d-inline-block");
    reject.classList.replace("d-inline-block","d-none");
}
function validReject()
{
    reject.classList.replace("d-none","d-inline-block");
    success.classList.replace("d-inline-block","d-none");
}
// ++++++++++++++++++++
function clrForm()
{
    userName.value="";
    userEmail.value="";
    userPass.value="";
}
// ++++++++++++++++++++++++++++++end+++++++++++++++++++++++++++++++++++++++++++


// =================================log in=======================================
function loginUser()
{    
    
    if(userEmail.value&&userPass.value != " ")
    {
        for (var i=0;i<infoContiner.length;i++)
    {
        if(infoContiner[i].userEmail==userEmail.value&&infoContiner[i].userPass==userPass.value)
        {
            window.location.href="./userAccount.html";
            
            localStorage.setItem("accountName",infoContiner[i].userName)

        }
        
        
    }

    }else
    {
        Incorrect();
    } 
    
}
function Incorrect()
{
    logIncorrect.classList.replace("d-none","d-inline-block");
    logRequired.classList.replace("d-inline-block","d-none");
}
// ++++++++++++++++++++++++++++++end===========================================