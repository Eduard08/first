const bus = {
    name: "School bus",
    size: 30,
    color: "brown", 
    speed: "80 km/h",
    engineStart: true, 
};
const schoolBus = (why) =>{
    const info = document.createElement("article")
    info.innerHTML =`
    <div class = "container">
    <article class="textSize">
    <h1 class="title">${why.name}</h1>
    <p>Here are some of its' properties:</p>
    <p>Size:${why.size}</p>
    <p class="paint">Color:${why.color}</p>
    <p>Maximum speed:${why.speed}</p>
    <p>Engine: ${why.engineStart ? "Off" : "Started"}</p>
    </article></div>
    `;
    return info;
};



const tripCalculator = (flight,hotel,driver,discount) => {
    let total = flight+hotel+driver;
    let save = total * (discount / 100);
    return total - save; 
};

const applyCalc = (notSure)=>{
    const count = document.createElement("div");
    const totalCost = tripCalculator(notSure.flight, notSure.hotel, notSure.driver, notSure.discount);
    count.innerHTML = `
    <h2 class="name">Vacation</h2>
    <ul>
    <p>Spendings on the flight: ${notSure.flight} USD</p>
    <p>Hotel price: ${notSure.hotel} USD</p>
    <p>Driver charge: ${notSure.driver} USD</p>
    <p>Early-bird dicsount: ${notSure.discount}%</p>
    <p>Price after discount: ${totalCost} USD</p>
    </ul>
`;
return count;
};



const appear = document.querySelector("article");
appear.append(schoolBus(bus));
const appearTwo = document.querySelector("div");
appearTwo.append(applyCalc({ flight: 1000, hotel: 500, driver: 200, discount: 5 }));



const greyBox = document.querySelector(".container");
greyBox.addEventListener("mouseenter",() =>{
    greyBox.style.outline = "solid red";
    
greyBox.addEventListener("mouseleave",() => {
    greyBox.style.outline = "";
})    
}
)

const body = document.body;
body.addEventListener("keydown", (event) => {
 

  // Test for KeyD (the "d" key)
  if (event.code === "KeyD") {
    body.style.backgroundColor === ""
      ? (body.style.backgroundColor = "pink")
      : (body.style.backgroundColor = "");
  }
});

const bodyTwo = document.body;
body.addEventListener("keydown", (event) => {
 

  // Test for KeyA (the "a" key)
  if (event.code === "KeyA") {
    body.style.backgroundColor === ""
      ? (body.style.backgroundColor = "yellow")
      : (body.style.backgroundColor = "");
  }
});