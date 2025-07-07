const addLoading = () =>{
  const button = document.getElementById('but');
  button.innerHTML = 'Cadastrado com sucesso ✅';
}


const removeLoading = () =>{
  const button = document.getElementById('but');
  button.innerHTML = 'Cadastrar novo email';
}



const handleSubmit = (Event) =>{
  Event.preventDefault();
addLoading();

const nome = document.querySelector('input[name=nome]').value;
const sobrenome = document.querySelector('input[name=sobrenome]').value;
const email = document.querySelector('input[name=email]').value;
const gender = document.querySelector('input[name=gender]').value;

  fetch('https://api.sheetmonkey.io/form/pQ2hcx3mNTcuD3FwjzDB2S',{
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({nome, sobrenome, email, gender}),
  }).then(() =>{removeLoading()
     document.getElementById('meuformulario').reset();
  });

 
}

document.getElementById('meuformulario').addEventListener('submit', handleSubmit);