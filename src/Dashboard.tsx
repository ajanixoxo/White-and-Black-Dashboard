import { useState } from 'react'
import { LayoutGrid, ChevronLeft, Layers, Calendar, MessageCircleMore, FileText, CircleUser, Mail, Settings, BellDot, Plus, AlignCenter, Filter, Search, ArrowDownNarrowWide } from 'lucide-react'
import Ade from '/ade.jpg';
function Dashboard() {

  const [dropDown, setOpenDropdowns] = useState<Set<string>>(new Set(['dropdown1', 'dropdown2']));

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdowns((prevOpenDropdowns) => {
      const newOpenDropdowns = new Set(prevOpenDropdowns);
      if (newOpenDropdowns.has(dropdownName)) {
        newOpenDropdowns.delete(dropdownName);
      } else {
        newOpenDropdowns.add(dropdownName);
      }
      return newOpenDropdowns;
    });
  };


  return (
    <div className="w-full">
      <div className="w-[100%] flex flex-1 bg-black/40 rounded-lg backdrop-blur-xl">
        <aside id="separator-sidebar" className={`w-[40%] bg-black/30 backdrop-blur-md`} aria-label="Sidebar">

          <div className="h-full px-3 py-4 overflow-y-auto space-y-3">

            <div className="flex items-center gap-2 w-max">
              <img src={Ade} alt="" className="w-9 h-9 object-cover rounded-full" />
              <div>
                <h1 className="text-[#A5A5A5] text-[10px] font-semibold">Adeoluwa Gbenro</h1>
                <p className="text-[#676767] text-[8px]">joelayomide35@gmail.com</p>
              </div>
            </div>

            <ul className="space-y-1 font-medium">
              <li>
                <button
                  onClick={() => toggleDropdown('dropdown1')}>
                  <a href="#" className="flex justify-start gap-1 items-center  text-[#A9A9A9] rounded-lg dark:text-white group">
                    {/* <LayoutGrid className="text-white" /> */}
                    <span className=" text-sm">Dashboard</span>
                    <ChevronLeft className="text-white -rotate-90 w-4 mt-2" />
                  </a>
                </button>
                {dropDown.has('dropdown1') && (
                  <div className="pl-2 mt-4">
                    <ul className="space-y-4">
                      <li className="bg-white/20  rounded-md p-1">
                        <a href="#" className="flex justify-start gap-2 items-center  text-[#A9A9A9] rounded-lg dark:text-white ">
                          <LayoutGrid className="text-white w-4" />
                          <span className=" text-[13px]">Overview</span>

                        </a>
                      </li>
                      <li className="hover:bg-white/20 p-1 transition hover:rounded-md ease-in-out">
                        <a href="#" className="flex justify-start gap-2 items-center  text-[#A9A9A9] rounded-lg dark:text-white ">
                          <Layers className="text-white w-4" />
                          <span className=" text-[13px]">Task</span>

                        </a>
                      </li>
                      <li className="hover:bg-white/20 p-1 transition hover:rounded-md ease-in-out">
                        <a href="#" className="flex justify-start gap-2 items-center  text-[#A9A9A9] rounded-lg dark:text-white ">
                          <Calendar className="text-white w-4" />
                          <span className=" text-[13px]">Calendar</span>

                        </a>
                      </li>
                      <li className="hover:bg-white/20 p-1 transition hover:rounded-md ease-in-out">
                        <a href="#" className="flex justify-start gap-2 items-center  text-[#A9A9A9] rounded-lg dark:text-white ">
                          <MessageCircleMore className="text-white w-4" />
                          <span className=" text-[13px]">Chats</span>

                        </a>
                      </li>
                      <li className="hover:bg-white/20 p-1 transition hover:rounded-md ease-in-out">
                        <a href="#" className="flex justify-start gap-2 items-center  text-[#A9A9A9] rounded-lg dark:text-white ">
                          <FileText className="text-white w-4" />
                          <span className=" text-[13px]">Report</span>

                        </a>
                      </li>
                    </ul>
                  </div>
                )}


              </li>

            </ul>

            <ul className="space-y-2 font-medium">
              <li >
                <button
                  onClick={() => toggleDropdown('dropdown2')}>
                  <a href="#" className="flex justify-start gap-1 items-center  text-[#A9A9A9] rounded-lg dark:text-white group">
                    {/* <LayoutGrid className="text-white" /> */}
                    <span className=" text-sm">Tools</span>
                    <ChevronLeft className="text-white -rotate-90 w-4 mt-2" />
                  </a>
                </button>
                {dropDown.has('dropdown2') && (
                  <div className="pl-2 mt-4">
                    <ul className="space-y-4">
                      <li className="hover:bg-white/20 p-1 transition hover:rounded-md ease-in-out">
                        <a href="#" className="flex justify-start gap-2 items-center  text-[#A9A9A9] rounded-lg dark:text-white ">
                          <CircleUser className="text-white w-4" />
                          <span className=" text-[13px]">Members</span>

                        </a>
                      </li>

                      <li className="hover:bg-white/20 p-1 transition hover:rounded-md ease-in-out">
                        <a href="#" className="flex justify-start gap-2 items-center  text-[#A9A9A9] rounded-lg dark:text-white ">
                          <Mail className="text-white w-4" />
                          <span className=" text-[13px]">Messages</span>

                        </a>
                      </li>


                    </ul>
                  </div>
                )}


              </li>

            </ul>

            {/* <div className="bg-transparent border border-[]">
              <span className="">Task Manager</span>
            </div> */}
          </div>

        </aside>
        <div className="w-full mt-10 p-2">
          <nav className="flex justify-between items-center">
            <h1 className="text-[#B0B0B0] font-semibold text-[14px]">Overview</h1>
            <div className="flex  items-center gap-2">
              <div className="bg-white/30 backdrop-blur-md rounded-full p-2">
                <Settings className="text-white" />
              </div>
              <div className="bg-white/30 backdrop-blur-md rounded-full p-2">
                <BellDot className="text-white w-auto" />
              </div>
              <button className="flex justify-center gap-2 bg-[#343434] rounded-md p-1">
                <Plus className="text-white w-4" />
                <h1 className="text-[#989898] font-semibold text-[13px]">Create Task</h1>
              </button>
            </div>
          </nav>

          <div>

            <div>
              <h1 className="text-[#B0B0B0] font-semibold text-[19px]">Welcome Back Adeoluwa!</h1>
              <p className="text-[#505050] font-semibold text-[9px]">Manage your daily task, monitor progress</p>
            </div>

            <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-4 gap-6">

              <div className="border p-2 w-auto border-[#6f6f6f] space-y-5 rounded-md bg-[#111111]">
                <p className="text-[#525252] font-semibold text-[10px]">Active Projects</p>

                <h1 className="text-[#BFBFBF] font-semibold text-[24px]">24</h1>

              </div>

              <div className="border p-2 border-[#6f6f6f] space-y-5 rounded-md bg-[#111111]">
                <p className="text-[#525252] font-semibold text-[10px]">Active Employees</p>

                <h1 className="text-[#BFBFBF] font-semibold text-[24px]">132</h1>

              </div>

              <div className="border p-2 border-[#6f6f6f] space-y-5 rounded-md bg-[#111111]">
                <p className="text-[#525252] font-semibold text-[10px]">Pending Tasks</p>

                <h1 className="text-[#BFBFBF] font-semibold text-[24px]">28.31%</h1>

              </div>

              <div className="border p-2 border-[#6f6f6f] space-y-5 rounded-md bg-[#111111]">
                <p className="text-[#525252] font-semibold text-[10px]">Completed Task</p>

                <h1 className="text-[#BFBFBF] font-semibold text-[24px]">72.45%</h1>

              </div>

            </div>

            <div className="flex justify-between mt-10 items-center">
              <div className="flex gap-5">
                <div className="flex gap-2 items-center bg-[#262626] p-1 px-4 rounded-md">
                  <Layers className='w-3' />
                  <h1 className="text-[#B0B0B0] font-semibold text-[13px]">Task</h1>
                </div>
                <div className="flex gap-2 items-center bg-[#262626] p-1 px-4 rounded-md">
                  <Calendar className='w-3' />
                  <h1 className="text-[#B0B0B0] font-semibold text-[13px]">Calender</h1>
                </div>
                <div className="flex gap-2 items-center bg-[#262626] p-1 px-4 rounded-md">
                  <AlignCenter className='w-3' />
                  <h1 className="text-[#B0B0B0] font-semibold text-[13px]">Timeline</h1>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex gap-2 items-center bg-[#262626] p-1 px-4 rounded-md">
                  <Filter className='w-3' />

                </div>
                <div className="flex gap-2 items-center bg-[#262626] p-1 px-4 rounded-md">
                  <ArrowDownNarrowWide className='w-3' />

                </div>
                <div className="flex gap-2 items-center bg-[#262626] p-1 px-4 rounded-md">
                  <Search className='w-3' />

                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3 gap-6">

              <div className="border p-2 pt-4 w-auto border-[#6f6f6f] space-y-5 rounded-md bg-[#111111]">
                <p className="bg-[#525252] rounded-xl text-[#525252] w-7/12 p-1 bg- flex gap-2 items-center font-semibold text-[10px]">
                  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width={14} height={14} fill="url(#pattern0_2001_60)" />
                    <defs>
                      <pattern id="pattern0_2001_60" patternContentUnits="objectBoundingBox" width={1} height={1}>
                        <use xlinkHref="#image0_2001_60" transform="scale(0.0188679)" />
                      </pattern>
                      <image id="image0_2001_60" width={53} height={53} xlinkHref="data:image/png;base64,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" />
                    </defs>
                  </svg>


                  <span className="text-white">Active Projects</span>
                  <span className="bg-white rounded-2xl w-8 h-4 flex items-center justify-center">12</span>
                </p>

                <h1 className="text-[#BFBFBF] font-semibold text-[24px]">24</h1>

              </div>

              <div className="border p-2 pt-4  w-auto border-[#6f6f6f] space-y-5 rounded-md bg-[#111111]">
                <p className="bg-[#e154549a] rounded-xl text-[#525252] w-7/12 p-1 bg- flex gap-2 items-center font-semibold text-[10px]">
                  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width={14} height={14} fill="url(#pattern0_2001_53)" />
                    <defs>
                      <pattern id="pattern0_2001_53" patternContentUnits="objectBoundingBox" width={1} height={1}>
                        <use xlinkHref="#image0_2001_53" transform="scale(0.0185185)" />
                      </pattern>
                      <image id="image0_2001_53" width={54} height={54} xlinkHref="data:image/png;base64,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" />
                    </defs>
                  </svg>







                  <span className="text-white">Active Projects</span>
                  <span className="bg-white rounded-2xl w-8 h-4 flex items-center justify-center">12</span>
                </p>

                <h1 className="text-[#BFBFBF] font-semibold text-[24px]">24</h1>

              </div>

              <div className="border p-2 pt-4  w-auto border-[#6f6f6f] space-y-5 rounded-md bg-[#111111]">
                <p className="bg-[#6c500ab1] rounded-xl text-[#525252] w-7/12 p-1 bg- flex gap-2 items-center font-semibold text-[10px]">
                  <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width={13} height={12} fill="url(#pattern0_2001_46)" />
                    <defs>
                      <pattern id="pattern0_2001_46" patternContentUnits="objectBoundingBox" width={1} height={1}>
                        <use xlinkHref="#image0_2001_46" transform="matrix(0.0200669 0 0 0.0217391 -0.00167224 0)" />
                      </pattern>
                      <image id="image0_2001_46" width={50} height={46} xlinkHref="data:image/png;base64,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" />
                    </defs>
                  </svg>




                  <span className="text-white">Active Projects</span>
                  <span className="bg-white rounded-2xl w-8 h-4 flex items-center justify-center">16</span>
                </p>

                <h1 className="text-[#BFBFBF] font-semibold text-[24px]">24</h1>

              </div>



            </div>



          </div>
        </div>

      </div>

     
    </div>
  )
}

export default Dashboard