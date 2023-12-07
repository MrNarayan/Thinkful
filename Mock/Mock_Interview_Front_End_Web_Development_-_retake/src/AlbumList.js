import React from "react"

function AlbumList({albums, setCurrentAlbum}) {

  return (
        <ul className="album-list">
          {albums.map(album => {
            return (
                <li key={album.title}>
                  <button type="button" onClick={() => setCurrentAlbum(album)}>{album.title}</button>
                </li>
            )})

          }
        </ul>
  );
}

export default AlbumList;
