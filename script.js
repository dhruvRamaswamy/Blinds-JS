const panels = document.querySelectorAll('.panel')
//Good way of iterating over panels nodelist 
for (let panel of panels){
    panel.addEventListener('click', () => {
        for(let remove of panels){
            if(remove.classList.contains('active')){
                remove.classList.remove('active')
            }
        }
        panel.classList.add('active')
    })
}