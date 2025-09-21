const personagem = document.querySelector('.personagem');
const pipe = document.querySelector('.pipe');

// Função responsável por realizar o pulo
const jump = () => {
    personagem.classList.add('jump');

    setTimeout(() => {
         personagem.classList.remove('jump'); // Apaga a função de pulo
    }, 500);
}

// loop do jogo para verificar se perdemos ou não
const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px','');

    if(pipePosition <= 120 && personagemPosition < 80 && pipePosition > 0) {
         pipe.style.animation = 'none';
         pipe.style.left = `${pipePosition}px`;

         personagem.style.animation = 'none';
         personagem.style.bottom = `${personagemPosition}px`;

         personagem.src = 'morte.png';

         clearInterval(loop);
    }
}, 10);


document.addEventListener('keydown', jump);