const solanaWeb3 = require('@solana/web3.js');
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));

// Dirección del token que quieres monitorear
const tokenAddress = new solanaWeb3.PublicKey('Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump');

// Función que cambia el color del fondo
function changeBackgroundColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
  console.log("Color cambiado a:", randomColor);
}

// Escucha eventos en la cuenta del token
async function monitorTransactions() {
  const signatures = await connection.getConfirmedSignaturesForAddress2(tokenAddress, { limit: 1 });
  console.log("Última transacción detectada:", signatures);

  if (signatures.length > 0) {
    changeBackgroundColor();
  }
}

