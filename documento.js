const img = document.querySelector("#img");

const fetchCanzoni = async () => {
  const data = await fetch("https://dog.ceo/api/breeds/image/random");
  const dataJson = await data.json();
  img.src = dataJson.message;
};
fetchCanzoni();
