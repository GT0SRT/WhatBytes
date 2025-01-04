"use client";
import { useState } from "react";
import Card from "./Card";
import DonutChart from "@/components/DonutChart";
import LineChart from "./LineChart";
import { toggleClick } from '../redux/updateSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Mainpage(){
    const isClicked = useSelector((state) => state.update_redux_slice.isClicked);
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleClick());
    };
    const rank = useSelector((state) => state.update_redux_slice.rank); 
    const percentile = useSelector((state) => state.update_redux_slice.percentile); 
    const score = useSelector((state) => state.update_redux_slice.score); 
    const totalMarks = 15;

    return(
        <div className="p-7">
        <h1 className="text-[gray]">Skill Test</h1>
        <div className="flex flex-col gap-5 md:flex-row">
            <div className="md:w-3/5">
                <div className="flex border-2 rounded-md p-3 pl-1 pr-1 mt-3">
                    <img className="w-12 h-16 md:w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"></img>
                    <div className="p-2">
                        <h2 className="font-bold text-[14px] md:text-lg">Hyper Text Markup Language</h2>
                        <p className="text-[gray] font-semibold text-[11px] md:text-[14px]">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021 </p>
                    </div>
                    <button onClick={handleToggle} className="border-2 p-2 h-[100%] bg-[navy] text-[14px] text-white hover:bg-[blue] font-bold m-3 mr-1 ml-1 border-[navy] rounded-lg">Update</button>
                </div>
                <div className="border-2 rounded-md p-3 pr-1 mt-3">
                    <h2 className="font-bold">Quick Statistics</h2>
                    <div className="flex">
                        <div className="flex gap-2 p-2">
                            <img className="mt-2 w-10 h-10 bg-[#3180db15] border-2 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Trophy_Flat_Icon.svg/2048px-Trophy_Flat_Icon.svg.png"></img>
                            <div className="border-r-2 pr-2">
                                <h1 className="text-[14px] md:text-xl font-bold">{rank}</h1>
                                <p className="text-[gray] text-[11px] md:text-sm font-semibold">YOUR RANK</p>
                            </div>
                        </div>
                        <div className="flex gap-2 ml-2 p-2">
                            <img className="mt-2 w-10 h-10 bg-[#3180db15] border-2 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Task.svg"></img>
                            <div className="border-r-2 pr-2">
                                <h1 className="text-[14px] md:text-xl font-bold">{percentile}%</h1>
                                <p className="text-[gray] text-[10px] md:text-sm font-semibold">PERCENTILE</p>
                            </div>
                        </div>
                        <div className="flex gap-2 ml-5 p-2">
                            <img className="w-7 h-7 md:w-10 md:h-10 p-1 bg-[#3180db15] border-2 rounded-full" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/44-512.png"></img>
                            <div className="pr-2">
                                <h1 className="text-[14px] md:text-xl font-bold">{score} / 15</h1>
                                <p className="text-[gray] text-[11px] md:text-sm font-semibold">CORRECT ANSWERS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-2 rounded-md p-3 mt-3">
                    <h2 className="font-bold">Comparison Graph</h2>
                    <div className="flex text-sm w-[95%] text-gray-600 p-1 gap-2">
                        <p className="mt-2"><span className="font-bold">You Scored {percentile}% Percentile</span> which is lower than the 
                        average Percentile 72% of all the engineers who took this assessment</p>
                        <img className="w-10 h-10 bg-[#3180db15] border-2 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIPjih74aUm4iTNet1tvPborvKJRKDlytLA&s"></img>
                    </div>
                    // <div className="p-3"><LineChart /></div>
                </div>
            </div>
            <div className="md:w-2/5">
                <div className="border-2 rounded-md p-3 mt-3">
                    <h2 className="font-bold">Syllabus Wise Analysis</h2>
                    <div className="p-3 pr-0 pl-0 mt-7">
                        <p className="text-gray-500 text-sm font-semibold">HTML Tools, Forms, History</p>
                        <div className="flex gap-5">
                            <div className="w-[80%] h-2 mt-2 bg-blue-100 rounded-full">
                                <div className="w-[80%] h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            <p className="text-blue-500 font-bold">80%</p>
                        </div>
                    </div>
                    <div className="p-3 pr-0 pl-0">
                        <p className="text-gray-500 text-sm font-semibold">Tags & References in HTML</p>
                        <div className="flex gap-5">
                            <div className="w-[80%] h-2 mt-2 bg-orange-100 rounded-full">
                                <div className="w-[60%] h-2 bg-orange-400 rounded-full"></div>
                            </div>
                            <p className="text-orange-500 font-bold">60%</p>
                        </div>
                    </div>
                    <div className="p-3 pr-0 pl-0">
                        <p className="text-gray-500 text-sm font-semibold">Tables & References in HTML</p>
                        <div className="flex gap-5">
                            <div className="w-[80%] h-2 mt-2 bg-red-100 rounded-full">
                                <div className="w-[24%] h-2 bg-red-500 rounded-full"></div>
                            </div>
                            <p className="text-red-500 font-bold">24%</p>
                        </div>
                    </div>
                    <div className="p-3 pr-0 pl-0">
                        <p className="text-gray-500 text-sm font-semibold">Tables & CSS Basics</p>
                        <div className="flex gap-5">
                            <div className="w-[80%] h-2 mt-2 bg-green-100 rounded-full">
                                <div className="w-[96%] h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <p className="text-green-500 font-bold">96%</p>
                        </div>
                    </div>
                </div>
                <div className="border-2 rounded-md p-3 mt-3">
                    <div className="flex">
                        <h2 className="font-bold">Question Analysis</h2>
                        <p className="text-[Navy] ml-auto text-sm font-semibold">{score}/15</p>
                    </div>
                    <p className="mt-2 text-gray-600 text-sm p-1"><span className="font-bold">You Scored {score} Questions correct out of 15. </span> 
                    However it still needs some improvements</p>
                    // <DonutChart />
                </div>
            </div>
       </div>
       </div>
    );
};
