// // Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector('#modal')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content has loaded');
  //Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
 errorModal.classList.add('hidden');

 // //CALL clickListener
clickListener();
});
function hideError(){
  errorModal.classList.add('hidden')
}

function findLikes(){
  const likeArr = document.querySelectorAll('like-glyph');

  likeArr.forEach((singularLike) => {
    singularLike.addEventListener('click', () =>
      console.log('YOU FOUND ME!')
      );
  }); 
}
// When a user clicks on an empty heart:
//  Invoke mimicServerCall to simulate making a server request
// NEED AN EVENT LISTENER ON ALL OF THE HEARTS
function clickListener(){
        document.addEventListener('click', (event) => {
        // console.log('YOU FOUND ME!')
      if (event.target.classList[0] === 'like-glyph'){
      
      
        // Invoke mimicServerCall to simulate making a server request
      // THIS IS A PROMISE. IT IS ASYNC. I NEED A .THEN
        mimicServerCall()
        .then(resp => {
          const activated = event.target.classList.contains ('activated-heart');
          if (activated) {
            event.target.classList.remove('activated-heart');
            event.target.innerHTML = EMPTY_HEART;
          }
          else {
            event.target.classList.add('activated-heart')
            event.target.innerHTML = FULL_HEART;
          }
          
          activated;
        })

        //If promise fails, .catch -> catches it
          //Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
        .catch(error => {
          console.log(error);
          errorModal.classList.remove('hidden');
          setTimeout(() => {
            hideError();}, 3000) 
        })
  
      } 
    })
  }
  


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
