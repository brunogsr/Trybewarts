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

/// Requisito 21 ///

const enviarBotao = document.querySelector('#submit-btn');

const mainHTML = document.querySelector('main');
const formHTML = document.getElementById('evaluation-form');
const userInfos = document.createElement('section');
userInfos.id = 'form-data';
const userNome = document.createElement('div');
userInfos.appendChild(userNome);
const userEmail = document.createElement('div');
userInfos.appendChild(userEmail);
const userCasa = document.createElement('div');
userInfos.appendChild(userCasa);
const userFamilia = document.createElement('div');
userInfos.appendChild(userFamilia);
const m1 = document.getElementById('cHoFs');
const m2 = document.getElementById('cJest');
const m3 = document.getElementById('cPromises');
const m4 = document.getElementById('cReact');
const m5 = document.getElementById('cSQL');
const m6 = document.getElementById('cPython');
const materiasList = [m1, m2, m3, m4, m5, m6];
const userMaterias = document.createElement('div');
userInfos.appendChild(userMaterias);
const userAvaliacao = document.createElement('div');
userInfos.appendChild(userAvaliacao);
const userComentario = document.createElement('div');
userInfos.appendChild(userComentario);
mainHTML.appendChild(userInfos);
userInfos.style.display = 'none';

const infos = () => {
  const priNome = document.getElementById('input-name').value;
  const sobreNome = document.getElementById('input-lastname').value;
  userNome.innerText = `Nome: ${priNome} ${sobreNome}`;
  userEmail.innerText = `Email: ${document.getElementById('input-email').value}`;
  userCasa.innerText = `Casa: ${document.getElementById('house').value}`;
  const materiasSelec = [];
  for (let index = 0; index < materiasList.length; index += 1) {
    if (materiasList[index].checked) {
      materiasSelec.push(materiasList[index].value);
    }
  }
  userMaterias.innerText = `Matérias: ${materiasSelec.join(', ')}`;
  userComentario.innerText = `Observações: ${document.querySelector('textarea').value}`;
};

const infos2 = () => {
  if (document.getElementById('Frontend').checked) {
    userFamilia.innerText = `Família: ${document.getElementById('Frontend').value}`;
  } if (document.getElementById('Backend').checked) {
    userFamilia.innerText = `Família: ${document.getElementById('Backend').value}`;
  } if (document.getElementById('FullStack').checked) {
    userFamilia.innerText = `Família: ${document.getElementById('FullStack').value}`;
  }
};

const v1 = document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const v6 = document.getElementById('v6');
const v7 = document.getElementById('v7');
const v8 = document.getElementById('v8');
const v9 = document.getElementById('v9');
const v10 = document.getElementById('v10');
const vList = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10];

const infos3 = () => {
  for (let index = 0; index < vList.length; index += 1) {
    if (vList[index].checked) {
      userAvaliacao.innerText = `Avaliação: ${vList[index].value}`;
    }
  }
};

const avaliacao = document.getElementById('label-rate');
console.log(avaliacao);

const changeScream = () => {
  userInfos.style.display = 'block';
  formHTML.style.visibility = 'hidden';
};

formHTML.addEventListener('change', () => {
  infos();
  infos2();
  infos3();
});

enviarBotao.addEventListener('click', changeScream);
