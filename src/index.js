import Gliders from './Fetch';

 export default GlidersScript = { init : async function(componentId, apiKey) {

    let data = await Gliders(componentId,apiKey);
 
    const div = document.getElementById ("gliders-component");
    //const div = document.createElement('div');
        const node=    document.createRange()
        .createContextualFragment(data)

        div.insertBefore(node, div.firstChild);
  
    return div;


  }
}
  

  //document.body.appendChild(GlidersScript.init());
  