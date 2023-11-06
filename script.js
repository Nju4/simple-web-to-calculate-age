function check2() {
            const ageInput = document.getElementById('age')
            const age = ageInput.value;
        
            if (age === '') {
                alert('Please enter a year')
            } else if (isNaN(age) || age <= 0 || age > new Date().getFullYear()) {
                alert('Please enter a valid year');
            } else {
                const now = new Date().getFullYear();
                const calculatedAge = now - age;
                const resultFinal = document.getElementById('resultAge');
                resultFinal.innerHTML = 'Your Age is ' + calculatedAge;
        }
}
