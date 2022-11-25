import React from 'react'

function Background() {
  return (
    <video
      style={{
        objectFit: 'cover',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        opacity: 0.5,
        zIndex: -1
      }}
      playsInline
      autoPlay
      muted
      loop
      poster='polina.jpg'
      id='bgvid'
    >
      <source src='background.mp4' type='video/mp4' />
    </video>
  )
}
export default Background
