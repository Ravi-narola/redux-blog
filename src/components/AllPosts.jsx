import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../store/thunk/fetchUser';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import { Form, Image, NavDropdown } from 'react-bootstrap';

function AllPosts() {
  let [radioData, setRadioData] = useState('')

  let myuser = useSelector(state => state.allusers)

  // console.log(myuser)

  let { data, isLoading, error, searchData } = myuser
  console.log(data);

  let onDel = (para) => {
    console.log(para);
    dispatch(deleteUser(para))
  }

  let nav = useNavigate()

  let getprev = (para) => {
    nav(`/${para.id}`)
  }

  let editpost = (para) => {
    // console.log(para);
    nav(`/edit/${para.id}`)
  }


  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(showUser())
  }, [])


  if (error) {
    return <h1>{error.message}</h1>
  }

  if (isLoading === true) {
    return <Loader />
  }

  return (
    <div>
      <div className="dashboard_bg rounded-bottom-5 border-top border-black-50 d-flex flex-wrap justify-content-between align-items-center bg-light text-success">
        <h4>ALL-POSTS</h4>
        <NavDropdown title="Select Gender" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
            <Form.Check
              type='radio'
              label='ALL'
              name='gender'
              value=''
              onChange={(e) => setRadioData(e.target.value)}
              checked={radioData === ''}
            />
          </NavDropdown.Item>

          <NavDropdown.Item href="#action/3.2">
            <Form.Check
              type='radio'
              label='Male'
              name='gender'
              value='male'
              onChange={(e) => setRadioData(e.target.value)}
              checked={radioData === 'male'}
            />
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">
            <Form.Check
              type='radio'
              label='Female'
              name='gender'
              value='female'
              onChange={(e) => setRadioData(e.target.value)}
              checked={radioData === 'female'}
            />
          </NavDropdown.Item>
        </NavDropdown>
      </div>


      <div className='my-5 mx-1 d-flex flex-wrap justify-content-between align-content-center gap-1'>
        {
          data && data
            // sorting search
            .filter(ele => {
              if (searchData.length === 0) {
                return ele
              } else {
                return ele.name.toLowerCase().includes(searchData.toLowerCase())
              }
            })
            .filter((ele) => {
              if (radioData === 'male') {
                return ele.gender === 'male'
              } else if (radioData === 'female') {
                return ele.gender === 'female'
              } else {
                return ele
              }
            })
            .map(ele => {
              return <div key={ele.id} className='card_size p-3 m-auto my-3 text-center text-dark border rounded-4 bg-light'>
                <Image src={ele.image} alt="" className='w-25 mb-2 h-25 object-fit-cover border-bottom border-5 border-dark' roundedCircle/>
                <hr />
                <h3 className='text-start'>{ele?.name}</h3>
                <div className='text-dark-emphasis text-start'>
                  <h6>Email : {ele?.email}</h6>
                  <h6>Gender : {ele.gender}</h6>
                  <p className="text-start text-dark-emphasis"><span className='fs-6 fw-semibold'>Descriptionn : </span>{ele.description.substr(0, 50)}...</p>
                </div>
                <div className=" p-3 d-flex justify-content-evenly">
                  <button className='btn btn-outline-warning'
                    onClick={() => getprev(ele)}
                  >Preview</button>
                  <button
                    className='btn btn-outline-warning'
                    onClick={() => editpost(ele)}
                  >Edit</button>
                  <button className='btn btn-outline-warning'
                    onClick={() => onDel(ele)}
                  >Delete</button>
                </div>
              </div>
            })
        }
      </div>

    </div>
  )

}

export default AllPosts