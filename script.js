let gols = 0;
let defesas = 0;

// Pega os elementos do HTML para poder mexer neles
const bola = document.getElementById('bola');
const goleiro = document.getElementById('goleiro');
const mensagem = document.getElementById('mensagem');
const golsPlacar = document.getElementById('gols');
const defesasPlacar = document.getElementById('defesas');

// Define as posições (em pixels) para onde a bola e o goleiro vão se mover
const posicoesX = {
    'esquerda': 140,
    'centro': 190,
    'direita': 240
};

function chutar(direcaoChute) {
    // Desabilita os botões para o jogador não clicar duas vezes seguidas
    document.querySelectorAll('button').forEach(b => b.disabled = true);

    // Goleiro escolhe um canto aleatório (0, 1 ou 2)
    const direcoes = ['esquerda', 'centro', 'direita'];
    const direcaoGoleiro = direcoes[Math.floor(Math.random() * 3)];

    // Move o goleiro e a bola usando as posições X do CSS
    goleiro.style.left = posicoesX[direcaoGoleiro] + 'px';
    bola.style.bottom = '240px'; // Sobe em direção ao gol
    bola.style.left = posicoesX[direcaoChute] + 'px';

    // Espera 0.5 segundos (tempo do chute) para checar o resultado
    setTimeout(() => {
        if (direcaoChute === direcaoGoleiro) {
            mensagem.innerText = "❌ O goleiro defendeu!";
            mensagem.style.color = "orange";
            defesas++;
            defesasPlacar.innerText = defesas;
        } else {
            mensagem.innerText = "⚽ GOOOOL!!";
            mensagem.style.color = "lightgreen";
            gols++;
            golsPlacar.innerText = gols;
        }

        // Aguarda mais 1.5 segundos e reinicia a jogada
        setTimeout(resetarJogo, 1500);
    }, 500);
}

function resetarJogo() {
    // Coloca a bola e o goleiro de volta no centro
    bola.style.bottom = '20px';
    bola.style.left = '190px';
    goleiro.style.left = '185px';
    mensagem.innerText = "";
    
    // Reativa os botões para o próximo chute
    document.querySelectorAll('button').forEach(b => b.disabled = false);
}