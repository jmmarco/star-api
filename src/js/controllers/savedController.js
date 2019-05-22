import getFromStorage from '../utils/getStorage'
import setForStorage from '../utils/saveStorage'

// var currentStorage = getFromStorage('characters')

function savedController() {
  console.log('cargamos guaradado')

  let characters = getFromStorage('characters')

  renderResults(characters)
}

$('.main').on('click', '#btn-remove', handleRemove)


function handleRemove(e) {
  var id = $(e.target).parent().parent().find('th').text()

  var $btn = $(e.target)
  var $tr = $(e.target).parent().parent()

  $btn.removeClass('btn-success').addClass('btn-warning')


  // console.log('results', characters[id - 1])
  console.log('id from button and parent of parent', id)

  let currentCharacters = getFromStorage('characters')

  currentCharacters[ id - 1 ].saved = false

  setForStorage('characters', currentCharacters)

  console.log(currentCharacters[ id - 1])

  $tr.remove()
}


function renderResults(characters) {
  if (characters) {
    for (var i = 0; i < characters.length; i++) {
      console.log('inside', characters[i].saved)
      if (characters[i].saved) {
        var tr = `<tr>
        <th scope="row">${i + 1}</th>
        <td>${characters[i].name.toLowerCase()}</td>
        <td>${characters[i].gender}</td>
        <td>${characters[i].height}</td>
        <td>${characters[i].mass}</td>
        <td>${characters[i].eyeColor}</td>
        <td><button id="btn-remove" class="btn btn-block btn-danger">remove</button></td>
        </tr>`
        $('.table-body').append(tr)
      }

    }

  } else {
    $('.container').html('<h2 class="text-center">Nothing saved yet..</h2>')
  }
}


export default savedController