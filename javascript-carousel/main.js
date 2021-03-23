

var images = [
  "./images/039.png", "./images/001.png", "./images/004.png", "./images/007.png", "./images/025.png",
]
var buttonArray = [];

var index = 0;

function domCreation() {
  var mainDiv = document.createElement("div");
  mainDiv.className = "mainDiv";

  var leftArrowDiv = document.createElement("div");
  leftArrowDiv.className = "leftArrowDiv";
  var leftArrowi = document.createElement("i");
  leftArrowi.className = "fas fa-angle-double-left";
  leftArrowDiv.appendChild(leftArrowi);
  leftArrowDiv.addEventListener("click", arrowFunction);

  var rightArrowDiv = document.createElement("div");
  rightArrowDiv.className = "rightArrowDiv";
  var rightArrowi = document.createElement("i");
  rightArrowi.className = "fas fa-angle-double-right";
  rightArrowDiv.appendChild(rightArrowi);
  rightArrowDiv.addEventListener("click", arrowFunction);

  var bottomDiv = document.createElement("div");
  bottomDiv.className = "bottomDiv";

  for (var i = 0; i < images.length; i++) {
    var circle = document.createElement("i");
    circle.className = "far fa-circle";
    circle.addEventListener("click", circleClick);

    buttonArray.push(circle);
    bottomDiv.append(circle);
  }

  var picDiv = document.createElement("picDiv");
  picDiv.className = "imgs";
  mainDiv.append(leftArrowDiv, picDiv, rightArrowDiv);
  document.body.append(mainDiv, bottomDiv);


}

function pic() {
  if(index == -1){
    index = 4;
  }
  var imgs = document.getElementsByClassName("imgs");
  setInterval(function () {
    autoChange(index);
    imgs[0].style.backgroundImage = "url(" + images[index] + ")";
    if(index == images.length - 1){
      index = 0;
    }else{
      index++;
    }
  }, 1500);
}

function circleClick() {
  for (var i = 0; i < buttonArray.length; i++) {
    var item = buttonArray[i];
    item.className = "far fa-circle";
    index = buttonArray.indexOf(this);
  }
  this.className = "fas fa-circle";
  changePic(index);
}

function changePic(img_index) {
  if(img_index == -1){
    img_index = 4;
  }
  var imgs = document.getElementsByClassName("imgs");
  imgs[0].style.backgroundImage = "url(" + images[img_index] + ")";
}

function autoChange(autoIndex) {
  if(autoIndex == -1){
    autoIndex = 4;
  }
  for (var i = 0; i < buttonArray.length; i++) {
    var item = buttonArray[i];
    if (i == autoIndex) {
      item.className = "fas fa-circle";
    } else {
      item.className = "far fa-circle"
    }
  }
}

function arrowFunction() {
  if (this.className == "leftArrowDiv") {
    if(index == 0){
       index = 4;
    }else{
       index--;
    }
  } else {
    if(index == 4){
       index = 0;
    }else{
       index++;
    }
  }
  changePic(index-1);
  autoChange(index-1);
}


domCreation();
pic();
