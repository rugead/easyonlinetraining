export const dataExampleInstruction = {
  showing: 'instructions',
  courseId: "1004",
  title_: "Ladungssicherung",
  courseTitle: {
    schulung: "Ladungssicherung",
    training: "Security of Load "
  },
  categories: ["Versand"],
  instructions: {
    title: "Ladungssicherung auf Fahrzeugen",
    subTitle: "Die Unfallverhütungsvorschriften und die Straßenverkehrsordnung sind zu beachten!",
    logo: "../../img/logo.jpg",
    blocks: [
     {
      headline: "Gefahren für Mensch und Umwelt",
      items: [
        { 
          icon: "../../img/example.jpg",
          text: "Verkehrsgefährdung durch Überladen, falsches Beladen oder ungleichmäßige Verteilung der Last"
        },
        {
          icon: "",
          text: "Verkehrsgefährdung durch unzureichende oder falsche Ladungssicherungsmaßnahmen",
        },
        {
          icon: "",
          text: "Gefährdungen durch sich bewegende Ladung bei extremen Fahrmanövern wie z. Bsp. Bremsen, Ausweichen, Kurvendurchfahrten",
        },
        {
          icon: "",
          text: "Beeinträchtigung des Fahrverhaltens durch verrutschende, herabfallende, umfallende oder pendelnde Ladung",
        },
        {
          icon: "",
          text: "Gefährdungen durch in sich nicht gesicherte Ladeeinheiten"
        }
      ]
    },
    {
      headline: "Instandhaltung & Entsorgung",
      items: [
        {
          icon: "",
          text: "Regelmäßige Prüfung des Fahrzeuges durch eine befähigte Person (Sachkundiger - BGV D29/Sachverständiger - StVZO)"
        },
        {
          icon: "../../img/example.jpg",
          text: "Hilfsmittel zur Ladungssicherung mindestens jährlich von einer befähigten Person (Sachkundiger) prüfen lassen"
        },
        {
          icon: "",
          text: "Sichtkontrolle des Fahrzeuges und der Hilfsmittel zur Ladungssicherung vor jeder Verwendung"
        },
      ]
    },
  ]
  },
  video: {},
  imgCourse: "",
  questions: [
    {
      idQuestion: "q1",
      imgQuestion: "../../img/example.jpg",
      question: "Wurde hier richtig geladen?",
      answers: [
      "Ja. Ladung steht stabil.",
      "Nein. Ladung kann seitlich umfallen."
      ],
      correctAnswer: 1
    },
    {
      idQuestion: "q2",
      imgQuestion: "../../img/example.jpg",
      question: "Sind alle Boxen richtig gestapelt?",
      answers: [
        "Ja. Ladung steht stabil.",
        "Nein. Ladung kann umfallen.",
      ],
      correctAnswer: 0
    },
  ]
}