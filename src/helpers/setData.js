
export const setData = ( props ) => {

    return fetch(`https://jsonplaceholder.typicode.com/${props}`)
      .then( resp => resp.json() )
      .then( json => json )
      
}

