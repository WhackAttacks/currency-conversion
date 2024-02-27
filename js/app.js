fetch('https://openexchangerates.org/api/latest.json?app_id=0b5bf3faf88f4b179944cee93474abd6')
  .then(res => res.json())
  .then(data => console.log(data))