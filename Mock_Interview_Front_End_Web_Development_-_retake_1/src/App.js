import React, { useEffect, useState } from "react";

function App() {
    const [albums, setAlbums] = useState([]);
    const [currentAlbum, setCurrentAlbum] = useState({});
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums?userId=1")
            .then((response) => response.json())
            .then(setAlbums);

        if (currentAlbum.id) {
            fetch(`https://jsonplaceholder.typicode.com/albums/${currentAlbum.id}/photos`)
                .then((response) => response.json())
                .then(setPhotos);
        }
    }, [currentAlbum]);

    return (
        <div className="App">
            <ul className="album-list">
                {albums.map(album => (
                        <li key={album.title}>
                            <button key={album.title} type="button" onClick={() => setCurrentAlbum(album)}>{album.title}</button>
                        </li>
                    ))
                }
            </ul>
            {currentAlbum.id ?
            <div className="albums">
                <ul className="comment-list">
                    {photos.slice(0, 10).map(photo => (
                        <li key={photo.title}>
                            <p>{photo.title}</p>
                            <img alt={photo.title} src={photo.url}/>
                        </li>))}
                </ul>
            </div> :
            <p>No Album selected </p>
        }
        </div>
    );
}

export default App;
