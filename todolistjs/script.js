let btnDOM = document.querySelector('#liveToastBtn')
let taskDOM = document.querySelector('#task')
let listDOM = document.querySelector('#list')


btnDOM.addEventListener('click', addTask)


function silmeIslemi() {
    this.parentNode.remove();
}

function check(){
    this.classList.toggle("checked"); 
  }

function addTask() {
    let alertDOM = document.querySelector('#alert')
    if (taskDOM.value != 0) {
        let liDOM = document.createElement('li')

        listDOM.appendChild(liDOM)
        liDOM.innerHTML = taskDOM.value
        $('#liveToast').toast('show')

        liDOM.onclick = check; // Yapıldı Fonksiyonu
        let silmeButonu = document.createElement('span')
        silmeButonu.innerHTML = "x"
        silmeButonu.classList.add("close")
        silmeButonu.onclick = silmeIslemi
        listDOM.append(silmeButonu)
        liDOM.append(silmeButonu);

     
       
    }

    else {
        $('#liveToastError').toast('show')
    }




}
