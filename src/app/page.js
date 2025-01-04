"use client";
import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Menu from "@/components/Menu";
import Mainpage from "@/components/Mainpage";
import Card from "@/components/Card";
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const isClicked = useSelector((state) => state.update_redux_slice.isClicked);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Component is rendered on the client side");
    }
  }, []);

  return (
    <div className={`${isClicked ? 'overflow-hidden relative w-full h-screen' : 'relative w-full h-screen'}`}>
      {isClicked && (
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      )}
      <div className={`${isClicked ? 'absolute' : 'absolute'}`}>
        <Nav />
        <div className="flex">
          <Menu />
          <Mainpage />
        </div>
      </div>
      <div className={`${isClicked ? 'absolute z-20' : 'hidden'}`}>
        <Card />
      </div>
    </div>
  );
};
