let totalGeral;
limpar(); 

//chamamos a função limpar que esta ali abaixo; 

function adicionar() {

  let nomeProduto;
  let quantidade;
  let valorUnitario

  
  nomeProduto = document.getElementById('produto').value.split('-')[0];
  
   valorUnitario = document.getElementById('produto').value.split('R$')[1];
  // aqui nesta chamada de variáveis, estamos chamando  função .split() que pega um valor do hmtl e separa ele com o parametro que pessamos dentro do parentese
  // lembrando que temos que tomar cuidado com os espaçamentos destes itens 
  
  quantidade = document.getElementById('quantidade').value;
  // quando colocamos este .value no final não  precisamos mais  nos outros elementos da váriavel  usada lida abaixo. 


// fazenda calculot do preço do item 
  let preco = quantidade * valorUnitario;


  // colocando os itens dentro do carrinho. 
  let carrinho = document.getElementById('lista-produtos');

  carrinho.innerHTML= carrinho.innerHTML + `
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>
  `;


// aqui colocamos a crase para pegar os valores e  tambem fizemos a concatenaçao para não ser subistituido o valor e no caso estarmos acrescentando algo ao  carrinho. 

    //atualizar o valor total

  totalGeral = totalGeral + preco;

  let campoTotal = document.getElementById('valor-total');

  campoTotal.textContent = `R$ ${totalGeral}`; 
  document.getElementById('quantidade').value = 0;
  //aqui server para limpar a quantidade  apos adicionar o item
 
}


    




function limpar() {
  totalGeral = 0;

document.getElementById('lista-produtos').innerHTML = '';

document.getElementById('valor-total').textContent = 'R$ 0'; 



}