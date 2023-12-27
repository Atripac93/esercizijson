const fetchEminem = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      const eminems = data.eminems;
      const img = document.querySelector(".img");
      for (const eminem of eminems) {
        img.innerHTML += `<div> <input type="checkbox" id="eminem_${eminem.id}"/>
        <label for=eminem_${eminem.id}">${eminem.img}</label> </div>`;
      }
    });
};
