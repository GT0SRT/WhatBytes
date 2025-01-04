export default function Nav() {
    return(
        <div className="flex p-3 mt-2 border-b-2">
            <div className="flex gap-1">
                <img src="https://cdn-icons-png.flaticon.com/256/1252/1252478.png" className="w-8 h-7 m-1"></img>
                <h1 className="text-3xl font-bold">WhatBytes</h1>
            </div>
            <div className="ml-auto border-2 p-1 rounded-lg flex gap-2">
                <img src="https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png" className="rounded-full w-7"></img>
                <h3 className="font-bold pr-2">Rahil Siddique</h3>
            </div>
        </div>
    );
};