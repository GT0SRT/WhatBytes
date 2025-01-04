"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { toggleClick, updateRank, updatePercentile, updateScore } from '../redux/updateSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Card() {
    const isClicked = useSelector((state) => state.update_redux_slice.isClicked);
    const dispatch = useDispatch();
    const handleToggle = () => {
        dispatch(toggleClick()); 
    };
    const [rank, setRank] = useState(useSelector((state) => state.update_redux_slice.rank));
    const [percentile, setPercentile] = useState(useSelector((state) => state.update_redux_slice.percentile));
    const [score, setScore] = useState(useSelector((state) => state.update_redux_slice.score));

    const handleSave = (e) => {
        e.preventDefault();

        if (!rank || !percentile || !score) {
            alert("All fields are required!");
            return;
        }
        else if(score>15 || score<0){
            alert("score should not be more than 15 or negative");
            return;
        }

        dispatch(updateRank(rank));
        dispatch(updatePercentile(percentile));
        dispatch(updateScore(score));
        handleToggle();
    };

    return(
        <div className="bg-transparent items-center justify-center flex w-[98vw] h-[100vh]">
        <div className="gap-3 w-[80%] md:w-[50vw] p-3 shadow-md bg-white rounded-lg">
            <div className="flex p-3 pb-0">
                <h2 className="font-bold text-[14px] md:text-lg">Update Scores</h2>
                <img className="w-6 h-8 md:w-8 ml-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"></img>
            </div>
            <div className="flex p-3 mt-3">
                <div className="bg-[navy] rounded-full p-1 text-white w-7 h-7 text-center">1</div>
                <p className="pl-3">Update your <span className="font-bold">Rank</span></p>
                <input
                    className="ml-auto border-[1px] p-2 pt-1 pb-1 h-7 w-1/3 text-sm rounded-sm border-blue-600 focus:outline-none focus:ring-0"
                    type="text"
                    placeholder="Rank"
                    name="rank"
                    required
                    value={rank}
                    onChange={(e) => setRank(e.target.value)}
                />
            </div>
            <div className="flex p-3">
                <div className="bg-[navy] rounded-full p-1 text-white w-7 h-7 text-center">2</div>
                <p className="pl-3">Update your <span className="font-bold">Percentile</span></p>
                <input 
                    className="ml-auto border-[1px] p-2 pt-1 pb-1 h-7 w-1/3 text-sm rounded-sm border-blue-600"
                    type="text"
                    placeholder="Percentile"
                    name="percentile"
                    required
                    value={percentile}
                    onChange={(e) => setPercentile(e.target.value)}
                />
            </div>
            <div className="flex p-3">
                <div className="bg-[navy] rounded-full p-1 text-white w-7 h-7 text-center">3</div>
                <p className="pl-3">Update your <span className="font-bold">Current Score (out of 15)</span></p>
                <input 
                    className="ml-auto border-[1px] p-2 pt-1 pb-1 h-7 w-1/3 text-sm rounded-sm border-blue-600"
                    type="text"
                    name="score"
                    placeholder="Score"
                    required
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                />
            </div>
            <div className="flex p-1 ml-[36%] md:ml-[60%]">
                <button onClick={handleToggle} className="border-2 p-2 h-[100%] text-[14px] text-[navy] hover:bg-[navy] hover:text-white font-bold m-1 mr-5 border-[navy] rounded-lg">Cancel</button>
                <button onClick={handleSave} className="border-2 p-2 h-[100%] bg-[navy] text-[14px] text-white hover:bg-[blue] font-bold m-1 border-[navy] rounded-lg">Save<FaArrowRight className=" m-1 inline"/></button>
            </div>
        </div>
        </div>
    );
};