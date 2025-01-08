import React from 'react'

function Navbar() {
  return (
    <div className="fixed top-5 w-full flex justify-center items-center">
        <nav className="border flex justify-center items-center border-[#161616] p-2 w-max bg-black/40 backdrop-blur-lg rounded-3xl px-4">
            <ul className="text-white flex justify-between items-center gap-20">
                <li className="text-[#A0A0A0] font-semibold cursor-pointer border border-[#292929] p-2 rounded-3xl px-4 hover:bg-[#A0A0A0] hover:text-[#292929] ease-in-out transition">Product</li>
                <li className="text-[#676767] font-semibold cursor-pointer hover:text-slate-300 transition">About</li>
                <li className="text-[#676767] font-semibold cursor-pointer hover:text-slate-300 transition">Blog</li>
                <li className="text-[#676767] font-semibold cursor-pointer hover:text-slate-300 transition">Pricing</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar