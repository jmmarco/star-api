function setForStorage(name, obj) {
  if (typeof obj === 'object') {
    localStorage.setItem(name, JSON.stringify(obj))
    // console.info('Object stored succcesfully!')
    return true;
  } else if (typeof obj === 'string' || typeof obj === 'number') {
    // console.info('item stored succesfully')
    localStorage.setItem(name, obj);
  } else {
    // console.warn('Item NOT stored')
    return false;
  }
}

function getFromStorage(name) {
  if (localStorage.getItem(name) ) {
    return JSON.parse(localStorage.getItem(name))
  } else {
    // console.warn('No hay nada almacenado con esa key')
    return null;
  }
}

export  { setForStorage, getFromStorage }