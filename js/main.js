//Escolha do serviço

let servicoEscolhido = null;
let dataEscolhida = null;
let horarioEscolhido = null;

function selecionarServico(servico,botao) {
    servicoEscolhido = servico;
    botao.classList.toggle('selecionado');
}

function selecionarData(data, botao) {
  dataEscolhida = data
  botao.classList.toggle('selecionado');
}

function selecionarHorario(horario, botao) {
  horarioEscolhido = horario
  botao.classList.toggle('selecionado');
}

//Função para voltar para o antigo passo
function voltarPasso(voltaPasso) {
  document.getElementById(`passo${voltaPasso + 1}`).style.display = "none";
  document.getElementById(`passo${voltaPasso}`).style.display = "flex"
}

//Função para avançar para o proximo passo
function avancarPasso(proximoPasso) {
    document.getElementById(`passo${proximoPasso - 1}`).style.display = "none";
    document.getElementById(`passo${proximoPasso}`).style.display = "flex"

    if (proximoPasso === 3) {
        preencherOpcoesHorario();
      }
}

// Função para preencher as opções de data a partir do dia atual até 30 dias para frente
function preencherOpcoesData() {
    const dataSelect = document.getElementById("data");
    const hoje = new Date();

    for (let i = 0; i < 30; i++) {
      const data = new Date(hoje);
      data.setDate(data.getDate() + i);
      const button = document.createElement("button");
      button.value = data.toISOString().slice(0, 10); // Formato YYYY-MM-DD
      button.classList = "botao"
      button.textContent = `${data.getDate()}\n${obterNomeDia(data)}`;
      
      button.addEventListener('click', function() {
        const valorBotao = this.value;
        // Chame a função que deseja executar passando o valor do botão como parâmetro, se necessário.
        selecionarData(valorBotao,this);
      });

      dataSelect.appendChild(button);
    }
  }

// Função para obter o nome do dia da semana
function obterNomeDia(data) {
    const diasSemana = ["Domingo", "Segunda feira", "Terça feira", "Quarta feira", "Quinta feira", "Sexta feira", "Sábado"];
    return diasSemana[data.getDay()];
  }

// Função para preencher as opções de horário
function preencherOpcoesHorario() {
    const horarioSelect = document.getElementById("horario");
    horarioSelect.innerHTML = ""; // Limpa as opções existentes

    // Define a hora inicial e final para o agendamento (por exemplo, das 8:00 às 18:00)
    const horaInicial = 8;
    const horaFinal = 18;

    for (let hora = horaInicial; hora <= horaFinal; hora++) {
      for (let minuto = 0; minuto < 60; minuto += 60) {
        const button = document.createElement("button");
        button.value = `${hora.toString().padStart(2, "0")}:${minuto.toString().padStart(2, "0")}`;
        button.classList = "botao"
        button.textContent = `${hora.toString().padStart(2, "0")}:${minuto.toString().padStart(2, "0")}`;

        button.addEventListener('click', function() {
          const valorBotao = this.value;
          // Chame a função que deseja executar passando o valor do botão como parâmetro, se necessário.
          selecionarHorario(valorBotao, this);
        });

        horarioSelect.appendChild(button);
      }
    }
}

  // Chama a função para preencher as opções de data assim que a página for carregada
  window.onload = function() {
    preencherOpcoesData();
};

// Função para confirmar o agendamento (pode ser ajustada para enviar dados para o servidor)
function confirmarAgendamento() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    // Aqui você pode fazer ações com os dados, como enviar para um servidor ou armazená-los localmente

    alert("Agendamento confirmado! Detalhes:\n\n" +
      `Serviço: ${servicoEscolhido}\n` +
      `Data: ${dataEscolhida} (${obterNomeDia(new Date(dataEscolhida))})\n` +
      `Horário: ${horarioEscolhido}\n` +
      `Nome: ${nome}\n` +
      `Telefone: ${telefone}`);
  }
