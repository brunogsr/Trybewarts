const botao = document.getElementById('buttonEntrar');
const login = document.getElementById('login');
const senha = document.getElementById('senha');

botao.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
});

const agreementCheckbox = document.querySelector('#agreement');
const enableButtonEnviar = () => {
  const buttonEnviar = document.querySelector('#submit-btn');
  buttonEnviar.disabled = !buttonEnviar.disabled;
};

agreementCheckbox.addEventListener('click', enableButtonEnviar);

/// Contador ///

const comentario = document.getElementById('textarea');
const contador500 = document.getElementById('counter');
contador500.innerText = '500/500';
contador500.style.alignSelf = 'flex-end';
contador500.style.color = 'grey';
const maxCaracteres = 500;

const textoContador = () => {
  const caracteres = comentario.value.length;
  console.log(caracteres);
  const caracteresRestantes = maxCaracteres - caracteres;
  contador500.innerText = `${caracteresRestantes}/${maxCaracteres}`;
};

comentario.addEventListener('input', textoContador);
