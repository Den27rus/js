function validParentheses(parenStr) {
    while (parenStr.length > 0) {
        var output = parenStr.replace(/\(\)|\{\}|\[\]/, "");
        if (parenStr == output) return false;
        parenStr = output;
    }
    return true;
}