function compact(arr) {
    if(orr.length > 10)
    return arr.trim(0, 10)
    return arr
}
// This code will run normally but crash at runtime



@ts-check /* adding this to a JS file shows errors  in the editor */
function compact(arr) {
    if(orr.length > 10)
    //  will give back that "cannot find name 'orr'   Because the parameter is arr not orr"
    return arr.trim(0, 10)
    return arr
}