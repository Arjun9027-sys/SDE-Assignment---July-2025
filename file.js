// Assuming the processData function is defined as in the previous response
// If you're running this as a Node.js module, you'd typically import it like this:
// const { processData } = require('./yourModuleFileName.js');

function processData(data) {
    let totalCodes = data.length;
    let validCodesCount = 0;
    let invalidCodesCount = 0;
    let normalizedValidCodes = [];

    for (let i = 0; i < totalCodes; i++) {
        let code = data[i];
        let isValid = true;

        if (code.length !== 7) {
            isValid = false;
        } else {
            for (let j = 0; j < 3; j++) {
                let char = code[j];
                // Corrected the typo 'b' to 'z' for uppercase and lowercase alphabet check
                if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                for (let k = 3; k < 7; k++) {
                    let char = code[k];
                    if (!(char >= '0' && char <= '9')) {
                        isValid = false;
                        break;
                    }
                }
            }
        }

        if (isValid) {
            validCodesCount++;
            normalizedValidCodes.push(code.toUpperCase());
        } else {
            invalidCodesCount++;
        }
    }

    normalizedValidCodes.sort();

    return {
        totalCodes: totalCodes,
        validCodes: validCodesCount,
        invalidCodes: invalidCodesCount,
        normalizedValidCodes: normalizedValidCodes,
    };
}


// --- How to use it and console the output ---

const productCodes = ["abc1234", "XYZ0001", "123ABCD", "A1B2C3D", "lmn9876", "DEF5678"];

const result = processData(productCodes);

console.log(result);