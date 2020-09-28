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


//lightbox
//imidate invoked functio
(function(){
//all images
let imageList = [];
let counter = 0;

let images = document.querySelectorAll(".store-img");//we selected all images
let container = document.querySelector(".lightbox-container");//we selected that container
let item = document.querySelector(".lightbox-item");//we selected item in container
let closeIcon = document.querySelector(".lightbox-close");//we selected X from that container when you press on picture that X mark
let btnLeft = document.querySelector(".btnLeft");//we selected btnLeft
let btnRight = document.querySelector(".btnRight");//we selected btnRight

//add images to array

 // add all images to the modal
 images.forEach(function(img) {
    imageList.push(img.src);
  });

  //add event listener to open modal and show image
  images.forEach(function(img) {
    img.addEventListener("click", function(event) {
      // show modal
      container.classList.add("show");
      // get source
      let src = event.target.src;
      // change counter
      counter = imageList.indexOf(src);

      // show modal with image
      item.style.backgroundImage = `url(${src})`;
    });
  });
  // close modal
  closeIcon.addEventListener("click", function() {
    container.classList.remove("show");
  });
  // loop back
  btnLeft.addEventListener("click", function() {
    counter--;
    if (counter < 0) {
      counter = imageList.length - 1;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
  });
  btnRight.addEventListener("click", function() {
    counter++;
    if (counter > imageList.length - 1) {
      counter = 0;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
  });
})();

