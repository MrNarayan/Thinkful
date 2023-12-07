import React, { useEffect, useState } from "react";

function Items({ id }) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getItems = () => {
            const url = `https://reqres.in/api/unknown/${id}`;
            fetch(url)
                .then((res) => res.json())
                .then(({ data }) => setItems(data))
                .catch((e) => console.log(e));
        };
        getItems();
    }, [id]);

    const { name, year, color, pantone_value } = items;

    return (
        <>
            <h1>Items</h1>
            <div
                style={{
                    backgroundColor: `${color}`
                }}
            >
                <p>{name}</p>
                <p>{year}</p>
                <p>{pantone_value}</p>
            </div>
        </>
    );
}

export default Items;
