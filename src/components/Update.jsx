import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { updateUser } from '../store/thunk/fetchUser'

function Update() {
  let [state, setstate] = useState(null)

  let handleChange = (e) => {
    setstate(
      { ...state, [e.target.name]: e.target.value }
    )
  }

  let { data } = useSelector(state => state.allusers)
  console.log(data);

  let dispatch = useDispatch()

  let { id } = useParams()
  console.log(id);

  useEffect(() => {
    let findData = data.find(ele => ele.id == id)
    console.log(findData);
    setstate(findData)
  }, [id])

  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(state);
    dispatch(updateUser(state))
  }

  return (
    <div>
      <div className='bg_image_form rounded-4 border border-2 border-light text-white m-auto overflow-hidden shadow-sm mt-5'>
        {/* <h1 className="display-3 border-bottom border-3 pb-3 w-50">Update-POST</h1> */}
        <h3 className='text-center py-2 pe-3 text-uppercase border-bottom border-2 text-dark-50'>UPDATE <span className='text-secondary'>POST</span></h3>


          <form onSubmit={handleSubmit}  className='p-4 text-dark' >
            <Form.Control
              type="text"
              placeholder='Name'
              name="name"
              className='rounded border border-2 border-dark-subtle ps-3 p-1 w-100'
              value={state && state.name}
              onChange={handleChange}
            />
            <Form.Control
              type="text"
              placeholder='Name'
              name="email"
              className='my-3 rounded border border-2 border-dark-subtle ps-3 p-1 w-100'
              value={state && state.email}
              onChange={handleChange}
            />

            <Form.Control
              type="text"
              placeholder='IMAGE'
              name="image"
              className='my-3 rounded border border-2 border-dark-subtle ps-3 p-1 w-100'
              value={state && state.image}
              onChange={handleChange}
            />

            <div className="my-4 px-2">
              <label htmlFor="">Gender :- </label>
              <input
                type="radio"
                placeholder='Name'
                name="gender"
                className=' form-check-input ms-4 me-2'
                value="male"
                onChange={handleChange}
                checked={state && state.gender === 'male' ? true : false}
              />
              <label className='mx-3' htmlFor="">Male</label>
              
              <input
                type="radio"
                placeholder='Name'
                name="gender"
                className=' form-check-input ms-4 me-2'
                value="female"
                checked={state && state.gender === 'female' ? true : false}
                onChange={handleChange}
              />
              <label className='mx-3' htmlFor="">Female</label>
            </div>

            <textarea
              name="description"
              className='my-3 d-block rounded border border-2 border-dark-subtle ps-3 p-1 w-100'
              placeholder='DESCRIPTION'
              rows={'5'}
              cols={"50"}
              id=""
              value={state && state.description}
              onChange={handleChange}
            ></textarea>

            <Button type='submit' variant='outline-primary' className='d-block mx-auto text-uppercase'>
              UPDATE
            </Button>

          </form>
      </div>
    </div>
  )
}

export default Update