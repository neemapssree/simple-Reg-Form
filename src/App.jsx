import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BASE_URL } from './constants/Constants';

function App() {  

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(BASE_URL, {name,email,password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  };

  return (
    <>
    <div className='registerSec w-100 d-flex flex-column justify-content-center'>
      <div className='row justify-content-center align-items-center'>        
        <div className='col-md-5 formSec p-5'>
          <h1 className='mb-4 text-center'>Register</h1>
          <form className='myForm' onSubmit={handleSubmit}>
            <div className='fieldGroup mb-3'>
              <label htmlFor="name" className='mb-2'>Name</label>
              <input className='w-100' type="text" id="name" name="name" placeholder='Enter Name' onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='fieldGroup mb-3'>
              <label htmlFor="email" className='my-2'>Email</label>
              <input className='w-100' type="email" id="email" name="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='fieldGroup mb-3'>
              <label htmlFor="password" className='my-2'>Password</label>
              <input className='w-100' type="password" id="password" name="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className='fieldGroup mb-3 d-flex flex-row justify-content-between'>
              <button type="submit" className='btn submitBtn'>Register Now</button>
              <button type="reset" className='btn resetBtn'>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
