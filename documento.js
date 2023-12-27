const fetchEminem = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const eminems = data.data;
      const img = document.querySelector(".img");
      for (const eminem of eminems) {
        img.innerHTML += `<div> <input type="checkbox" id="eminem_${eminem.id}"/>
        <label for=eminem_${eminem.id}">${eminem.album.title}</label> </div>`;
      }
    }).catch;
};
fetchEminem();

const fetchMetallica = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const metallicas = data.data;
      const img1 = document.querySelector(".img1");
      for (const metallica of metallicas) {
        img1.innerHTML += `<div> <input type="checkbox" id="eminem_${metallica.id}"/>
        <label for=eminem_${metallica.id}">${metallica.album.title}</label> </div>`;
      }
    }).catch;
};
fetchMetallica();
