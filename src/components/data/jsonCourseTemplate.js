export const jsonCourseTemplate = {
  courseTemplate: 'video', // video or instruction 
  courseId: "",
  courseTitle:"",
  courseImage: "",
  departments: [],
  instructions: [{
    title: "",
    subTitle: "",
    logo: "",
    instructionBlocks: [
     {
      headline: "",
      instructionBlockItems: [ //block
        {
          image: "",
          text: ""
        }
      ]
    },
  ]
  }],
  video: {
    autoplay: false,
    controls: true,
    fluid: true,
    responsive: true,
    preload: 'auto', 
    poster: "http://.../poster.jpg",
    sources: [{
      src: 'ddddddd',
      type: 'video/mp4'
    }],
    controlBar: {
      playToggle: true,
      captionsButton: false,
      chaptersButton: false,            
      subtitlesButton: false,
      remainingTimeDisplay: true,
      progressControl: {
        seekBar: true
      },
      fullscreenToggle: true,
      playbackRateMenuButton: true,
    },
  },
  questions: [
    {
      questionId: "",
      image: "https://.../img.jpg",
      question: "",
      answers: [{
        image: 'https://.../img.jpg',
        text: 'text'
      }],
      correctAnswer: 1,  // index of answers
    },
  ]
}