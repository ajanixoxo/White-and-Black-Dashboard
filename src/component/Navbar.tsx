
function Navbar() {
  return (
    <div className="fixed top-5 left-[35%] flex justify-center items-center">
        <nav className="border-[1.3px] hidden lg:flex justify-center items-center border-[#313131] p-2 w-max bg-black/40 backdrop-blur-lg rounded-3xl px-4">
            <ul className="text-white flex justify-between items-center gap-20">
                <li className="text-[#A0A0A0] font-semibold cursor-pointer border border-[#868686] p-2 rounded-3xl bg-white/10 backdrop-blur-lg px-4 hover:bg-[#d9d8d8] hover:text-[#292929] ease-in-out transition">Product</li>
                <li className="text-[#676767] font-semibold cursor-pointer hover:text-slate-300 transition">About</li>
                <li className="text-[#676767] font-semibold cursor-pointer hover:text-slate-300 transition">Blog</li>
                <li className="text-[#676767] font-semibold cursor-pointer hover:text-slate-300 transition">Pricing</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar