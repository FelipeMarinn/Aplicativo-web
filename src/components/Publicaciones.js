import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from './Form'
import styled from 'styled-components'

const PublicacionesStyled = styled.div` 
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;

  .posts { 
    display: grid;
    grid-row-gap: 2.3em;
    grid-auto-flow: columns;
    grid-column-gap: 50px;
    grid-template-columns: repeat(auto-fill, minMax(0, 300px));
    background: var(--background);
    justify-content: center;
    padding: 3em 0;
    margin: 0 20px;
  }
`


export const Publicaciones = () => {

    const dispatch = useDispatch()
    const { postList } = useSelector(state => state.postsReducer)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(json => dispatch({
              type: 'GET_DATA_POSTS',
              payload: json
          }))
    }, [ dispatch ])


    return (
        <PublicacionesStyled>

            <Form />

            <div className='posts' >
            {
                postList.map( ({ title, body }) => {
                    return (
                        <div key={ title }>
                            <h3>{ title }</h3>
                            <p>{ body }</p>
                        </div>
                    )
                })
            }
            </div>
            
        </PublicacionesStyled>
    )
}