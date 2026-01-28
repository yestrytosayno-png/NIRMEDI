// Small scripts for footer year and simple interactions
document.addEventListener('DOMContentLoaded', function(){
  const y = new Date().getFullYear();
  const el1 = document.getElementById('year');
  const el2 = document.getElementById('year2');
  const el3 = document.getElementById('year3');
  if(el1) el1.textContent = y;
  if(el2) el2.textContent = y;
  if(el3) el3.textContent = y;
});