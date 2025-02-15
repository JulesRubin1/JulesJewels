function toggleFavorite(dataSongId, songName, artist, songLink) {
  const favoriteSongs = JSON.parse(localStorage.getItem('favoriteSongs')) || {};
  if (!favoriteSongs [dataSongId]) {
      favoriteSongs[dataSongId] = {
          artist:artist,
          songName:songName,
          songLink:songLink,
          favorited: true,
    };
  } else {
    favoriteSongs[dataSongId].favorited = !favoriteSongs[dataSongId].favorited;
  }
  localStorage.setItem('favoriteSongs', JSON.stringify(favoriteSongs));
}

function applyFavorites() {
  const favoriteSongs = JSON.parse(localStorage.getItem('favoriteSongs')) || {};
  const heartButtons = document.querySelectorAll('.favorites-button');
  for (let button of heartButtons) {
      // use the item id as the item's id
      const dataSongId = button.closest('tr').getAttribute('data-song-id');

      if (favoriteSongs[dataSongId]) {
          if (favoriteSongs[dataSongId].favorited) {
              // apply the red style
              button.querySelector('.clear-heart').setAttribute('src', "images/heart-color-red.png");
          }
          else {
              // apply the clear style
              button.querySelector('.clear-heart').setAttribute('src', "images/heart-clear.png");
          }
      }
  }
}

  // Attach click event listener to heart buttons
document.addEventListener('DOMContentLoaded', () => {
  const heartButtons = document.querySelectorAll('.favorites-button');

  for (let button of heartButtons) {
      button.onclick = function() {
        const dataSongId = button.closest('tr').getAttribute('data-song-id');
        const songName = button.closest('tr').querySelector('.song-name').textContent.trim();
        const artist = button.closest('tr').querySelector('.artist').textContent.trim();
        const songLink = button.closest('tr').querySelector('.song-link').querySelector('.website-button').getAttribute('href');
          toggleFavorite(dataSongId, songName, artist, songLink);
          applyFavorites(); // Update favorites on click
      }
  }

  // Apply favorites on initial page load
  applyFavorites();
});
 
