import React, { useEffect, useState } from "react";
import AlbumDetail from "./AlbumDetail";

function App() {
    const [albums, setAlbums] = useState([]);
    const [currentAlbum, setCurrentAlbum] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums?userId=1")
            .then((response) => response.json())
            .then(setAlbums)
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="App">
            <ul className="album-list">
                {albums.map(album => {
                    return (
                        <li key={album.title}>
                            <button type="button" onClick={() => setCurrentAlbum(album)}>{album.title}</button>
                        </li>
                    )
                })
                }
            </ul>
            <AlbumDetail album={currentAlbum} />
        </div>
    );
}

export default App;
