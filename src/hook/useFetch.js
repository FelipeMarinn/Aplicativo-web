import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const useFetch = ( props, type ) => {

    const dispatch = useDispatch()

    const setData = async(props) => {
        const url = `https://jsonplaceholder.typicode.com/${props}` 
        const resp = await fetch( url )
        const data = await resp.json()

        return data 
    }
   
    useEffect( () => {

        setData( props )
          .then( json => {
            dispatch({
                type: type,
                payload: json
            })
          })

    }, [props, type, dispatch]) 
 
}

