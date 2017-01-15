
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  function entra(obj) {
  if (obj!== undefined && typeof(obj) === 'number' && !isNaN(obj) || typeof(obj)=="string"){
    return obj;
  }
}

var filtered = arr.filter(entra);
  return filtered;
}
