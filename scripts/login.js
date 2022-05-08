// console.log('hello world')


import navbar from "../components/nav.js"
console.log(navbar)
document.getElementById('navbar').innerHTML=navbar()




// import footer from "../components/footer.js"
// console.log(footer)









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
            // console.log(title)
        }
    }

    let first_name = form.first_name.value;
    let last_name = form.last_name.value;
    let email = form.email.value;
    let pass = form.pass.value;
    let confirm_pass = form.confirm_pass.value

    // let check_box= form.check_box.value
    // console.log(first_name,email,pass)
    let p1 = new userData(first_name, last_name, email, pass)
    // console.log(p1)
    arr.push(p1)
    // console.log(arr)
    if (first_name == "" || last_name == "" || email == "" ) {
        alert('Please select * marks fild')
    } 
    else if(pass != confirm_pass){
        alert("password not matched")
    }else{

        localStorage.setItem('user_details', JSON.stringify(arr))
        alert('Registration successful')
        window.location.reload()
    }



}

//                  login part




let singnupData=JSON.parse(localStorage.getItem('user_details'))
// console.log(singnupData)

document.getElementById('loginfunc').addEventListener('click',loginData)

 function loginData(){
    // event.preventDefault()
    console.log('amit')
    let email= document.getElementById('login_email1').value;
    let pass= document.getElementById('login_pass1').value;

    let count=0
    if(singnupData==null){
        alert('no data available')
    }else{
    for(let i=0; i<singnupData.length; i++){
        if(singnupData[i].email==email && singnupData[i].pass==pass){
            count++
            break;
        }
    }
    if(count>0){
        alert('login successful')
        window.location.href='./index.html'
    }else{
        alert('Invalid credential')
        window.location.reload()
    }
}
}