import React from "react";


async function getOpenseaItems() {
    if (!window.userAddress) { return }
    const osContainer = document.getElementById('openseaItems')

    const items = await fetch(`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20`)
      .then((res) => res.json())
      .then((res) => {
        return res.assets
      })
      .catch((e) => {
        console.error(e)
        console.error('Could not talk to OpenSea')
        return null
      })

    if (items.length === 0) { return }

    items.forEach((nft) => {
      const { name, image_url, description, permalink } = nft

      const newElement = document.createElement('div')
      newElement.innerHTML = `
        <!-- Opensea listing item-->
        <a href='${permalink}' target="_blank">
          <div class='flex flex-col'>
            <img
              src='${image_url}'
              class='w-full rounded-lg' />
            <div class='flex-col w-full space-y-1'>
              <p class='text-gray-800 text-lg'>${name}</p>
              <p class='text-gray-500 text-xs word-wrap'>${description ?? ''}</p>
            </div>
          </div>
        </a>
        <!-- End Opensea listing item-->
      `

      osContainer.appendChild(newElement)
    })
  }
class Api extends React.Component {
    getOpenseaItems = () => {
      const osContainer = document.getElementById('openseaItems')
      const newElement = document.createElement('div')
      newElement.innerHTML = `<h1>HI</h1>`
      osContainer.appendChild(newElement);
    }
    render() {
        return (
            <div id = "api">
                <button onClick = {this.getOpenseaItems}>Get Opensea Items</button>
                <div id = 'openseaItems'>
                
                </div>

                
            </div>
            
        );
    }
}

export default Api;