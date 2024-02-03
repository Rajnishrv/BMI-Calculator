const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a valid Height ${height}`
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give a valid weight ${weight}`
  }
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    results.innerHTML = `<span>BMI Result is: ${bmi}</span>`

    const fresult = document.querySelector('#fresult')
  
    if(bmi < 18.6){
      fresult.innerHTML = "You are under weight";
      fresult.style.backgroundColor = "yellow";
    }else if(bmi > 18.6 && bmi <24.9){
      fresult.innerHTML = "You are Normal";
      fresult.style.backgroundColor = "green"
    }else{
      fresult.innerHTML = `You are Overweight`;
      fresult.style.backgroundColor = "red"
    }
  }
});