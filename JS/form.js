passCheck = ()=>{
    let pass=document.querySelector('#password');
    let passc=document.querySelector('#passwordc');
    if(pass.value!=passc.value)
    passwordc.setCustomValidity('Passwords do not match!');
    else
    passwordc.setCustomValidity('');
}