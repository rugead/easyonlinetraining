export const ladungssicherung = {
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
    logo: "https://media.baeckerei-muenzel.de//muenzel_logo.jpg",
    blocks: [
     {
      headline: "Gefahren für Mensch und Umwelt",
      items: [
        { 
          icon: "https://media.baeckerei-muenzel.de/fahrerschulung/achtung.jpg",
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
      headline: "Schutzmaßnahmen und Verhaltensregeln",
      items: [
        { 
          icon: "",
          text: "Ladungssicherungssysteme verwenden (Ankerstangen)"
        },
        {
          icon: "",
          text: "Ladungssicherung vor Antritt der Fahrt und nach kurzer Fahrt oder extremen Fahrmanövern (z. B. bremsen) kontrollieren",
        },
        {
          icon: "",
          text: "Passendes Fahrzeug zur Ladung wählen",
        },
        {
          icon: "",
          text: "Geeignetes und geschultes Personal einsetzen",
        },
        {
          icon: "",
          text: "Reinigung der Ladefläche und Kontrolle auf Beschädigungen"
        },
        {
          icon: "",
          text: "Ladeeinheiten verkehrssicher zusammenstellen, Ladungssicherungsmaßnahmen in regelmäßigen Abständen überprüfen"
        },
        {
          icon: "https://media.baeckerei-muenzel.de/fahrerschulung/boots.jpg",
          text: "Persönliche Schutzausrüstung, z. Bsp. Sicherheitsschuhe (knöchelhoch), tragen"
        }
      ]
    },
    {
      headline: "Verhalten bei Störungen",
      items: [
        {
          icon: "",
          text: "Sich bewegende Ladung ist nachzusichern"
        },
        {
          icon: "",
          text: "Defekte Hilfsmittel zur Ladungssicherung dürfen nicht verwendet werden"
        },
        {
          icon: "",
          text: "Unternehmer / Vorgesetzten informieren"
        },
      ]
    },
    {
      headline: "Verhalten bei Unfällen - Erste Hilfe",
      items: [
        {
          icon: "https://media.baeckerei-muenzel.de/fahrerschulung/green-cross.jpg",
          text: "Unfallstelle absichern (Warndreieck, Warnweste), Verletzte bergen und Erste Hilfe leisten"
        },
        {
          icon: "",
          text: "Jede Erste-Hilfe-Leistung dokumentieren (Verbandbuch)"
        },
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
          icon: "https://media.baeckerei-muenzel.de/fahrerschulung/aaa.jpg",
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
      imgQuestion: "https://media.baeckerei-muenzel.de/fahrerschulung/ls-kippt-seitlich.jpg",
      question: "Wurde hier richtig geladen?",
      answers: [
      "Ja. Ladung steht stabil.",
      "Nein. Ladung kann seitlich umfallen."
      ],
      correctAnswer: 1
    },
    {
      idQuestion: "q2",
      imgQuestion: "https://media.baeckerei-muenzel.de/fahrerschulung/ls-form-kraftschluessig.jpg",
      question: "Sind alle Boxen richtig gestapelt?",
      answers: [
        "Ja. Ladung steht stabil.",
        "Nein. Ladung kann umfallen.",
      ],
      correctAnswer: 0
    },
  ]
}