export const gewaltAmArbeitsplatz = {
  showing: 'video',
  courseId: "1002",
  title_: "Gewalt am Arbeitsplatz",
  courseTitle: {
    schulung: "Gewalt am Arbeitsplatz",
    training: "Violance in the workspace"
  },
  
  categories: ["Verkauf"],
  instructions: {},
  video: {
    autoplay: false,
    controls: true,
    fluid: true,
    responsive: true,
    preload: 'auto', 
    poster: "https://media.baeckerei-muenzel.de/muenzel-poster.png",
    sources: [{
      src: 'https://media.baeckerei-muenzel.de/schulungsfilm-gewalt-am-arbeitsplatz.mp4',
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
  imgCourse: "",
  questions: [
    {
      idQuestion: "q1",
      imgQuestion: "/img/eins.jpg",
      question: "frage eins",
      answers: [
      "1 false",
      "16 false",
      "9 false",
      "correct 8",
      ],
      correctAnswer: 3
    }
  ]
}