import { mehlstaubNeinDanke } from "./mehlstaubNeinDanke";
import { gewaltAmArbeitsplatz } from "./gewaltAmArbeitsplatz";
import { ladungssicherung } from "./ladungssicherung";
import { personalhygiene } from "./personalhygiene"
// import { dataExampleInstruction } from "./dataExampleInstruction";
// import { dataExampleVideo } from "./dataExampleVideo";

export const dataSet = [
  personalhygiene,
  mehlstaubNeinDanke, 
  gewaltAmArbeitsplatz,
  ladungssicherung,
  // dataExampleInstruction,
  // dataExampleVideo
]



export const anleitung = {
  instruction: {
    de: 'Bitte lesen Sie die Betriebsanweisung aufmerksam und bis zu Ende durch. Scrollen Sie bis nach ganz unten und klicken dann auf den Button "Zum Quiz hier klicken". Beantworten Sie dort alle Fragen und folgen Sie den weiteren Anweisungen.',
    en: 'Please read this instruchtion carefully. Scroll down till the end of the page and Click on the Button "Zum Quiz hier klicken". Please answer all questions and follow further instructions.',
  },
  video: {
    de: 'Bitte sehen Sie sich das Schulungsvideo aufmerksam und bis zu Ende an. Sie können das Video nicht vorspulen. Sobald das Video zu Ende ist, werden Sie weitergeleitet. Beantworten Sie dort alle Fragen und folgen Sie den weiteren Anweisungen.',
    en: 'Please watch this video carefully. You cannot fast forward the Video. As soon as the video ends, you are forwarded. Please answer all questions and follow further instructions.',
  },
  fragen: {
    de: 'Bitte beantworten Sie alle Fragen zum Film und geben Ihre gültige Personalnummer ein. (Please answer all questions and fill in your Personalnumber).',
  },
  personalnummer: {
    de: 'Ihre Personalnummer finden Sie auf Ihrer Personalkarte. Es ist eine Zahl zwischen 2000 und 3999. (Your will find your Personalnumber on your "Personalkarte".',
    en: 'It is a number between 2000 and 3999.)'
  },
  videoButton: {
    de: 'Video angesehen und verstanden',
    en: 'I have seen and understood the video'
  }
}


export const userCategoriesData = [
  'Bäckerei',
  'Konditorei',
  'Verkauf',
  'Versand',
  'Instandhaltung',
  'Reinigung',
  'Büro',
]
