function Character(id, name, gender, height, mass, eyeColor, saved) {
  this.id = id
  this.name = name
  this.gender = gender
  this.height = height
  this.mass = mass
  this.eyeColor = eyeColor
  this.saved  =  saved || false
}

export default Character