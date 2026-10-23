// ===== CALCULADORA =====
function calcular() {
  // Pega os valores digitados e transforma em número
  var quantidade = Number(document.getElementById("quantidade").value);
  var preco = Number(document.getElementById("preco").value);
  var resultado = document.getElementById("resultado");

  // Campo vazio vira 0, então essa checagem pega vazio, zero e negativo
  if (quantidade <= 0 || preco <= 0) {
    resultado.textContent = "Preencha os dois campos com valores válidos.";
    resultado.className = "mensagem erro";
    return; // para a função aqui
  }

  // Faz a conta
  var total = quantidade * preco;

  // Formata no padrão do real brasileiro (ex.: R$ 12.450,00)
  var totalFormatado = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  // Mostra o resultado na tela, sem recarregar a página
  resultado.textContent = "Valor total estimado: " + totalFormatado;
  resultado.className = "mensagem sucesso";
}

// ===== FORMULÁRIO DE CONTATO =====
function enviarContato(evento) {
  // Impede o formulário de recarregar a página
  evento.preventDefault();

  // Mostra a mensagem de agradecimento (nada é enviado para o servidor)
  var mensagem = document.getElementById("mensagem-contato");
  mensagem.textContent = "Obrigado! Vamos te avisar das novidades.";
  mensagem.className = "mensagem sucesso";

  // Limpa o campo de e-mail
  document.getElementById("email").value = "";
}
