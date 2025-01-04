import { MdBarChart } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { IoDocumentOutline } from "react-icons/io5";

export default function Menu(){
    return(
        <div className="text-lg text-[gray] font-bold border-r-2 md:w-1/5 h-[160vh] pr-2 hidden md:block">
            <div className="flex">
                <div className="mt-10 flex gap-3 cursor-pointer p-4">
                    <MdBarChart />
                    <h5>Dashboard</h5>
                </div>
            </div>
            <div className="flex gap-3 cursor-pointer p-4 text-[#3838e8] bg-[#3180db15] rounded-r-full">
                <SlBadge />
                <h5>Skill Test</h5>
            </div>
            <div className="flex gap-3 cursor-pointer p-4">
                <IoDocumentOutline />
                <h5>Internship</h5>
            </div>
        </div>
    );
};