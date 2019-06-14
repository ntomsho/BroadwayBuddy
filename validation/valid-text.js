const validText = str => {
    return typeof str === 'str' && str.trim().length > 0;
}

module.exports = validText;