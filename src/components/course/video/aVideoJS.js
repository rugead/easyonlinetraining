import React, { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

const VideoPlayer = ({ options, courseid }) => {
  const videoRef = useRef(null)
  const playerRef = useRef(null)

  useEffect(() => {
      
    const onReady = (player) => {
      playerRef.current = player;
      
      player.on('playing', () => {
        console.log('player is playing');
      });
      player.on('ended', () => {
        // setShowQuizButton(true)
        console.log("ended")
      })
      player.on('timeupdate', () =>{
        console.log('player on timeupdate');
      })
      player.on('waiting', () => {
        console.log('player is waiting');
      });   
      player.on('dispose', () => {
        console.log('player will dispose');
      });
    };  
  

    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);
        });

        // player.current = videojs(container.current, options)
        // return () => {
        //   player.current.dispose()
        // }
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, courseid])

  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player key={courseid}>
       <video ref={videoRef} className='video-js vjs-big-play-centered' />
    </div>
  )
}

export default VideoPlayer