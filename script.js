const grocery =[
    {
        "name":"Maggie",
        "category":"package-food",
        "price":99,
        "mrp":150,
        "image":"https://www.madewithnestle.ca/sites/default/files/masala_cdn_3dsm.png",
        "description":"",
        "offer":"50%",
        "product-id":"0001"
    },
    {
        "name":"Oats",
        "category":"package-food",
        "price":299,
        "mrp":500,
        "image":"",
        "description":"",
        "offer":"50%",
        "product-id":"0002"

    },
    {
      "name":"Horlicks",
        "category":"package-food",
        "price":399,
        "mrp":499,
        "image":"https://www.madewithnestle.ca/sites/default/files/masala_cdn_3dsm.png",
        "description":"",
        "offer":"50%",
        "product-id":"0003"
    },
    {
      "name":"Maggie",
        "category":"package-food",
        "price":99,
        "mrp":50,
        "image":"https://www.madewithnestle.ca/sites/default/files/masala_cdn_3dsm.png",
        "description":"",
        "offer":"50%",
        "product-id":"0004"
    },
    {
      "name":"Coconut Oil",
        "category":"package-food",
        "price":99,
        "mrp":150,
        "image":"https://www.madewithnestle.ca/sites/default/files/masala_cdn_3dsm.png",
        "description":"",
        "offer":"50%",
        "product-id":"0005"
    }
]
//  Checking tags to insert from array of Objects. 

// document.getElementById("image-maggie").src= grocery[0].image;
// document.getElementById("name").innerHTML=grocery[0].name;
// document.getElementById("offer").innerHTML=`Rs. ${grocery[0].price}`
// document.getElementById("des").innerHTML=` <del>${grocery[0].mrp}</del>`


const nav=document.getElementById("item1");
const drop=document.getElementById("hide");
const slist =document.getElementById("slist");
const downArrow1 =document.querySelectorAll("#down-arrow1");
console.log(downArrow1);
nav.addEventListener("mouseover",()=>{
    drop.style.visibility = "visible";
    slist.style.display = "none";

});

nav.addEventListener("mouseout",()=>{
    slist.style.display = "none";
    drop.style.visibility = "hidden"
});

drop.addEventListener("mouseover",()=>{
    drop.style.visibility = "visible";
    slist.style.display = "flex";
    downArrow1.forEach(element => {
        element.style.display="initial"; 
    });
});

drop.addEventListener("mouseout",()=>{
    slist.style.display = "none";
    drop.style.visibility = "hidden"
    downArrow1.forEach(element => {
        element.style.display="none"; 
    });
});



// Slider button to move elements back and forward 


// const nextBtn=[...document.querySelectorAll("#slide-forward")];
// const backBtn=[...document.querySelectorAll("#slide-back")];
// const slider=[...document.querySelectorAll(".slider")]

// console.log(nextBtn)

// slider.forEach((item,i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nextBtn[i].addEventListener('click', () => {
//         item.scrollLeft += containerWidth/5;
//     });

//     backBtn[i].addEventListener("click", () => {
//         item.scrollLeft -= containerWidth/5;
//     })

// });


const slideBack = document.getElementById("slide-back");
const slideFront = document.getElementById("slide-forward");
const slider = document.getElementById("slider-id");

let margin = 0;

slideBack.addEventListener('click',moveToBack);
slideFront.addEventListener('click',moveToFront);

function moveToFront(){
    if (margin<=-952) {
        margin=-952
    }
    else{
        margin +=-238;
    }
    
    slider.style.transform =`translateX(${margin}px)`
    
}
function moveToBack(){
    if (margin>=0) {
        margin=0
    }
    else{
        margin +=238;
    }
    
    slider.style.transform =`translateX(${margin}px)`
}



