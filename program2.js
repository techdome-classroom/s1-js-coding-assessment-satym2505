function romanToInt(s) {
    // Create a map of Roman symbols to their integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    
    // Iterate over the string
    for (let i = 0; i < s.length; i++) {
        // Get the value of the current Roman numeral
        const currentVal = romanMap[s[i]];
        // Get the value of the next Roman numeral (if exists)
        const nextVal = romanMap[s[i + 1]];

        // If the current value is less than the next value, subtract current value
        if (nextVal && currentVal < nextVal) {
            total -= currentVal;
        } else {
            // Otherwise, add the current value
            total += currentVal;
        }
    }
    
    return total;
}
