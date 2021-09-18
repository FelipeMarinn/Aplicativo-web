import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setData } from '../helpers/setData'

const HomeStyled = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 100px;
    padding-bottom: 100px;

    display: grid;
    justify-content: center;
    aling-items: center;
    grid-gap: 10px;
    grid-template-columns:  repeat(auto-fill, minMax(0, 300px));
    grid-template-rows: 100px, 100px;
    grid-template-areas:
    "header  header  header" 
    "sidebar content content";
        
    .image-content-1 {
      height: 350px;
      width: 100%;
      grid-area: header;
    } 
    .image-content-2 {
      height: 350px;
      width: 100%;
      grid-area: content;
    } 
    .image-content-3 {
      height: 350px;
      width: 100%;
      grid-area: sidebar;
    }  

    @media screen and (max-width: 627px) { 
      grid-template-rows: repeat(1fr);
      grid-template-areas:
        "header  header  header" 
        "sidebar sidebar sidebar"
        "content content content";
    }      
 
`

export const Home = () => {

    const dispatch = useDispatch()
    const { photoList } = useSelector(state => state.homeReducer)

    useEffect(() => {

      setData('photos').then( data => dispatch({
        type: 'GET_DATA_PHOTOS',
        payload: data
      }))
  
    }, [dispatch])

    return (
        <HomeStyled>
            {
                photoList.map( ({ title, url, id }) => {
                    return (
                        <div 
                          key={ title } 
                          className={`image-content-${id}`}
                          style={{ backgroundImage: `url(${ url })` }}></div>
                    )
                })
            }
        </HomeStyled>   
    )
}
