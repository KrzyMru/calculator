const calculateEquation = (equation: string) => {
    try {
        const parsedEquation = equation.replaceAll('x', '*');
        const result = eval(parsedEquation) as number;
        return result;
    } catch(e: unknown) {
        return 0;
    }
}

export default calculateEquation;