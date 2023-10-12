import React from 'react'
import Navigation from './Navigation'
export default function Login() {
  return (
    <>
    <section>
    <>

   </>
    <body class="bg-gray-100 flex items-center justify-center h-screen">
    <div class="bg-white p-8  shadow-md w-96">
      <img src='/src/assets/components/images/Logo.png'></img>
        <h2 class="text-2xl font-semibold mb-4">Login</h2>
        <form>
            <div class="mb-3">
                <label for="email" class="block text-gray-600">Email</label>
                <input type="email" id="email" name="email" class="w-full p-2 border border-gray-300 rounded-md"></input>
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-600">Password</label>
                <input type="password" id="password" name="password" class="w-full p-2 border border-gray-300 rounded-md"></input>
            </div>
            <div class="mb-4">
                <button type="submit" class=" text-white py-2 px-4 rounded-md hover: bg-slate-500">Login</button>
               
             <div class=" mt-8 ml-28">
             <span>Login with...
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
            <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient>
            <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z">
            </path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
            </svg>
              </span>
             </div>
            </div>
        </form>
    </div>
</body>

    </section>
    
    </>
  )
}
