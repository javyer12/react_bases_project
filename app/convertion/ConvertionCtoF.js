export function ConvertCaF(temp){
    let fahrenheit = (temp * 9/5) + 32;
    return fahrenheit;
}

export function ConvertFaC(temp){
    let celsius = (temp - 32) * 5/9;
    return celsius;
}