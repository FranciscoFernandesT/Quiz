const perguntas = [
    { pergunta: 'Quem pintou a Mona Lisa?', opcoes:
        ['Michelangelo', 'Airton Senna', 'Jailson Mendes', 'Leonardo Da Vinci'], correta: 3 },
    { pergunta: 'Em que linguagem isso foi feito?', opcoes:
        ['Portugues', 'JavaScript', 'HTML', 'Da Vinci'], correta: 1 },
    { pergunta: 'O que é a vida?', opcoes:
        ['Energia', 'Felicidade', 'Sofrimento', 'Todas'], correta: 3 },
    { pergunta: 'Qual o ano de criação do JS?', opcoes:
        ['1995', '2000', '1990', '500 a.C.'], correta: 0 },
    { pergunta: 'Qual problema tem o matemático cego?', opcoes:
        ['Divisão', 'Multiplicacao', 'Adicao', 'Subtração'], correta: 0 },
    { pergunta: 'Ratos são:', opcoes:
        ['Belisários', 'Quentes', 'Lindos', 'Asquerosos'], correta: 1 }
]








    const indiceAleatorio = Math.floor( Math.random() * perguntas.length )
    const questaoAtual = perguntas[indiceAleatorio];

    document.getElementById('pergunta').textContent = questaoAtual.pergunta;
    const botoes = document.querySelectorAll('.btn-opcao');
    const feedback = document.getElementById('feedback');

    botoes.forEach((btn, index) => {
        btn.textContent = questaoAtual.opcoes[index];

        btn.addEventListener('click', () => {
            if (index === questaoAtual.correta) {
                btn.classList.add('correto');
                feedback.textContent = "Certa Resposta!";
                feedback.style.color = "#4CAF50";
            } else {
                btn.classList.add('errado');
                feedback.textContent = "Errou!";
                feedback.style.color = "#F44336";
            }
        })
    } );