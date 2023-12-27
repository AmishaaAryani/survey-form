document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      console.log('Name:', name);
      console.log('Age:', age)
    

      // Optionally, you can display a submit  message or clear the form
      alert('Survey_form submitted successfully!');
      form.reset();
    });
  });
