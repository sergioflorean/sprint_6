const container = document.querySelector(".container");
const songsContainer = container.querySelector(".songs-container");
const noSongsElement = container.querySelector(".no-songs");

const addSongForm = container.querySelector("#add-song-form");
const title = document.querySelector("#song-title-input");
const artist = document.querySelector("#song-artist-input");

function renderHasSongs() {
noSongsElement.classList.add("no-songs_hidden");
}

function addSong(artistValue, titleValue) {
// Crea un elemento <li>
const songElement = document.createElement("li");
songElement.classList.add("song");

// Crea un elemento <h3>
const artistElement = document.createElement("h3");
artistElement.classList.add("song\_\_artist");
artistElement.textContent = artistValue;

// Crea un elemento <p>
const titleElement = document.createElement("p");
titleElement.classList.add("song\_\_title");
titleElement.textContent = titleValue;

// Crea un elemento <button>
const likeButtonElement = document.createElement("button");
likeButtonElement.classList.add("song**button", "song**button_type_like");
likeButtonElement.setAttribute("type", "button");

// Agrega los elementos artist, title y button al elemento song
songElement.append(artistElement, titleElement, likeButtonElement);

// Agrega el elemento song al contenedor de canciones
songsContainer.append(songElement);

// Devuelve el elemento de la canción
return songElement;
}

addSongForm.addEventListener("submit", function (evt) {
evt.preventDefault();

addSong(artist.value, title.value);
renderHasSongs();

artist.value = "";
title.value = "";
});
