import getData from '../utils/api'
import setForStorage from '../utils/saveStorage'
import getFromStorage from '../utils/getStorage'
import Character from '../utils/generateCharacter'

var baseUrl = 'https://swapi.co/api/people'

function peopleController() {
  // console.log('Loading characters section..')

  if ( !getFromStorage('characters') ) {
    console.info('firing api request')
    getData(baseUrl, parseResultsFromApi)
  } else {
    console.info('firing localStorage request')
    renderResults(getFromStorage('characters'), 0)
  }

}


// Event listeners for the more button (with event delegation)
$('.main').on('click', '#btn-more', function() {
  var nextUrl = localStorage.getItem('nextUrl')
  console.log('nextUrl: ', nextUrl)
  if (nextUrl !== 'null') {
    getData(nextUrl, parseResultsFromApi)
  } else {
    $(this).prop('disabled', true)
  }
})


// Event listeners for save and unsave buttons (with event delegation)
$('.main').on('click', '#btn-save', handleSave)
$('.main').on('click', '#btn-unsave', handleUnsave)

// Handle save when 'save' button is pressed
function handleSave(e) {
  var id = $(e.target).parent().parent().find('th').text()

  var $btn = $(e.target)

  $btn.removeClass('btn-success').addClass('btn-warning')


  var currentCharacters = getFromStorage('characters')

  currentCharacters[ id - 1 ].saved = true

  setForStorage('characters', currentCharacters)

  console.log(currentCharacters[ id - 1])

  $btn.text('saved')

  $btn.attr('id', 'btn-unsave')

}

// Handle unsave when 'unsave' button is pressed
function handleUnsave(e) {
  var $btn = $(e.target)
  var id = $(e.target).parent().parent().find('th').text()

  var currentCharacters = getFromStorage('characters')

  currentCharacters[ id - 1 ].saved = false

  setForStorage('characters', currentCharacters)

  $btn.removeClass('btn-warning').addClass('btn-success')
  $btn.text('save')

  $btn.attr('id', 'btn-save')
}


// Parse results when it comes from the API (see api.js)
function parseResultsFromApi(data) {

  var characters = data.results
  var nextUrl =  data.next

  setForStorage('nextUrl', nextUrl)
  var counter = Number(localStorage.getItem('counter'))

  if (getFromStorage('characters')) {
    var currentStorage = getFromStorage('characters')
  } else {
    var currentStorage = [] 
  }

  for (var i = 0; i < characters.length; i++ ) {
      counter++
      currentStorage.push(new Character(
        counter, 
        characters[i].name,
        characters[i].gender,
        characters[i].height,
        characters[i].mass,
        characters[i].eye_color
        )
      )
      
  }

  setForStorage('characters', currentStorage)
  localStorage.setItem('counter', counter)

  if (counter <= 10) {
    renderResults(getFromStorage('characters'), 0)
  } else {
    console.log('fired render results with counter')
    renderResults(getFromStorage('characters'), counter - 10)
  }
}

function renderResults(characters, index) {

  for (var i = index; i < characters.length; i++) {
    var tr = `
    <tr>
      <th scope="row">${characters[i].id}</th>
      <td>${characters[i].name.toLowerCase()}</td>
      <td>${characters[i].gender}</td>
      <td>${characters[i].height}</td>
      <td>${characters[i].mass}</td>
      <td>${characters[i].eyeColor}</td>
      <td>
        <button 
          id="${characters[i].saved ? 'btn-unsave' : 'btn-save'}" 
          class="btn btn-block ${characters[i].saved ? 'btn-warning' : 'btn-success'}">
          ${characters[i].saved ? 'unsave' : 'save'}
        </button>
      </td>
    </tr>`
    $('.table-body').append(tr)
  }

  if (localStorage.getItem('nextUrl') === 'null') {
    console.log('aha')
    $('#btn-more').prop('disabled', true)
  }
}

export default peopleController