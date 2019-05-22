function getData(url, callback) {
  $.ajax({
    url: url,
    method: 'GET'
  })
  .done(function(data) {
    callback(data)
  })
  .fail(function(error) {
    callback(error)
  })
}

export default getData