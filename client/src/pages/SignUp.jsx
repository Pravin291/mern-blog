import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import img1 from '../assets/images/contact2.jpg'
import OAuth from "../components/OAuth";


export default function SignUp() {
  const [formData,setFormData] = useState({})
  const [errorMessage,setErrorMessage] = useState(null);
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
     const handleChange = (e) =>{
      setFormData({...formData, [e.target.id]: e.target.value.trim()});
     };
     const handleSubmit = async (e) =>{
      e.preventDefault();
      if(!formData.username || !formData.email || !formData.password)
      return setErrorMessage('Please fill out all fields.')
      try {
        setLoading(true)
        setErrorMessage(null)
        const res = await fetch('/api/auth/signup',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(formData)
        })
        const data = await res.json()
        if(data.success === false){
          return setErrorMessage(data.message)
        }
        setLoading(false)
        if(res.ok){
          navigate('/signin')
        }
      } catch (error) {
        setErrorMessage(error.message);
        setLoading(false)
      }
     }
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1 ">
          <img
            src={img1} 
            alt="Blog Logo"
            className="mr-2" // Adjust the margin as needed
            style={{ width: "326px", height: "auto", marginRight:'-1rem'}} // Adjust the size as needed
          />
          {/* <Link to="/" className="font-bold dark:text-white text-xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white text-4xl">
              Pravin's
            </span>
            Blog
          </Link> */}
          <p className="text-sm mt-5 font-semibold ">
            Join our blog project to be part of a diverse community of writers
            and readers, engaging in discussions on topics ranging from
            technology to lifestyle.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4 mr-5" onSubmit={handleSubmit}>
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" onChange={handleChange}/>
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="email" placeholder="name@company.com" id="email" onChange={handleChange}/>
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="password" placeholder="Password" id="password" onChange={handleChange}/>
            </div>
            <Button gradientDuoTone={"purpleToPink"} type="submit" disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                  <spa className='pl-3'>Loading...</spa>
                  </>
                ) : 'Sign Up'
              }
              </Button>
              <OAuth/>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/signin" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className="mt-5" color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}
