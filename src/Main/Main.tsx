
import Dashboard from '../Dashboard'
import Siderbar from '../component/Siderbar'
function Main() {
  return (
    <div className="flex w-full mt-[7%]  flex-col lg:flex-row justify-start items-start lg:asbolute">
        <Siderbar />
        <Dashboard />
    </div>
  )
}

export default Main