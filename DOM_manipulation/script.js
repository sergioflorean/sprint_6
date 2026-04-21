const initialSongs = [
  { artist: "Young Marco", title: "Kalapa Garden" },
  { artist: "10cc", title: "I'm Not In Love" },
  { artist: "Rodrigo y Gabriela", title: "Tamacun" },
  { artist: "apolumni, Aleeray", title: "When It Gets Dark" },
  { artist: "crimson taupe", title: "siren" },
];

const container = document.querySelector(".container");
const songsContainer = container.querySelector(".songs-container");
const noSongsElement = container.querySelector(".no-songs");

const addSongForm = container.querySelector("#add-song-form");
const title = document.querySelector("#song-title-input");
const artist = document.querySelector("#song-artist-input");

function renderHasSongs() {
  noSongsElement.classList.add("no-songs_hidden");
}

const songTemplate = document
  .querySelector("#song-template")
  .content.querySelector(".song");

function createSongElement(artist, title) {
  //Clona el marcado almacenado en el contenido de la plantilla
  //seleccione el template y su contenido
  const songElement = songTemplate.cloneNode(true);

  const artistElement = songElement.querySelector(".song__artist");
  artistElement.textContent = artist;

  const titleElement = songElement.querySelector(".song__title");
  titleElement.textContent = title;

  //selecciona el boton de like
  const songLikeBtn = songElement.querySelector(".song__button_type_like");
  // agregar un event listener al boton de like
  songLikeBtn.addEventListener("click", function () {
    console.log("like");
    songLikeBtn.classList.toggle("song__button_active");

    //boton eliminar
    const songDeleteBtn = songElement.querySelector(
      ".song__button_type_delete",
    );
    songDeleteBtn.addEventListener("click", function () {
      console.log("delete");
      songElement.remove();
    });
  });

  return songElement;
}

const renderSongElement = (artist, title) => {
  const songElement = createSongElement(artist, title);
  songsContainer.append(songElement);
  renderHasSongs();
};

addSongForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  renderSongElement(artist.value, title.value);

  artist.value = "";
  title.value = "";
});

initialSongs.forEach((song) => {
  renderSongElement(song.artist, song.title);
});
