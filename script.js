const divImagens = document.querySelector('article.carousel .carousel-images');
const botaoAnterior = document.querySelector('article.carousel figure.action button.previous');
const botaoProximo = document.querySelector('article.carousel figure.action button.next');

const urlImagens = [
  'https://placehold.co/100x100',
  'https://placehold.co/200x200',
  'https://placehold.co/300x300',
  'https://placehold.co/400x400',
  'https://placehold.co/500x500',
  'https://placehold.co/600x600',
  'https://placehold.co/700x700',
  'https://placehold.co/800x800',
  'https://placehold.co/900x900',
  'https://placehold.co/1000x1000',
];

let idAtual = 0;

function criarImagem(url, descricao = 'Alguma coisa') {
  const img = document.createElement('img');
  img.src = url;
  img.alt = descricao;

  return img;
}

for (const urlImagem of urlImagens) {
  divImagens.appendChild(criarImagem(urlImagem));
}

function atualizarCarrossel() {
  divImagens.style.transform = `translateX(-${idAtual * 100}%)`;
}

function atualizarIdAtual(novoId) {
  if (novoId >= urlImagens.length) {
    idAtual = 0;
  } else if (novoId < 0) {
    idAtual = urlImagens.length - 1;
  } else {
    idAtual = novoId;
  }

  atualizarCarrossel();
}

function imagemAnterior() {
  atualizarIdAtual(idAtual - 1);
}

function imagemProximo() {
  atualizarIdAtual(idAtual + 1);
}

botaoAnterior.addEventListener('click', imagemAnterior);
botaoProximo.addEventListener('click', imagemProximo);
