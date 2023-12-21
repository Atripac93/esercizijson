const img =document.querySelector("#img");

const getImg= async ()=>{
    const data = await fetch("https://dog.ceo/dog-api/");
    const dataJson = await data.json();
    img.src = dataJson.message;
}
getImg();