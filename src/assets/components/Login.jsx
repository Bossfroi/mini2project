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
            </div>
        </form>
    </div>
</body>

    </section>
    
    </>
  )
}
