import swal from 'sweetalert'

function contactController() {
  $('.main-title').text('cargamos la seccion contacto')
}

$('.main').on('input', '#input-name', handleName)
$('.main').on('input', '#input-email', handleEmail)
$('.main').on('input', '#input-comments', handleName)
$('.main').on('submit', handleSubmit)

function handleName(evt) {
  var name = evt.target.value
  var $target = $(evt.target)

  if (name.length > 3) {
    $target.removeClass('is-invalid').addClass('is-valid')
  } else {
    $target.removeClass('is-valid').addClass('is-invalid')
  }
  enableSubmit()
}

function handleEmail(evt) {
  var $target = $(evt.target)

  if (emailIsValid(evt.target.value)) {
    var $target = $(evt.target)
    $target.removeClass('is-invalid').addClass('is-valid')
  } else {
    $target.removeClass('is-valid').addClass('is-invalid')
  }
  enableSubmit()
}

function handleSubmit(e) {
  e.preventDefault()
  swal("thank you", "your message was sent.", "success")
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function enableSubmit() {
  var numEleToCheck = $('input, textarea').length
  var validElements = $('.is-valid').length

  if (validElements == numEleToCheck) {
    $('form').find('button').prop('disabled', false)
    console.log('valid', validElements)
  } else {
    console.log('not enough', validElements)
    $('form').find('button').prop('disabled', true)
  }
}



export default contactController