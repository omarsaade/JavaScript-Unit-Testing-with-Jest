/* 
feature
filterName Function
[1] if No Name is Given It Will show "unknown"
[2] if names starts or ends with space it will be trimmed
[3] if Name length > 10 it will show only first 10 characters
[4] if name starts with underscore it will not show the underscore
*/
function filterName(name) {
    if (name === undefined) {
        name = "unknown";
    }
    if (name.startsWith("") || name.endsWith("")) {
        name = name.trim();
    }
    if (name.length > 10) {
        name = name.substring(0, 13);
    }
    if (name.startsWith("_")) {
        name = name.substring(1);
    }
    if (name === "Hello") {
        throw Error("This name is not Allowed");
    }
    return name;
}

module.exports = filterName;