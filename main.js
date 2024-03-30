


window.addEventListener('click', ()=>{
    let f_name = document.querySelector('#f_name')
    let l_name = document.querySelector('#l_name')
    let tel = document.querySelector('#tel')
    check_pwd()
    check_length(f_name, 8)
    check_length(l_name, 8)
    // check_tel()
    check_tel(tel)

})
window.addEventListener('keyup', ()=>{
    let f_name = document.querySelector('#f_name')
    let l_name = document.querySelector('#l_name')
    let tel = document.querySelector('#tel')
    check_pwd()
    check_length(f_name, 8)
    check_length(l_name, 8)
    check_tel(tel)
})

function check_pwd(){
    let pwd1 = document.querySelector('#pwd1')
    let pwd2 = document.querySelector('#pwd2')
    let warning = document.querySelector('fieldset > span')
    
    pwd1.style.outline = ".2vw solid red"
    pwd2.style.outline = ".2vw solid red"
    if (pwd1.value.length <8){
        warning.textContent = "*password too short"
        pwd1.style.outline = ".2vw solid red"
        pwd2.style.outline = ".2vw solid red"
    }
    else if (pwd1.value != pwd2.value){
        warning.textContent = "*passwords do not match"
        pwd1.style.backgroundColor = "white"
        pwd2.style.backgroundColor = "white"
    }
    else{
        warning.textContent = ""
        pwd1.style.backgroundColor = "lightgreen"
        pwd2.style.backgroundColor = "lightgreen"
        pwd1.style.outline = "none"
        pwd2.style.outline = "none"
    }
}

function check_length(inp, length){
    if (inp.value.length < length){
        inp.style.outline = `.2vw solid red`
        inp.style.backgroundColor = "white"
    }
    else{
        inp.style.backgroundColor = "lightgreen"
        inp.style.outline = "none"
    }

}
function check_tel(tel){
    reg = /^\+212[5-7]\d{8}$/
    if(reg.test(tel.value)){
        tel.style.backgroundColor = "lightgreen"
        tel.style.outline = "none"
    }
    else{
        tel.style.outline = `.2vw solid red`
        tel.style.backgroundColor = "white"
    }
}
