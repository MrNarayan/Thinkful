import React, {useState, useEffect} from "react"

function AlbumDetail({album ={}}) {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        async function loadAlbums(albumId) {
            fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
                .then((response) => response.json())
                .then(setPhotos)
                .catch((error) => {
                    console.log(error)
                });
        }

        if (album.id) {
            loadAlbums(album.id);
        }
    }, [album]);

    if (album.id) {
        return (
            <div className="albums">
                <ul className="comment-list">
                    {photos.slice(0, 10).map((photo) => (
                        <li key={photo.title}>
                            <p>{photo.title}</p>
                            <img alt={photo.title} src={photo.url}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else {
        return <p>No Album selected </p>;
    }
}


export default AlbumDetail;
