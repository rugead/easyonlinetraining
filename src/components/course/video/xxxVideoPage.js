import React from 'react'
import VideoPlayer from './VideoPlayer'

const VideoPage = ({options,  courseid }) => {
  console.log('options: ', options);

  // const options = {
  //   autoplay: true,
  //   controls: true,
  //   responsive: true,
  //   fluid: true,
  //   sources: [{
  //     src: 'https://media.baeckerei-muenzel.de/schulungsfilm-personalhygiene.mp4',
  //     type: 'video/mp4'
  //   }]
  // };

  return (
    <VideoPlayer options={options} courseid={courseid} />
  )
}

export default VideoPage