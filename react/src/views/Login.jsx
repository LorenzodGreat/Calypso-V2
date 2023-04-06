import { Link } from "react-router-dom";
import axiosClient from "../axios-client.js";
import { createRef } from "react";
import { useStateContext } from "../context/ContextProvider.jsx";
import { useState } from "react";
import MainNav from "../Components/MainNav.jsx";
import MainFoot from "../Components/MainFoot.jsx";
import CalypsoLogo from '../img/Calypso.png';

export default function Login() {
  const emailRef = createRef()
  const passwordRef = createRef()
  const { setUser, setToken } = useStateContext()
  const [message, setMessage] = useState(null)

  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    axiosClient.post('/login', payload)
      .then(({ data }) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message)
        }
      })
  }

  // return (
  //   <div className="login-signup-form animated fadeInDown">
  //     <div className="form">
  //       <form onSubmit={onSubmit}>
  //         <h1 className="title">Login into your account</h1>

  //         {message &&
  //           <div className="alert">
  //             <p>{message}</p>
  //           </div>
  //         }

  //         <input ref={emailRef} type="email" placeholder="Email"/>
  //         <input ref={passwordRef} type="password" placeholder="Password"/>
  //         <button className="btn btn-block">Login</button>
  //         <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
  //       </form>
  //     </div>
  //   </div>
  // )
  return (
    <>
      <MainNav />
      <section class=" dark:bg-[#290658]">
        <div class="m-auto xl:container px-12 sm:px-0 mx-auto">
          <div class="mx-auto h-full sm:w-max">
            <div class="m-auto pt-36  py-12">
              <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div class="px-6 py-4">
                  <div class="flex justify-center mx-auto">
                    <img class="w-auto h-7 sm:h-8" src={CalypsoLogo} alt="Calypso Logo" />
                  </div>

                  <h3 class="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

                  <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>
                  {message &&
                    <div className="alert">
                      <p>{message}</p>
                    </div>
                  }
                  <form onSubmit={onSubmit}>
                    <div class="w-full mt-4">
                      <input ref={emailRef} class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
                    </div>

                    <div class="w-full mt-4">
                      <input ref={passwordRef} class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
                    </div>

                    <div class="grid mt-4">

                      <button class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>

                <div class="flex items-center justify-center p-4 text-center bg-gray-50 dark:bg-gray-700">
                  <span class="text-sm text-gray-600 dark:text-gray-200">Can't remember your account info? </span>
                  <a href="#" class="text-sm text-sky-500 hover:text-fuchsia-500 ml-2">Forget Password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MainFoot />
    </>
  )
}
