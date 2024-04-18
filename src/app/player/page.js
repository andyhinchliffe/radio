"use client";
import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';


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

  return (
    <div >
      <AudioPlayer
        src={currentTrack}
        showSkipControls={false}
        showJumpControls={false}
        onEnded={handleTrackEnd} // Call handleTrackEnd function when track ends
        autoPlayAfterSrcChange={true}
        
        // other props here
        
      />
      <p>Track</p>
      <p>{currentTrack}</p>
      <p>{currentHour}</p>
    </div>
  );
};

export default Page;
