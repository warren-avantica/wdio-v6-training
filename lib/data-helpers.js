module.exports = {

  getRandomName: function() {
   let randomNumber = Math.floor(Math.random() * 100 + 1);
   return `name${new Date().getTime().toString()}${randomNumber}` 
  },

  gerRandomId: function() {
    let randomNumber = Math.floor(Math.random() * 1000 + 1);
    return `ID_${new Date().getTime().toString()}${randomNumber}` 
   }
}