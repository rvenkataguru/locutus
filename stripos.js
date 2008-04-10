function stripos ( f_haystack, f_needle, f_offset ){
    // http://kevin.vanzonneveld.net
    // +     original by: Martijn Wieringa
    // *         example 1: stripos('ABC', 'a');
    // *         returns 1: 0

    var haystack = f_haystack.toLowerCase();
    var needle = f_needle.toLowerCase();
    var index = 0;

    if(f_offset == undefined) {
        f_offset = 0;
    }

    if((index = haystack.indexOf(needle, f_offset)) > -1) {
        return index;
    }

    return false;
}