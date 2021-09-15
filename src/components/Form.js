import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'

const FormStyled = styled.div`

  .inputPost {
      margin-right: 20px;
      height: 3em;
  }

  .btn {
    height: 56px;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 4px; 
    font-size: 1em;
    color: #fff;
    background-color: #0781b2;
  }
  form {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .inputPost {
      display: block;
      margin-right: 0;
      margin-bottom: 20px;
    }
    form {
      display: block;
      width: 60%;
      margin: 0 auto;
      text-align: left;
    }
  }
`


export const Form = () => {

    const dispatch = useDispatch()

    const [inputTitle, setInputTitle] = useState('')
    const [inputBody, setInputBody] = useState('')

    const [leyendaTitle, setLeyendaTitle] = useState('')
    const [leyendaBody, setLeyendaBody] = useState('')

    const [ errorTitle, setErrorTitle ] = useState(false)
    const [ errorBody, setErrorBody ] = useState(false)


    const handleInputBody = (e) => {
        const value = e.target.value
        setInputBody(value)

        if ( value.length < 10 || value.length > 100 ) {
            setErrorBody(true)
            setLeyendaBody('debe tener entre 10 a 100 caracteres')
        } else {
            setErrorBody(false)
            setLeyendaBody('')
        }
    }

    const handleInputTitle = (e) => {
        const value = e.target.value
        setInputTitle(value)

        if ( value.length < 5 ) {
            setErrorTitle(true)
            setLeyendaTitle('debe tener almenos 5 caracteres')
        } else {
            setErrorTitle(false)
            setLeyendaTitle('')
        }
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        if ( inputTitle && inputBody ) {
            if ( !errorTitle && !errorBody ) {
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                      title: inputTitle,
                      body: inputBody,
                      userId: 1,
                    }),
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                    },
            
                  })
                  .then((response) => response.json())
                  .then((json) => dispatch({
                      type: 'SET_POST_DATA',
                      payload: json
                  }))
                  
            } else {
                return false
            }
        }
      
    }

    return (
        <FormStyled>
            <form>
              <TextField
                className='inputPost'
                error={ errorTitle }
                label="Some awesome title"
                helperText={ leyendaTitle }
                variant="filled"
                value={ inputTitle }
                onChange={ handleInputTitle }
              />
              <TextField
                className='inputPost'
                error={ errorBody }
                label="What happened today"
                helperText={ leyendaBody }
                multiline
                variant="filled"
                value={ inputBody }
                onChange={ handleInputBody }
              />

              <button className='btn' type='submit' onClick={ handleSubmit } > Publicar </button>  
            </form>
        </FormStyled>
    )
}
