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
//target search box

(function(){
 let search = document.getElementById("search-item");
 search.addEventListener('keyup',function(){
     let value = search.value.toLowerCase().trim();//i said that value variable is equal to that that search item ffrom input
     //console.log(value);//getting back the values from search input
     
     let items = document.querySelectorAll('.store-item');//target them
     items.forEach(function(item){//loop through them 
         let type = item.dataset.item;//targeting that store item(data-item)
         

         let length = value.length; //the lenght of the value from search input
         let match = type.slice(0,length); //that value from search if it is cake it will check from 0 whic is c to the end of array
       if(value === match){
        item.style.display = "block";
       }else{
        item.style.display = "none";
       }
     })
     
 })


})();