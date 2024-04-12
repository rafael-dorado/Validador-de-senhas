function validarsenha(n) {
    let rgm1 = "Rafael_23822929"
    let rgm2 = "Guilherme_33468109"
    let senha = document.getElementById('senha').value
    let confirm = document.getElementById('csenha').value
    let regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z!@#$%;*(){}_+^&])(?!\1)){6,}$/;



    if (regex.test(senha)) {
      document.getElementById('escrever').innerHTML = 'Senha valida'
      console.log(senha, '= válida');
    } else if (senha == rgm1 && confirm == rgm2){
      document.getElementById('escrever').innerHTML = `<h2>Nome dos criadores:</h2>
      <p>Rafael Araujo - 23822929</p>
      <p>Guilherme Silva - 33468109</p>` 
    } else if (senha.length < 6 && confirm.length < 6) {
      document.getElementById('escrever').innerHTML = `<h2>Senha muito curta - Deve conter mais de 6 caracteres!</h2>`
    } else if (senha != confirm) {
      document.getElementById('escrever').innerHTML = `<h2>As senhas não conferem, tente novamente!</h2>`
    } else {
      document.getElementById('escrever').innerHTML = `<h1>SENHA INVALIDA</h1><br>
      <p>A senha deve conter:</p>
      <ul>
      <li>6 caracteres ou mais</li>
      <li>1 letra maiúscula</li>
      <li>1 letra minuscula</li>
      <li>1 número</li>
      <li>1 caractere especial</li>
      </ul>
      <h3>Sem sequências de números!</h3>`
      console.log(senha, '= inválida');
    }
      
}

