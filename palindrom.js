function sd(str) {
    if (str == str.split('').reverse().join('')){ 
        alert ('palindrom')
    } else{
        alert ('ne palindrom')
    }
}
    
sd('robor')
sd('assa')
sd('asasfasf')