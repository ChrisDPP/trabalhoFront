// Esta função controla a animação de digitação de texto na legenda.
function typeWriter(legendaElement, texto, callback) {
    // Define a velocidade de digitação em milissegundos (quanto menor, mais rápido).
    const velocidadeDigitacao = 10;
    
    // Inicializa um contador para rastrear a posição atual no texto.
    let i = 0;

    // Esta função aninhada é responsável por adicionar caracteres à legenda.
    function digitar() {
        // Verifica se a posição atual (i) é menor que o comprimento do texto.
        if (i < texto.length) {
            // Adiciona o próximo caractere do texto à legenda.
            legendaElement.textContent += texto.charAt(i);
            i++;
            // Agendamento de chamada recursiva após um intervalo de tempo.
            setTimeout(digitar, velocidadeDigitacao);
        } else {
            // Quando todo o texto foi digitado, verifica se há uma função de retorno de chamada e a executa.
            if (typeof callback === 'function') {
                callback();
            }
        }
    }

    // Inicia a animação de digitação.
    digitar();
}

// Esta variável rastreia se uma animação de legenda está em andamento.
let animacaoEmAndamento = false;

// Esta função mostra a legenda com efeito de digitação.
function mostrarLegenda(legendaId) {
    // Verifica se já existe uma animação em andamento; se sim, sai da função.
    if (animacaoEmAndamento) {
        return;
    }

    // Define a animação como em andamento.
    animacaoEmAndamento = true;

    // Obtém o elemento da legenda com base no ID passado como argumento.
    const legendaElement = document.getElementById(legendaId);

    // Obtém o texto completo da legenda do atributo "data-texto".
    const textoCompleto = legendaElement.getAttribute("data-texto");

    // Exibe a legenda definindo seu estilo como "flex" e limpando seu conteúdo.
    legendaElement.style.display = "flex";
    legendaElement.textContent = "";

    // Inicia a animação de digitação chamando a função typeWriter.
    // Quando a animação é concluída, a variável animacaoEmAndamento é marcada como false.
    typeWriter(legendaElement, textoCompleto, () => {
        animacaoEmAndamento = false;
    });
}
  


