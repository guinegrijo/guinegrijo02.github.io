// Faz com que as divs fiquem com a classe border_red no foco dos inputs
const div_nome = window.document.getElementById('div_nome')
const input_nome = window.document.getElementById('input_nome')
const div_email = window.document.getElementById('div_email')
const input_email = window.document.getElementById('input_email')
const div_senha = window.document.getElementById('div_senha')
const input_password = window.document.getElementById('input_password')
const div_confSenha = window.document.getElementById('div_confSenha')
const input_conf_password = window.document.getElementById('input_conf_password')

function setAndRemoveBorder(i){
    campos[i].addEventListener('focus', () => {
        if (campos[i].style.borderColor !== 'red') { // Se não estiver com borda vermelha permite mudar
            campos[i].style.border = '2px solid #af2e2e'
        }
    });
    
    campos[i].addEventListener('blur', () => {
        if (campos[i].style.borderColor !== 'red') { // Se não estiver com borda vermelha permite mudar
            campos[i].style.border = '1px solid black'
        }
    })
}



//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Faz a div login aparecer na tela com efeito

const hidden = [...window.document.querySelectorAll('.hidden')]

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

hidden.forEach((el) => {
    myObserver.observe(el)
})

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Validações de formulario

const msg_validacao = window.document.getElementById('msg_validacao')
const form = window.document.getElementById('form')
const campos = window.document.querySelectorAll('.required') //inputs
const span   = window.document.querySelectorAll('.span-required') //span
const email = /^\w+([-+.']\w+)*@docente\.senai\.br$/ //validação para email pego pronto na internet

function animacao(){ //Mensagem de cadastro efetuado
    msg_validacao.classList.remove('anima_voltar')
    msg_validacao.classList.add('anima')
    msg_validacao.style = 'top: 25px;'
    setTimeout(()=>{
        msg_validacao.classList.remove('anima')
        msg_validacao.classList.add('anima_voltar')
        msg_validacao.style = 'top: -25px;'
        
    }, 10000)
}

form.addEventListener('submit', (event) =>{
    event.preventDefault()//toda vez que clicar em enviar para e faz um verificação
    let valid = true
    

    nameValidacao()
    emailValidacao()
    mainPasswordValidacao()
    comparePassword()

    for (let i = 0; i < campos.length; i++) {
            if (campos[i].style.borderColor === 'red') {
                valid = false
            }
    }

    
    if (valid) {
        animacao()
        for (let i = 0; i < campos.length; i++) {
            campos[i].value = ''
            campos[i].style.border = '1px solid black'
        }
    }

    
})



function setError(index){
    campos[index].style.border = '2px solid red'
    span[index].style.display = 'block'
}

function removeError(index){
    setAndRemoveBorder(index)
    campos[index].style.border = '2px solid #af2e2e'
    span[index].style.display = 'none'
}

function nameValidacao(){
    if(campos[0].value.length < 3){
        setError(0)
    }
    else {
        removeError(0)
    }
}

function emailValidacao(){
    if(email.test(campos[1].value)){
        removeError(1)
    }
    else{
        setError(1)
    }
}

function mainPasswordValidacao(){
    if(campos[2].value.length < 8){
        setError(2)
    }
    else{
        removeError(2)
        comparePassword()
    }
}

function comparePassword(){
    if(campos[2].value == campos[3].value && campos[3].value.length >=8){
        removeError(3)
    }
    else{
        setError(3)
    }
}


//desbugar o btn de criar conta
const btn_criarConta = window.document.querySelector('.btn_criarConta')

btn_criarConta.addEventListener('click', ()=>{
    btn_criarConta.style.backgroundColor = '#215299'
    btn_criarConta.style.color = 'white'
    btn_criarConta.style.border = '1px solid black'
})

btn_criarConta.addEventListener('mouseenter',()=>{
    btn_criarConta.style.backgroundColor = '#072755'
    btn_criarConta.style.color = 'white'
})

btn_criarConta.addEventListener('mouseleave',()=>{
    btn_criarConta.style.backgroundColor = '#215299'
    btn_criarConta.style.color = 'white'
})


