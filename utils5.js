/**
   * Replace all occurences of the given char by another one
   * @param {string} search the char to replace
   * @param {string} substitute the char used for the replacement
   * @param {string} text the text to update
   * @returns {string} the updated text
   */
function replaceAll(search, substitute, text) {

    if (typeof search !== "string"
        || typeof substitute !== "string"
        || typeof text !== "string") {
        return;
    }

    while (text.includes(search)) {
        text = text.replace(search, substitute);
    }
    return text;
}

function replaceAllMoins(search, substitute, text) {

    if (typeof search !== "string"
        || typeof substitute !== "string"
        || typeof text !== "string") {
        return;
    }

    while (text.includes(search)) {
        if (getNextLetter(search) === "-") return;

        text = text.replace(search, substitute);
    }
    return text;
}



/**
 * Removes the last character of the given string
 * @param {string} string
 * @returns {string} the sliced string
 */
function removeLastLetter(string) {

    if (typeof string !== "string") return;
    else {
        return string.substring(0, string.length - 1);
    }
}




/**
 * Get the last letter of a giving string
 * @param {string} string we want to have the last letter
 * @returns {string} the last letter of this tring
 */
function getLastLetter(string) {
    if (typeof string !== "string") {
        return;
    }

    var lastLetter = string[string.length - 1];
    return lastLetter;
}


/**
 * Get the next letter of a giving string
 * @param {string} string we want to have the next letter
 * @returns {string} the next letter of this tring
 */
function getNextLetter(string) {
    if (typeof string !== "string") {
        return;
    }

    var nextLetter = string[string.length + 1];
    if (string.length + 1 > string.length) {
        return
    }
    return nextLetter;
}
/**
* Tell us if the character is an operator
* @param {string} string we want to analyze
* @returns {boolean} true if it is an operator
*/
function isOperator(string) {

    if (typeof string !== "string") return;

    if (string === "-" || string === "/" || string === "+" || string === "x" || string === "*") {
        return true;
    }
}