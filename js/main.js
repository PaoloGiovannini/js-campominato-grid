const containerDom = document.querySelector('.container');
const bottoneDom = document.querySelector('#bottone');
const mainDom = document.querySelector('#main');
const footerDom = document.querySelector('#footer');

bottoneDom.addEventListener('click', function() {
    mainDom.classList.remove('d-none');
    footerDom.classList.remove('d-none');
}
);
for (let i = 1; i <= 100; i++ ) {
    const quadratino = document.createElement('div');
    quadratino.classList.add('square');
    containerDom.append(quadratino);
    quadratino.append(i);
    quadratino.addEventListener('click', function() {
        this.classList.toggle('cliccato');
        console.log(i);
    }
    );
    
}

