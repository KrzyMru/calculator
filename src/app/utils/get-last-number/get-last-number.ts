const getLastNumber = (expression: string) => {
    const operators = ['+', '-', 'x', '/'];

    let lastOperatorIndex = -1;
    for (let i = expression.length - 1; i >= 0; i--) {
        if (operators.includes(expression[i])) {
            lastOperatorIndex = i;
            break;
        }
    }
    
    return expression.slice(lastOperatorIndex + 1);
}

export default getLastNumber;