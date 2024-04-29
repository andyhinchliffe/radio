"use client";
import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Page = () => {
  const startNum = Math.floor(Math.random() * 3+1)
  const [currentTrack, setCurrentTrack] = useState(`./audio/track${startNum}.mp3`);
  const [lastTrack, setLastTrack] = useState (currentTrack)
  const d = new Date();
  let hour = d.getHours();
  const [currentHour, setCurrentHour] = useState(hour);


  const handleTrackEnd = () => {
    // Change the track when it ends
    const ranNum = Math.floor(Math.random() * 3+1);
    
    setCurrentTrack(`./audio/track${ranNum}.mp3`);
    if (currentTrack === lastTrack) {
      
      setCurrentTrack(`./audio/track1.mp3`);}
      
      
      setLastTrack(currentTrack);

    
    console.log(currentTrack);
  }

  return (<>
    <div className='mx-auto w-1/2'>
      <AudioPlayer
        src={currentTrack}
        showJumpControls={false}
        customAdditionalControls={[]}
        onEnded={handleTrackEnd} // Call handleTrackEnd function when track ends
        autoPlayAfterSrcChange={true}
        
        // other props here
        
      />
      {/* <p>Track</p> */}
      {/* <p>{currentTrack}</p> */}
      <p>{currentHour}</p>
    </div>
    <div className="flex justify-center">
  <table className="table w-1/2">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-gray-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
  </>);
};

export default Page;
