import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postUser } from '../store/thunk/fetchUser'

function CreatePost() {
  let [state, setstate] = useState({
    name: '',
    email: '',
    image: '',
    gender: '',
    description: ''
  })

  let dispatch = useDispatch()

  let handleChange = (e) => {
    setstate(
      { ...state, [e.target.name]: e.target.value }
    )
  }



  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(state);
    dispatch(postUser(state))
  }

  return (
    <div>

      <div className='bg_image_form rounded-4 border border-2 border-light text-white m-auto overflow-hidden shadow-sm mt-5'>
        <h3 className='text-center py-2 text-uppercase border-bottom border-2 text-dark-50'>CREATE <span className='text-secondary'>POST</span></h3>

        <form onSubmit={handleSubmit} className='p-4 text-dark' >
          <Form.Control
            type="text"
            placeholder='Name'
            name="name"
            className=' rounded border border-2 border-dark-subtle ps-3 p-1 w-100'
            value={state.name}
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            placeholder='Email'
            name="email"
            className='my-3 rounded border border-2 border-dark-subtle ps-3 p-1 w-100'
            value={state.email}
            onChange={handleChange}
          />

          <Form.Control
            type="text"
            placeholder='Image'
            name="image"
            className='my-3 rounded border border-2 border-dark-subtle ps-3 p-1 w-100'
            value={state.image}
            onChange={handleChange}
          />

          <div className="my-4 px-2">
          <label htmlFor="">Gender :- </label> 
          <input
              type="radio"
              name="gender"
              className=' form-check-input ms-4 me-2'
              value="male"
              onChange={handleChange}
              checked={state.gender === 'male' ? true : false}
            />
           
            <label className='' htmlFor="">Male</label>
            <input
              type="radio"
              name="gender"
              className=' form-check-input ms-4 me-2'
              value="female"
              checked={state.gender === 'female' ? true : false}
              onChange={handleChange}
            />
            <label className='mx-3' htmlFor="">Female</label>
          </div>

          <textarea
            name="description"
            className='my-3 d-block rounded border border-2 border-dark-subtle ps-3 p-1 w-100'
            placeholder='Description!'
            rows={'5'}
            cols={"50"}
            id=""
            value={state.description}
            onChange={handleChange}
          ></textarea>

          <Button type='submit' variant='outline-primary' className='d-block mx-auto text-uppercase '>
            SUBMIT
          </Button>

        </form>
      </div>

    </div>
  )
}

export default CreatePost