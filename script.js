function firstWord(s) {
    // Trim leading spaces to handle cases where the first word follows spaces
    s = s.trim();
    
    // Find the index of the first space
    var spaceIndex = s.indexOf(' ');
    
    // If there is no space, return the entire string
    if (spaceIndex === -1) {
        return s;
    }
    
    // Return the substring from the start to the first space
    return s.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
