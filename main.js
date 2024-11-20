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

