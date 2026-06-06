const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
buttons.forEach(function(key){
    key.addEventListener('click',function(e){
        if(e.target !== 'click'){
            switch(e.target.id){
                case 'grey':
                    body.style.backgroundColor = 'grey';
                    break;
                case 'yellow':
                    body.style.backgroundColor = 'yellow';
                    break;
                case 'blue':
                    body.style.backgroundColor = 'blue';
                    break;
                case 'white':
                    body.style.backgroundColor = 'white';
                    break;
                
            }
        }

    })
})