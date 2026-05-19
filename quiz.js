const perguntas = [
{ pergunta: 'Quem pintou a Mona Lisa?', opcoes:
['Michelangelo', 'Airton Senna', 'Jailson Mendes', 'Leonardo Da Vinci'], correta: 4},
{ pergunta: 'Em que linguagem isso foi feito?', opcoes:
['Portugues', 'JavaScript', 'HTML', 'Da Vinci'], correta: 2 },
{ pergunta: 'O que é a vida?', opcoes:
['Energia', 'Felicidade', 'Sofrimento', 'Todas'], correta: 4 },
{ pergunta: 'Quantas vezes você errou?', opcoes:
['1', '2', 'Sim', '3'], correta: 3 },
{ pergunta: 'Matemático cego tem problema?', opcoes:
['Divisão', 'Multiplicacao', 'Adicao', 'Subtração'], correta: 1 }
]

const idx = Math.floor(
    Math.random() * perguntas.length
);
const q = perguntas[idx];
tituloEl.textContent = q.pergunta;

BigInt.addEventListener ('click', ()
=> { if (indice === q.correta) {
    feedbackEl.textContent = 'Correto!'; } else {
        feedbackEl.textContent = 'Errado!';}} );