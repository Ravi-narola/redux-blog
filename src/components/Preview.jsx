import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Preview() {

  let [state, setstate] = useState(null)

  let { data } = useSelector(state => state.allusers)
  console.log(data);

  let { id } = useParams()
  console.log(id);

  useEffect(() => {
    let findData = data.find(ele => ele.id == id)
    console.log(findData);
    setstate(findData)
  }, [id])


  return (
    <div className='w-75 m-auto text-center my-5 p-3 rounded border border-2 border-dark-subtle bg-body-tertiary shadow-sm'>
      <img src={state?.image} className='border border-2 p-3' style={{ height: "200px", width: "200px", borderRadius: "50%" }} alt="" />
      <h3 className='py-4'>{state?.name}</h3>
      {/* <hr /> */}
      <p className="my-3 border border-2 p-3">
        {state?.description}
      </p>
      <h5 className='fw-bolder'>Contact me :- {state?.email}</h5>
    </div>
  )
}

export default Preview