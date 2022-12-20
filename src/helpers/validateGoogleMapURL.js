module.exports = async (text) => {
    var validRegex =  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if (text.match(validRegex)) {
        // console.log("IN VALIDATION ????")
        return text;
    } else {
        return "Invalid Google Link!";
    }
}