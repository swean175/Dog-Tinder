import Dog from './dog.js'
import dogs from './data.js'

let listOfdogs = [0,1,2]
let passDog = []
let likedDog = []



function getDog(){

   let currentDog = new Dog(dogs[listOfdogs.shift()])
    let invisibleYesBadge = 'invisible'
    let invisibleNoBadge = 'invisible'
    let html = ''
    
changeHtml()

    function update(){
       
        document.getElementById('section').className=''
        currentDog = new Dog(dogs[listOfdogs.shift()])
        invisibleYesBadge = 'invisible'
        invisibleNoBadge = 'invisible'
       
       changeHtml()
    
       render(html)
       document.getElementById("no-btn").disabled = false;
       document.getElementById("yes-btn").disabled = false;
    }
    
function changeHtml(){
   return html = `<img class="picture" src="${currentDog.avatar}" alt="dog-picture">
    <img class="badge ${invisibleYesBadge}" src="/images/badge-like.png" alt="liked" width="233px" height="116px">
    <img class="badge ${invisibleNoBadge}" src="/images/badge-nope.png" alt="disliked" width="233px" height="116px">
    <div id="about" class="picture-text">
        <h2>${currentDog.name}, ${currentDog.age}</h2>
        <article>  ${currentDog.bio}</article>
    </div>`
}


function choice(yn){

    document.getElementById("no-btn").disabled = true;
    document.getElementById("yes-btn").disabled = true;

    if(yn==='yes'){
        currentDog.liked()
        likedDog.push(currentDog)
        invisibleYesBadge=''
        document.getElementById('section').classList.add('swipe-right')
      
    } else {
        currentDog.notLiked()
        passDog.push(currentDog)
        invisibleNoBadge=''
        document.getElementById('section').classList.add('swipe-left')
    }
  

  changeHtml()
    setTimeout(()=>update(), 800)
    render(html)
}

document.getElementById('no-btn').addEventListener('click', ()=>{
    choice('no')
     
 })
     document.getElementById('yes-btn').addEventListener('click', ()=>{
         choice('yes')
     })

render(html)
}


getDog()

function render(html){
    document.getElementById('section').innerHTML = html
  
}

