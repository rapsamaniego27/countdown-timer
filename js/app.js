/* Notes:
   * Subtract the Future Date and Today Date to get Time DIfference in Values
   * Use Time Difference with the Millisecond values

   

*/


class Countdown{
 constructor({futureTime}){
  /* Arguments */
  this.futureTime = futureTime;
  
  /* Defaults */
  this.countdownInterval;

  /* Values in ms */
  /* Value of how many milliseconds in one day */
   this.ONE_DAY_MILLI = 24 * 60 * 60 * 1000;
   this.ONE_HOUR_MILLI = 60 * 60 * 1000;
   this.ONE_MIN_MILLI = 60 * 1000;
  
  /* Auto Run */
  this.startCountdown();
 }

 getRemainingTime(){
  const today = new Date().getTime();
  const timeDiff = this.futureTime - today;

  /* Day value that is left over */
  let days = timeDiff / this.ONE_DAY_MILLI;
  days = Math.floor(days);


  /* Gets the Modulo value that is left over from Time Difference by oneDay in ms
     Divided by the 1 hr in milliseconds
  */
  let hours = Math.floor((timeDiff %  this.ONE_DAY_MILLI) / this.ONE_HOUR_MILLI);
  let minutes = Math.floor((timeDiff % this.ONE_HOUR_MILLI) / this.ONE_MIN_MILLI);
  let seconds = Math.floor((timeDiff % this.ONE_MIN_MILLI) / 1000);
  
  //set values array;
  const values = [days, hours, minutes, seconds];
  
  this.displayTime(values);
  
  if(timeDiff < 0 ){
   clearInterval(this.countdownInterval);
   deadline.innerHTML = `<em>Sorry, this giveaway has expired</em>`;
  }
 }

 /* Displays in front end */
 displayTime(values){
  items.forEach((item, index) => {
   item.innerHTML = this.format(values[index]);
  });

 }

 format(item){
  return (`0${item}`).slice(-2);
 }

 /* Gives an interval of 1 second on getRemainingTime method */
 startCountdown(){
  this.countdownInterval = setInterval(this.getRemainingTime.bind(this), 1000);
 }

}

const countdown = new Countdown({
 futureTime: futureDate.getTime()
});

