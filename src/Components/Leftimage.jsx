import React from 'react';
import cloudsImage from '../Images/clouds.jpg';
import clearImage from '../Images/clear.jpg';
import hazeImage from '../Images/haze.jpg';
import rainImage from '../Images/rain.jpg';
import drizzleImage from '../Images/drizzle.jpg';
import thunderstormImage from '../Images/thunderstorm.jpg';
import snowImage from '../Images/snow.jpg';
import mistImage from '../Images/mist.jpg';
import dustImage from '../Images/dust.jpg';
import fogImage from '../Images/fog.jpg';
import sandImage from '../Images/sand.jpg';
import ashImage from '../Images/ash.jpg';
import squallImage from '../Images/squall.jpg';
import tornadoImage from '../Images/tornado.jpg';
import smokeImage from '../Images/smoke.jpg';



export default function Leftimage({ sky }) {
  const skyImageMapping = {
    Clouds:cloudsImage,
    Clear:clearImage,
    Haze: hazeImage,
    Rain:rainImage,
    Drizzle:drizzleImage,
    Thunderstorm:thunderstormImage,
    Snow:snowImage,
    Mist:mistImage,
    Dust:dustImage,
    Fog:fogImage,
    Sand:sandImage,
    Ash:ashImage,
    Squall:squallImage,
    Tornado:tornadoImage,
    Smoke:smokeImage
  };

  // Get the image path for the current sky condition, or fall back to a default image
  const imageUrl = skyImageMapping[sky] || clearImage;

  return (
    <div style={{ height: '100%' }}>
      <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '1px' }}>{sky}</h2>
      <img 
        src={imageUrl} 
        alt={`Weather condition: ${sky}`} 
        style={{ 
          width: '100%', 
          height: 'calc(100% - 40px)',  
          objectFit: 'cover', 
          
        }} 
      />
    </div>
  );
}
