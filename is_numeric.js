function is_numeric( mixed_var ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: David
    // *     example 1: is_numeric(186.31);
    // *     returns 1: true
    // *     example 2: is_numeric('Kevin van Zonneveld');
    // *     returns 2: false
    // *     example 3: is_numeric('+186.31e2');
    // *     returns 3: true

    return !isNaN( mixed_var );
}