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

  // Llama a la función nuevamente después de un tiempo aleatorio
  const randomDelay = Math.random() * 5000; // Entre 0 y 5000 ms (0 y 5 segundos)
  console.log(`Próximo cambio en ${Math.round(randomDelay / 1000)} segundos.`);
  setTimeout(changeBackgroundColor, randomDelay);
}

// Inicia el ciclo
changeBackgroundColor();

