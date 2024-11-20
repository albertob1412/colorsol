const solanaWeb3 = require('@solana/web3.js');
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));
const tokenAddress = new solanaWeb3.PublicKey('Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump');

function changeBackgroundColor() {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

connection.onLogs(tokenAddress, (logs, context) => {
  if (logs.err === null) {
    changeBackgroundColor();
  }
});
