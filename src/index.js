const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const bodyTheme = document.querySelector("body");

  const controls = {
     START: document.querySelector('[data-action="start"]'),
     STOP: document.querySelector('[data-action="stop"]'),
  };
  controls.START.addEventListener('click', startChange);
  controls.STOP.addEventListener('click', stopChange);
  
    //Функция которая достает цвет из массива
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

function getColor (){
  let i = randomIntegerFromInterval(0, colors.length - 1);
  let Color = colors[i];
  bodyTheme.style.background = Color;
}
  // Запускает таймер
  
  let timer = null;
  function startChange (){
     timer = setInterval( getColor, 100);
     controls.START.disabled=true;
} ;


  //Останавливает таймер
  
  function stopChange (){ 
    clearInterval(timer)
    controls.START.disabled=false;
  };
  
  