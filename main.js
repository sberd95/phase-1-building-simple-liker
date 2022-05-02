// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.querySelectorAll('.like-glyph').forEach(button => {
  //adding click listener to every heart element
  button.addEventListener('click', event => {
    console.log(event)
    if (event.target.innerText === EMPTY_HEART) {
      mimicServerCall()
      .then(() => {
        event.target.innerText = FULL_HEART
        event.target.className = 'activated-heart'
      })
      .catch(error => {
        let modal = document.querySelector('#modal')
        modal.className = ''
        modal.querySelector('p').innerText = `${error}`
        setTimeout(() => modal.className = 'hidden', 3000)
      })
    }
    else if (event.target.innerText === FULL_HEART) {
      event.target.innerText = EMPTY_HEART
      event.target.className = ''
    }
  })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
