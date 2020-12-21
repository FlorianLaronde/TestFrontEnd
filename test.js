let number = 1;
for(number=1; number<=100;number++){
    if {
        number % 3 = 0;
        alert('Fizz');

    } else if {
        number % 5 = 0;
        alert('Buzz');
    } else if {
        number % 3 = 0 || number % 5 = 0;
        alert('FizzBuzz');
    } else {
        alert(number);
    }
}