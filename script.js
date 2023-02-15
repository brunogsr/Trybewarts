const botao = document.getElementById('buttonEntrar')
const login = document.getElementById('login') 
const senha = document.getElementById('senha') 
botao.addEventListener('click', function(){
    if (login.value === 'tryber@teste.com' && senha.value === '123456'){
        return alert('Olá, Tryber!')
        }else{
        return alert('Email ou senha inválidos.')
        }
    }
)


