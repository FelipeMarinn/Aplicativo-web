import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const UsuariosStyled = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 100px;

    input {
        display: block;
        margin: 0 auto;
        margin-bottom: 100px;
        text-align: center;
        border: none;
        height: 48px;
        line-height: 48px;
        box-shadow: 0 0 5px rgba(0,0,0,.09);
        outline: 0;
        color: var(--black);
        background: var(--white);
        &::-webkit-input-placeholder {
            color: #c4c4c4;
        }
        &::-webkit-search-cancel-button {
          display: none;
        }
    }

    .user-content {
        display: flex;
        margin: 10px 20px;
    }
    .user-content-info {
        margin-left: 20px;
    }
`


export const Usuarios = () => {

   const dispatch = useDispatch()
   const state = useSelector(state => state.reducer)
   const { userList, userByName } = state
   const user = userByName.length > 0 ? userByName : userList

   console.log(userList)
   console.log(userByName)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => dispatch({
              type: 'GET_DATA_USERS',
              payload: json
          }))
    }, [ dispatch ])


    const handleInputChange = (e) => {
        
        dispatch({
            type: 'GET_USER_BY_NAME',
            payload: e.target.value
        })

    }
  
    return (
        <UsuariosStyled>

            <input 
              type='search'
              placeholder='Busca por nombre'
              onChange={ handleInputChange }/>

            {
                user.map( ({ name, phone, username, website }) => {
                    return (
                        <div key={ name } className='user-content'>
                            <img src='https://www.w3schools.com/css/img_avatar.png' alt='usuario foto' width='150px'/>
                            <div className='user-content-info'>
                               <p><strong>Nombre:</strong> { name } </p>
                               <p><strong>Telefono:</strong> { phone } </p>
                               <p><strong>Nombre Usuario:</strong> { username } </p>
                               <p><strong>Sitio Web:</strong> { website } </p>
                            </div>
                        </div>
                    )
                })
            }

        </UsuariosStyled>
    )
}
