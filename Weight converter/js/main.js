document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function (e) {
  document.getElementById('output').style.visibility = 'visible';
  let lbs = e.target.value;
  document.getElementById('gramsOutput').innerHTML = (lbs / 0.0022046).toFixed(2);
  document.getElementById('kgOutput').innerHTML = (lbs / 2.2046).toFixed(2);
  document.getElementById('ozOutput').innerHTML = (lbs * 16).toFixed(2);
});

document.getElementById('output2').style.visibility = 'hidden';
document.getElementById('kgInput').addEventListener('input', function (e) {
  document.getElementById('output2').style.visibility = 'visible';
  let kg = e.target.value;
  document.getElementById('gramsOutput2').innerHTML = (kg * 1000).toFixed(2);
  document.getElementById('lbsOutput').innerHTML = (kg / 0.45359237).toFixed(2);
  document.getElementById('ozOutput2').innerHTML = (kg / 0.02834952).toFixed(2);
});

document.getElementById('output3').style.visibility = 'hidden';
document.getElementById('ozInput').addEventListener('input', function (e) {
  document.getElementById('output3').style.visibility = 'visible';
  let oz = e.target.value;
  document.getElementById('gramsOutput3').innerHTML = (oz * 0.035274).toFixed(2);
  document.getElementById('lbsOutput2').innerHTML = (oz / 16).toFixed(2);
  document.getElementById('kgOutput2').innerHTML = (oz * 0.02834952).toFixed(2);
});
