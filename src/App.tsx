
import './App.css'
import Navbar from './component/Navbar'
import Main from './Main/Main';
function App() {


  return (
    <div className="relative">
      <div className="absolute z-20  -top-44 flex w-full justify-between">
        <img src="left-light.png" className=" absolute top-0 -left-36 " alt="" />
        <img src="left-light.png" className=" absolute top-0 -right-36 rotate-[100deg]" alt="" />

      </div>
      <div className="absolute z-10 flex">
        <img src="bg2.png" alt="" className="w-1/2" />
        <img src="bg2.png" alt="" className="w-1/2" />

      </div>
      <div className='relative z-40 text-white'>
        <Navbar />
        <Main />
      </div>

    </div>
  )
}

export default App
