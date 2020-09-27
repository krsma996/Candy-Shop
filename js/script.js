//filter btns

(function(){
//select all buttons
let filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(function(buttons){
    buttons.addEventListener('click',function(event){
        event.preventDefault();
        let value = event.target.dataset.filter;
        console.log(value);

        //select items in container in store items

        let items = document.querySelectorAll('.store-item');
        //console.log(items);//Node list returns
        items.forEach(function(item) {
            if(value === "all"){
                item.style.display = 'block';
            }else{
                if(item.classList.contains(value)){
                    item.style.display = 'block'; 
                }else{
                    item.style.display = 'none';
                }
            }
        });
    });
});


})();

//search input