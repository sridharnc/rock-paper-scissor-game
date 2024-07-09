const gamecontainer=document.querySelector(".game_container");
userresult=document.querySelector(".user_result img");
computerchoice=document.querySelector(".Computer_result img");
result=document.querySelector(".content_field p");
optionimages=document.querySelectorAll(".option_image")
optionimages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");
        result.textContent="Wait..."

    optionimages.forEach((image1,index1) => {
        index!==index1 &&  image1.classList.remove("active");
    });
    gamecontainer.classList.add("start");
let time=setTimeout(()=>{
    gamecontainer.classList.remove("start");
let imagesrc= e.target.querySelector("img").src
userresult.src=imagesrc;
const computer = ["/images/paper.png", "/images/rock.png","/images/scissor.png"];
let computerchoices = Math.floor(Math.random() * computer.length);
computerchoice.src=computer[computerchoices]
let computervalue=["P","R","S"][computerchoices]
console.log(computervalue)
let uservalue=["R","P","S"][index]
console.log(uservalue)
let outcomes={
SS:"TIE",
RR:"TIE",
PP:"TIE",
SP:"YOU WON",
SR:"COMPUTER WON",
RS:"YOU WON",
RP:"COMPUTER WON",
PS:"YOU WON",
PR:"COMPUTER WIN"
}
result.textContent=outcomes[uservalue+computervalue]
},2500); 
});
});