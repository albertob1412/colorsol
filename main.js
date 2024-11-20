// Configuración de Solana
const solanaWeb3 = require('@solana/web3.js');
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));

// Dirección del token
const tokenAddress = new solanaWeb3.PublicKey('Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump');

// Función para cambiar el color de fondo
function changeBackgroundColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
  console.log("Color cambiado a:", randomColor);
}

// Monitoreo de transacciones
connection.onLogs(tokenAddress, (logs, context) => {
  console.log("Evento detectado:", logs);

  if (logs.err === null) {
    console.log("Transacción exitosa. Cambiando el color...");
    changeBackgroundColor();
  } else {
    console.log("Error en la transacción:", logs.err);
  }
});
