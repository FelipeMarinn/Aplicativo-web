import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const AlbumesStyled = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 100px;

  display: grid;
  grid-row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-column-gap: 20px;
  grid-template-columns: repeat(auto-fill, minMax(0, 300px));
  background: var(--background);
  justify-content: center;

  .album-content {
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 25px;
  }

  .album-info {
    padding: 10px 20px;
  }
`


export const Albumes = () => {

    const dispatch = useDispatch()
    const { albumList } = useSelector(state => state.albumsReducer)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
          .then(response => response.json())
          .then(json => dispatch({
              type: 'GET_DATA_ALBUMS',
              payload: json
          }))
    }, [ dispatch ])


    return (
        <AlbumesStyled>
            {
                albumList.map( ({ title, id }) => {
                    return (
                        <div key={ title } className='album-content'>
                            <img src='https://www.tuexpertoapps.com/wp-content/uploads/2017/10/old-1130731_640-600x450.jpg' alt='camara fotografica' width='100%'/>
                            <div className='album-info'>
                               <p><strong>Id:</strong> { id } </p>
                               <p><strong>Title:</strong> { title } </p>
                            </div>
                        </div>
                    )
                })
            }
        </AlbumesStyled>
    )
}
