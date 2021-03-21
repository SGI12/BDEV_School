
let counter = '0';
document.getElementById('_button').onclick = function(){
    counter = Number(counter)+1
    let p = document.createElement('p')
    p.innerText = document.getElementById("area").value
    document.querySelector('.wrapper').append(p)
    p.className = 'comm'
    localStorage.setItem(counter, document.getElementById("area").value)
    document.getElementById("area").value = ''
    
  }

for (let i=1; i<=localStorage.length; i++) {
  let token = localStorage.getItem(Number(i))
  let comment = document.createElement('p')
  comment.innerText = token
  document.querySelector('.wrapper').append(comment)
  comment.className = 'comm'
}


