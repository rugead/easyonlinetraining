export const trainingName = {
  courseTemplate: '', // video or instruction 
  courseId: "",
  courseTitle:"",
  courseImage: "",
  departments: [],
  instructions: {
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
  },
  video: {
    autoplay: false,
    controls: true,
    fluid: true,
    responsive: true,
    preload: 'auto', 
    poster: "",
    sources: [{
      src: '',
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
      image: "",
      question: "",
      answers: [{
        image: '',
        text: ''
      }],
      correctAnswer: 1,  // index of answers
    },
  ]
}