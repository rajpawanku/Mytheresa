// console.log('hello world')


//             singup part

let form = document.getElementById('form')
form.onsubmit = function () {
    singnup(event)
}


let userData = function (fn,ln,e,p) {
    // this.title=title;
    this.name = `${fn} ${ln}`
    this.email = e;
    this.pass = p;
}

let arr = JSON.parse(localStorage.getItem('user_details')) || []
function singnup(e) {
    e.preventDefault()
    // console.log('amit')
    let title = document.getElementsByClassName('title')

    for (let i = 0; i < title.length; i++) {
        if (title[i].checked) {
            let title = title[i].value
            console.log(title)
        }
    }

    let first_name = form.first_name.value;
    let last_name = form.last_name.value;
    let email = form.email.value;
    let pass = form.pass.value;
    let confirm_pass = form.confirm_pass.value
    // console.log(first_name,email,pass)
    let p1 = new userData(first_name, last_name, email, pass)
    console.log(p1)
    arr.push(p1)
    // console.log(arr)
    if (first_name == "" || last_name == "" || email == "") {
        alert('Please select * marks fild')
    } 
    else if(pass != confirm_pass){
        alert("password not matched")
    }else{

        localStorage.setItem('user_details', JSON.stringify(arr))
    }



}

//                  login part




let singnupData=JSON.parse(localStorage.getItem('user_details'))
console.log(singnupData)

let login= document.getElementById('login').onclick= function(){
    loginData(event)
}

loginData = (e)=>{
    e.preventDefault()
    console.log('amit')
    let email= document.getElementById('login_email').value;
    let pass= document.getElementById('login_pass').value;

    let count=0
    for(let i=0; i<singnupData.length; i++){
        if(singnupData[i].email==email && singnupData[i].pass==pass){
            count++
            break;
        }
    }
    if(count>0){
        alert('login successful',count)
    }else{
        alert('Invalid credential',count)
    }
}