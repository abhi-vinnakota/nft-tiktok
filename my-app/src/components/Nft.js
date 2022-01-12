import React from "react";

class Nft extends React.Component {
    getOpenseaItems = () => {
      const osContainer = document.getElementById('openseaItems')

      const options = {method: 'GET'};

      fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .then(response => {
          return response.assets
        })
        .catch(err => console.error(err));
      
      if(options.length === 0) {return}
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

export default Nft;