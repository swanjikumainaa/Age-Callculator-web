document.getElementById('ageForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
  
    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day);
  
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (day < 1 || day > 31 || month < 1 || month > 12 || year > currentDate.getFullYear()) {
      alert('Invalid date.');
      return;
    }
  
    if (currentDate < birthDate) {
      alert('Date cannot be in the future.');
      return;
    }
  
    const ageInMilliseconds = currentDate - birthDate;
    const ageDate = new Date(ageInMilliseconds);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
  
    const resultElement = document.getElementById('result');
    resultElement.innerText = `Your age is ${years} years, ${months} months, and ${days} days.`;
  
    // Animate the result
    resultElement.classList.add('animate');
  });
  