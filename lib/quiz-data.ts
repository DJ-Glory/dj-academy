export interface QuizQuestion {
  cat: string
  q: string
  options: string[]
  correct: number
}

export const QUIZ: QuizQuestion[] = [
  {
    cat: 'Beatmatching',
    q: 'Do tracks 128 BPM aur 130 BPM par chal rahe hain. Beatmatch karne ka sabse safe pehla step?',
    options: [
      'Dono ko turant same volume par le aao',
      'Ek deck ka tempo dheere-dheere adjust karo jab tak kicks align na ho',
      'Crossfader turant beech mein le aao',
      'Dono tracks ka key badal do',
    ],
    correct: 1,
  },
  {
    cat: 'BPM',
    q: '"Half-time" feel wala genre mix karte waqt kis cheez ka dhyaan rakhna zaroori hai?',
    options: [
      'Sirf volume',
      'BPM ka actual double/half relationship samajhna',
      'Sirf track ka naam',
      'Speaker ka size',
    ],
    correct: 1,
  },
  {
    cat: 'Phrasing',
    q: 'Ek track ka "8-bar phrase" transition ke liye best kyu hota hai?',
    options: [
      'Kyunki wahan drop hota hai hamesha',
      'Kyunki musical section wahan naturally change hota hai',
      'Kyunki BPM wahan change hota hai',
      'Isse koi fark nahi padta',
    ],
    correct: 1,
  },
  {
    cat: 'EQ',
    q: 'Transition ke dauraan do bass-heavy tracks ek saath baj rahe hain. Sabse pehla EQ move?',
    options: [
      'Dono ka bass full on rakho',
      'Ek track ka low-end kaato taaki bass clash na ho',
      'Treble kaato',
      'Mid kaato',
    ],
    correct: 1,
  },
  {
    cat: 'Harmonic Mixing',
    q: 'Camelot wheel par 8A aur 9A keys ka relationship kaisa hota hai?',
    options: [
      'Clash karte hain',
      'Adjacent aur compatible hote hain',
      'Same key hote hain',
      'Inka koi relation nahi',
    ],
    correct: 1,
  },
  {
    cat: 'Track Selection',
    q: 'Sangeet ceremony ke peak moment ke liye best track choice kaunsi approach hai?',
    options: [
      'Sabse naya release jo pata ho',
      'Crowd ki known aur high-energy request wali track',
      'Sabse slow track',
      'Apni personal favorite, crowd se independent',
    ],
    correct: 1,
  },
  {
    cat: 'Crowd Reading',
    q: 'Dance floor thoda empty ho raha hai. Sabse pehla response?',
    options: [
      'Turant sabse heavy track daal do',
      'Energy thoda peeche le jao aur familiar/singalong track try karo',
      'Set band kar do',
      'Volume aur zyada badha do',
    ],
    correct: 1,
  },
  {
    cat: 'Beatmatching',
    q: 'Jog wheel ka "nudge" use kis liye hota hai?',
    options: [
      'Volume control ke liye',
      'Chhota temporary tempo push dene ke liye taaki beats align ho',
      'Track skip karne ke liye',
      'EQ change karne ke liye',
    ],
    correct: 1,
  },
  {
    cat: 'Phrasing',
    q: 'Intro/outro count karte waqt DJs generally kya count karte hain?',
    options: [
      'Seconds',
      'Bars (usually groups of 4 or 8)',
      'Minutes',
      'Kick drums ki total ginti poore track mein',
    ],
    correct: 1,
  },
  {
    cat: 'Track Selection',
    q: 'Wedding DJ ke liye setlist planning mein sabse important cheez?',
    options: [
      'Sirf apna favorite genre',
      'Event ke different moments (entry, dinner, dance floor) ke hisaab se energy curve',
      'Sabse tez BPM tracks hi rakhna',
      'Random order',
    ],
    correct: 1,
  },
]
