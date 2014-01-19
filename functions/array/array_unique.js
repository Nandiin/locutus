function array_unique(inputArr) {
  //  discuss at: http://phpjs.org/functions/array_unique/
  // original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
  //    input by: duncan
  //    input by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Nate
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  // improved by: Michael Grier
  //        note: The second argument, sort_flags is not implemented;
  //        note: also should be sorted (asort?) first according to docs
  //   example 1: array_unique(['Kevin','Kevin','van','Zonneveld','Kevin']);
  //   returns 1: {0: 'Kevin', 2: 'van', 3: 'Zonneveld'}
  //   example 2: array_unique({'a': 'green', 0: 'red', 'b': 'green', 1: 'blue', 2: 'red'});
  //   returns 2: {a: 'green', 0: 'red', 1: 'blue'}

  var key = '',
      tmp_arr2 = {},
      val = '';

  var __array_search = function(needle, haystack) {
    var fkey = '';
    for (fkey in haystack) {
      if (haystack.hasOwnProperty(fkey)) {
        if ((haystack[fkey] + '') === (needle + '')) {
          return fkey;
        }
      }
    }
    return false;
  };

  for (key in inputArr) {
    if (inputArr.hasOwnProperty(key)) {
      val = inputArr[key];
      if (false === __array_search(val, tmp_arr2)) {
        tmp_arr2[key] = val;
      }
    }
  }

  return tmp_arr2;
}
