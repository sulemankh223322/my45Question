var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// store the location in a array . Make sure the array is not a alphabetical order .
var places = ['Italy', 'Germany', 'agra', 'Eifel Tower', 'Times Square '];
// Print your array in its original order .
console.log('Original ' + places);
// Print your arrray in alphabetical order without modifying the actual list .
console.log('Copy ' + __spreadArray([], places, true).sort());
// show that your array is still in its original order by printing it.
console.log('Original ' + places);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Copy ' + __spreadArray([], places, true).sort().reverse());
// Show that your array is still in its original order by printing it agian.
console.log('Original ' + places);
// Reverse the order of your list.Print the array to show that its order has changed.
console.log('Original ' + places.reverse());
// Reverse the order of the list again. Print the list to show its back to its original order.
console.log('Original ' + places.reverse());
// Sort your array so its stored in alphabetical order . Print the array to show that its order has been changed.
console.log('Original ' + places.sort());
// Sort to change your array so its stored in reverse alphabetical order . print the list to show that its order has changed.
console.log('Original ' + places.sort().reverse());
