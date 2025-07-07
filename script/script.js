const addLoad = () =>{
  const button = document.querySelector('button');
  button.innerHTML = '<i class="bi bi-patch-check"></i>';
}

addLoad();

const handleSubmit = (Event) =>{
  Event.preventDefault();

const nome = document.querySelector('input[name=nome').value;
const sobrenome = document.querySelector('input[name=sobrenome').value;
const email = document.querySelector('input[name=email').value;
const gender = document.querySelector('input[name=gender').value;

  fetch('https://api.sheetmonkey.io/form/pQ2hcx3mNTcuD3FwjzDB2S',{
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({nome, sobrenome, email, gender}),
  });
}

document.getElementById('meuformulario').addEventListener('submit', handleSubmit);