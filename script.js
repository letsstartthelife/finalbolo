const myFunction = () => {
    document.getElementById("first").style.display ='block';
    document.getElementById("second").style.display ='none'
    document.getElementById("third").style.display ='none'
  }

  var button = document.querySelector('#show');//selects your button
    button.addEventListener('click',function(){ // handle click event
    var images = ["blog1.jpg","blog2.jpg","blog3.jpg"];//array of valid images
    images.forEach(function(image){
    img = document.createElement('img');//creates a img element
    img.src = image;//sets src of img tag
    document.body.appendChild(img)//appends into body
    });
    });