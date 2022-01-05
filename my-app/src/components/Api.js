import React from "react";


async function getOpenseaItems() {
    const osContainer = document.getElementById('openseaItems')

    const items = await fetch(`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50`)
        .then((res) => res.json())
        .then((res) => {
            return res.assets
        })
        .catch((e) => {
            console.error(e)
            console.error('Could not connect to OpenSea')
            return null
        })
    if (items.length === 0) { return }

    items.forEach(nft => {
        const { name, image_url, description, permalink } = nft 
        const newElement = document.createElement('div')
        newElement.innerHTML = `
            <h1>'${name}'</h1>
            <h1>'${permalink}</h1>
        `
        osContainer.appendChild(newElement);
    })
}
class Api extends React.Component {
    render() {
        return (
            <div id = "api">
                <button onclick = "getOpenseaItems()">Get Opensea Items</button>
                <div id = 'openseaItems'>
                
                </div>

                
            </div>
            
        );
    }
}

export default Api;