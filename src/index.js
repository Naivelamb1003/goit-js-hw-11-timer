 
class CountdownTimer {
  constructor({selector,targetDate}){
    this.selector = selector;
    this.targetDate = targetDate; 
    this.ref = CountdownTimer.getControl();
    this.intervalId = null;
  }

   calculate(){
    const currentTime = Date.now();
    const deltaTime = timer.targetDate - currentTime;
    const daysAmount = CountdownTimer.days(deltaTime);
    const hoursAmount = CountdownTimer.hours(deltaTime);
    const minsAmount =CountdownTimer.mins(deltaTime);
    const secsAmount = CountdownTimer.secs(deltaTime);
    this.ref.daysElement.innerHTML = daysAmount;
    this.ref.hoursElement.innerHTML = hoursAmount;
    this.ref.minsElement.innerHTML = minsAmount;
    this.ref.secsElement.innerHTML = secsAmount;
  }

  start() {
    intervalId = setInterval(() => this.calculate(), 1000);
  }
  
  static getControl(){
    return {
      daysElement : document.querySelector('[data-value="days"]'),
      hoursElement : document.querySelector('[data-value="hours"]'),
      minsElement : document.querySelector('[data-value="mins"]'),
      secsElement : document.querySelector('[data-value="secs"]'),
    }
  }
/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
 static days(time) {
   return Math.floor(time / (1000 * 60 * 60 * 24))
  }; 

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
static hours(time) { 
   return Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))};

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
static mins(time) { 
   return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))};

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
static secs(time) { 
   return Math.floor((time % (1000 * 60)) / 1000)};
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),

});
 timer.start();
 