function checkAtbilde() {
    const atbilde = {
      q1: 'c',
      q2: 'a',
      q3: 'd',
      q4: 'a',
      q5: 'b'
    };

    let score = 0;
    for (let q in atbilde) {
      const izvēle = document.querySelector(`input[name="${q}"]:checked`);
      if (izvēle && izvēle.value === atbilde[q]) {
        score++;
      }
    }

    document.getElementById('result').textContent = `You got ${score} out of 5 correct!`;

  }
