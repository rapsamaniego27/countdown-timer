# **Countdown Timer**

A boilerplate Date Countdown Timer for Promos, Giveaways or Expected events.

## Declaration
Declare a destination Date for your timer.

By YEAR, MONTH, DATE, HOURS, MINUTES, SECONDS, MILLISECONDS

```Javascript
let futureDate = new Date(2020, 7, 15, 15, -11, 0);
```

This will be followed by Instantiating the Countdown class.
Make sure the pass the argument `futureTime` in milliseconds.

```Javascript
const countdown = new Countdown({
 futureTime: futureDate.getTime()
});

```

## Notes
Very important to have these default Millisecond values set up

### **Time in Milliseconds:**

   * 1s = 1000ms
   * 1m = 60s
   * 1hr = 60min
   * 1d = 24hr

### **Default Millisecond Values**
These are values in milliseconds in One Day, One, Hour and One Minute.
``` Javascript

   this.ONE_DAY_MILLI = 24 * 60 * 60 * 1000;
   this.ONE_HOUR_MILLI = 60 * 60 * 1000;
   this.ONE_MIN_MILLI = 60 * 1000;
```

### Auto Run
Upon instantiating, this function runs automatically in the constructor method.

It uses the `setInterval` function to run.
```Javascript
/* Auto Run */
  this.startCountdown();

```

### Calculation
This method does all the calculation for getting the estimated number of Hours, Days, Minutes, etc.

```Javascript
getRemainingTime(){
 /* Code here */
}
```
It gets Today's date and gets the Time difference between Today and Future Date passed
```Javascript
  const today = new Date().getTime();
  const timeDiff = this.futureTime - today;
```

`getRemainingTime` returns these values

```Javascript
  const values = [days, hours, minutes, seconds];
```
#### Gets Date
Day value that is left over
```Javascript
let days = timeDiff / this.ONE_DAY_MILLI;
  days = Math.floor(days);
```


#### Gets Time
Gets the Modulo value that is left over from Time Difference by oneDay in ms.
     Divided by the 1 hr in milliseconds
```Javascript
  let hours = Math.floor((timeDiff %  this.ONE_DAY_MILLI) / this.ONE_HOUR_MILLI);

  let minutes = Math.floor((timeDiff % this.ONE_HOUR_MILLI) / this.ONE_MIN_MILLI);

  let seconds = Math.floor((timeDiff % this.ONE_MIN_MILLI) / 1000);
```

### Creating UI in front end
`displayTime` method loops over the time values passed and rendering it in Front End.

```Javascript 

 displayTime(values){
  /* Looping here */

 }
```

### Formatting
Format method formats the values by prepending 0 to single digits.

```Javascript
 format(item){
  return (`0${item}`).slice(-2);
 }
```

### Interval
We re-declare the countdownInterval as declared from our **constructor** above.

We passed in `this.getRemainingTime` to be our main action every 1 second. 

Make sure to append the `bind` method as shown below. Because it works wonders for `setIntervals` inside a Class.

Without the `bind` method, it will only run the Interval once.

```Javascript
 startCountdown(){
  this.countdownInterval = setInterval(this.getRemainingTime.bind(this), 1000);
 }

```