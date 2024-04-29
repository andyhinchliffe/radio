"use client";
import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useState } from 'react';


const page = () => {

    const nextTrack = () => {
      const ranNum = Math.floor(Math.random() * 8+1);
      setPath(`./audio/lofi128/track${ranNum}.mp3`);
      console.log(path);

      
    }
    const [isOpen, setIsOpen] = useState(false);
    const [path, setPath] = useState(`./audio/lofi128/track1.mp3`);

  return (<>
  <div className="bg-[#9a9488]">
    <div className="bg-[url('/retro_radio.jpg')] bg-contain  bg-fixed  bg-center bg-no-repeat h-screen bg grid grid-cols-2">
    <div></div>
    <div className="font-bold text-5xl flex items-center ml-10"><div>Focus Radio<div className="text-base">24 Hour Focus Beats</div>
    
    
    
    <AudioPlayer src={path} onEnded={nextTrack} showJumpControls={false} customProgressBarSection={[]}
        customAdditionalControls={[]} className=" mt-4 rounded-xl" />
    <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="text-sm">Current Show - The Lo fi Showcase</div>
  
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-52 text-sm">
    {/* <li> Up Next - The Beats Show</li> */}
    <li><a onClick={() => setIsOpen(!isOpen)}>Full Timetable</a></li>
  </ul>
  </div>{isOpen? <div className="overflow-x-auto">
  <table className="table mt-10">
    {/* head */}
    <thead>
      <tr>
        
        <th>Time (GMT)</th>
        <th>Show</th>
        <th>Style</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="rounded-xl bg-base-200">
        
        <td>8.00 - 10.00</td>
        <td>The Quality Control Show</td>
        <td>Lo-fi</td>
      </tr>
      {/* row 2 */}
      <tr>
        
        <td>10.00 - 12.00</td>
        <td>The Full Trunk</td>
        <td>Funk</td>
      </tr>
      {/* row 3 */}
      <tr>
        
        <td>12.00 - 14.00</td>
        <td>Worldwide Disco</td>
        <td>Disco</td>
      </tr>
    </tbody>
  </table>
</div>:null}</div>
</div>
        
    
    </div>
    
    </div>
    


    
    </>)
}

export default page



