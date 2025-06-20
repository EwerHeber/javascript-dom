function calculateTotal() 
{

    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const numberPayments = parseInt(document.getElementById("numberPayments").value);

    const resultElement = document.getElementById("result");
    
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(numberPayments)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = numberPayments * 12;

    let monthlyPayment;

    if (monthlyRate === 0) {
    monthlyPayment = loanAmount / numberOfPayments;
    } else {
    monthlyPayment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / 
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    resultElement.textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}