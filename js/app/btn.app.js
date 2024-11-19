let btn = SensorManager.CreateDevice('100')[0]
  .Configure({ debounce: 20, holdTime: 1.5 })  
  .Start();

btn.on('press', () => print('press'));
btn.on('click',  () => { print('click'); });
btn.on('hold',  () => { print('hold'); });