import React, { useState} from 'react';
import MyHeader from './header.jsx';


function Login() {
    const [user,setUser] = useState({
        'email':'',
        'password':'',
    });
    const handleChange = (updatedValue) => {
        setUser(user => ({
             ...user,
             ...updatedValue
           }));
         }
 const  handleLogin=(event)=>{
  console.log('Server Connection');
  console.log(user);
  
alert('To The Server');
alert('User:\n'+user);



}
    return ( 
        <div>
        <MyHeader status={1}/>
        <div className="container m-5">
            <p className="display-4 text-center">
              Login
            </p>
          <div className="row  justify-content-center m-5">
          <form className='mx-1 my-5' onSubmit={e => {handleLogin(e)}}>
        <div className="form-group ">
        <label>Email</label>
        <input 
          name='email' 
          type='email' 
          className="form-control my-1"
          placeholder="Enter email"
          defaultValue={user.email}
          onChange={(e) => handleChange({email:e.target.value})}
        />
        
        </div>
        <br />
        <div className="form-group">
        <label>Password</label>
        <br />
        <input 
          name='password' 
          type='password' 
          className="form-control my-1"
          placeholder="Enter Password"
       
          defaultValue={user.password}
      
          onChange={(e) => handleChange({password:e.target.value})}
   
        />
       
        </div>
       
        <div className="form-group m-1">
        <input 
          className='btn btn-dark  form-control my-5 p-2'
          type='submit' 
          placeholder='login'
          value='Login' 
        />
      
        </div>
        </form>
     
          </div>
       
        </div>
        </div>
     );
}

export default Login;