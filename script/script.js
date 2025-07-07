document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById('meuformulario');

  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('firstName').value;
    const sobrenome = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const genero = document.querySelector('input[name="gender"]:checked').value;

    const dados = {
      nome,
      sobrenome,
      email,
      genero
    };

    fetch('https://script.google.com/macros/s/AKfycbxalhen0nPfvc42uVuXV4dTlLn08sHaMU0K8YAl1MabPLYcCNLcg9hHYgqhz1reeVoQ/exec', {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert("Dados enviados com sucesso!");
        formulario.reset();
      } else {
        alert("Erro ao enviar os dados.");
      }
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro na conexão.");
    });
  });
});
