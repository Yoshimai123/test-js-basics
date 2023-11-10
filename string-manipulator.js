function stringManpipulate(str){
    const strLowerCase = str.toLowerCase();
    const strNoSpaces = str.trim();
    const strLength = str.replace(/\s*/g, '').length;
    const strContainsJS = strLowerCase.includes("js") || strLowerCase.includes("javascript");
    let invertedString = "";
    for(let i = str.length - 1; i>=0; i--) {
        let letter = str[i];
        invertedString += letter;
    }
    const strFinal = `
    original: ${str}
    lowercase: ${strLowerCase}
    no spaces: ${strNoSpaces}
    length: ${strLength}
    contains JS: ${strContainsJS}
    inverted: ${invertedString}
    `
    console.log(strFinal);
    return strFinal;
}

stringManpipulate(" Hello World! ")