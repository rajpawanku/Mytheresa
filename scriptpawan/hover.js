let singnupData=JSON.parse(localStorage.getItem('user_details'))
console.log(singnupData)

document.getElementById('login').onclick= function(){
    loginData(event)
}

let loginData = (e)=>{
    e.preventDefault()
    console.log('amit')
    let email= document.getElementById('login_email').value;
    let pass= document.getElementById('login_pass').value;
// console.log(email,pass)
    let count=0
    for(let i=0; i<singnupData.length; i++){
        if(singnupData[i].email==email && singnupData[i].pass==pass){
            count++
            break;
        }
    }
    if(count>0){
        alert('login successful',count)
        window.location.href='./index.html'
    }else{
        window.location.href="login.html"
    }
}