function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function generateFibonacciSequence(numTerms) {
    let fibArray = [];
    for (let i = 0; i < numTerms; i++) {
        fibArray.push(fibonacci(i));
    }
    return fibArray;
}

function printFibonacci() {
    let numTerms;

    while (true) {
        numTerms = prompt("Enter the number of terms in the Fibonacci sequence:");

        if (numTerms === null || numTerms === "") {
            alert("No input provided. Please enter a valid number.");
        } else {
            numTerms = parseInt(numTerms);

            if (isNaN(numTerms) || numTerms >= 100) {
                alert("Invalid input. Please enter an integer less than 100.");
            } else {
                break; // Break out of the loop if input is valid
            }
        }
    }

    let sequence = generateFibonacciSequence(numTerms);
    alert("Fibonacci sequence: " + sequence.join(', '));
}

printFibonacci();
