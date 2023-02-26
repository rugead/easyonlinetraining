import React from 'react';
import Parse from "parse";
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  // const [options, setOptions] = React.useState( {
  //   autoplay: true,
  //   controls: true,
  //   responsive: true,
  //   fluid: true,
  //   sources: [{
  //     src: 'https://media.baeckerei-muenzel.de/schulungsfilm-mehlstaub-nein-danke.mp4',
  //     type: 'video/mp4'
  //   }]
  // })
  const {onReady, courseId, options} = props;
  console.log('courseId: ', courseId);
  console.log('options: ', options);
  
  // React.useEffect(() => {
  //   if (courseId) {
  //     const getCourse = async function() {
  //       const parseQuery = new Parse.Query('Course')
  //       const currentCourse = await parseQuery.get(courseId )
  //       setOptions(currentCourse.attributes.video)
  //     }
  //     getCourse()
  //   } 
  // }, [courseId])
  

  React.useEffect(() => {
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

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, options, () => {
        player.log('player is ready');
        onReady && onReady(player);
      });

    // You can update player in the `else` block here, for example:
    } else {
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options, videoRef, onReady]);

  // Dispose the Video.js player when the functional component unmounts
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
    <div data-vjs-player>
      <video ref={videoRef} className='video-js vjs-big-play-centered' />
    </div>
  );
}

export default VideoJS;