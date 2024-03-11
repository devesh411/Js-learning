## project 1 

```javascript

console.log("Devesh)
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id == 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'purple'){
      body.style.backgroundColor = e.target.id;
    }

  })
})





```

## project 2 solution

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height < 0 || height === '' || isNaN(height)) {
    results.innerHTML = `Please give valid height ${height}`;
  }else if (weight< 0 || weight === '' || isNaN(weight)) {
    results.innerHTML = `Please give valid weight ${weight}`;
  }else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    //show the result
    if(bmi < 18.6){
      results.innerHTML =  `<span> BMI is ${bmi} you are underweight</span>`
    }else if(bmi > 24.9){
      results.innerHTML =  `<span>BMI is ${bmi} you are overweight</span>`
    }else{
      results.innerHTML =  `<span>BMI is ${bmi} your bmi is in normal range</span>`
    }
    

  }
});

```

## project 3 

```javascript

const clock = document.getElementById('clock')
// document.querySelector('#clock')

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)


```