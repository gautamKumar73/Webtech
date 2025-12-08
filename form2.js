
function formValidation()
{
    let x=document.getElementById("name").value;
    let text;
    if(( x >= 1 || x <= 10 || x=='@'||x=='#' || x=='%' ))
    {
      text="Invalid Input"
    }else{
        text="Valid Input"
    }
    document.getElementById("blank").innerHTML=text;
}

