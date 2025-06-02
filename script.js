const B0 = document.getElementById('B0');
const C1 = document.getElementById('C1');
const D1 = document.getElementById('D1');
const E1 = document.getElementById('E1');
const F1 = document.getElementById('F1');
const G1 = document.getElementById('G1');
const A1 = document.getElementById('A1');
const B1 = document.getElementById('B1');
const C2 = document.getElementById('C2');
const D2 = document.getElementById('D2');
const E2 = document.getElementById('E2');
const F2 = document.getElementById('F2');
const G2 = document.getElementById('G2');
const A2 = document.getElementById('A2');
const B2 = document.getElementById('B2');
const C3 = document.getElementById('C3');
const D3 = document.getElementById('D3');
const E3 = document.getElementById('E3');
const F3 = document.getElementById('F3');
const G3 = document.getElementById('G3');
const A3 = document.getElementById('A3');
const B3 = document.getElementById('B3');
const C4 = document.getElementById('C4');
const D4 = document.getElementById('D4');
const E4 = document.getElementById('E4');
const F4 = document.getElementById('F4');
const G4 = document.getElementById('G4');
const A4 = document.getElementById('A4');
const B4 = document.getElementById('B4');
const C5 = document.getElementById('C5');

const Cd1 = document.getElementById('Cd1');
const Dd1 = document.getElementById('Dd1');
const Fd1 = document.getElementById('Fd1');
const Gd1 = document.getElementById('Gd1');
const Ad1 = document.getElementById('Ad1');
const Cd2 = document.getElementById('Cd2');
const Dd2 = document.getElementById('Dd2');
const Fd2 = document.getElementById('Fd2');
const Gd2 = document.getElementById('Gd2');
const Ad2 = document.getElementById('Ad2');
const Cd3 = document.getElementById('Cd3');
const Dd3 = document.getElementById('Dd3');
const Fd3 = document.getElementById('Fd3');
const Gd3 = document.getElementById('Gd3');
const Ad3 = document.getElementById('Ad3');
const Cd4 = document.getElementById('Cd4');
const Dd4 = document.getElementById('Dd4');
const Fd4 = document.getElementById('Fd4');
const Gd4 = document.getElementById('Gd4');
const Ad4 = document.getElementById('Ad4');

const notes = [[B0, C1, D1, E1, F1, G1, A1, B1, C2, D2, E2, F2, G2, A2, B2, C3, D3, E3, F3, G3, A3, B3, C4, D4, E4, F4, G4, A4, B4, C5], [Cd1, Dd1, Fd1, Gd1, Ad1, Cd2, Dd2, Fd2, Gd2, Ad2, Cd3, Dd3, Fd3, Gd3, Ad3, Cd4, Dd4, Fd4, Gd4, Ad4]]

const xylophoneScreen = document.createElement('div')
xylophoneScreen.classList.add('xylophoneScreen')
document.body.append(xylophoneScreen)

const titleScreen = document.createElement('h2')
titleScreen.textContent = "Xylophone"
titleScreen.classList.add('titleScreen')
xylophoneScreen.append(titleScreen)

const btnReturnXylo = document.createElement('div')
btnReturnXylo.textContent = "Retour"
btnReturnXylo.classList.add('btnRetrun')
xylophoneScreen.append(btnReturnXylo)

const mainContainer = document.createElement('div')
mainContainer.classList.add('mainContainer')
xylophoneScreen.append(mainContainer)

const structureLeft = document.createElement('div');
structureLeft.classList.add('structureLeft')
mainContainer.append(structureLeft)

const structureRight = document.createElement('div');
structureRight.classList.add('structureRight')
mainContainer.append(structureRight)

const structureTop = document.createElement('div');
structureTop.classList.add('structureTop')
mainContainer.append(structureTop)

const structureCenter1 = document.createElement('div');
structureCenter1.classList.add('structureCenter1')
mainContainer.append(structureCenter1)

const structureCenter2 = document.createElement('div');
structureCenter2.classList.add('structureCenter2')
mainContainer.append(structureCenter2)

const structureBottom = document.createElement('div');
structureBottom.classList.add('structureBottom')
mainContainer.append(structureBottom)

const containerNote = document.createElement('div')
containerNote.classList.add('containerNote')
mainContainer.append(containerNote)

const btnPlayNote = document.createElement('button')
btnPlayNote.textContent = "Jouer"
btnPlayNote.classList.add('btnPlay')
xylophoneScreen.append(btnPlayNote)

const baseHeight = 300;

let dieseCount = 0

notes[0].forEach((note, index) => {

    const divNote = document.createElement('div')
    divNote.classList.add('notes')

    const h = baseHeight - index * 5;
    divNote.style.height = h + 'px';

    containerNote.append(divNote)

    const paraNote = document.createElement('p')
    paraNote.textContent = note.getAttribute('id')
    paraNote.classList.add('paraNote')
    divNote.append(paraNote)

    const circle1 = document.createElement('div')
    circle1.classList.add('circleNote1')
    divNote.append(circle1)

    const circle2 = document.createElement('div')
    circle2.classList.add('circleNote2')
    divNote.append(circle2)

    divNote.addEventListener('click', () => {
        note.currentTime = 0;
        note.play();
    });

    btnPlayNote.addEventListener('click', () => {

        for (let i = 0 ; i < 3 ; i++) {
            setTimeout(() => {
                notes[0][1].currentTime = 0
                notes[0][1].play()
                const divNotePlay = document.querySelectorAll('.notes')[1]
                divNotePlay.classList.add('active')
                setTimeout(() => {
                    divNotePlay.classList.remove('active')
                }, 200)
            }, i * 300);
        }

        setTimeout(() => {
            notes[0][2].currentTime = 0
            notes[0][2].play()
            const divNotePlay = document.querySelectorAll('.notes')[2]
            divNotePlay.classList.add('active')
            setTimeout(() => {
                divNotePlay.classList.remove('active')
            }, 200)
        }, 900)

        setTimeout(() => {
            notes[0][3].currentTime = 0
            notes[0][3].play()
            const divNotePlay = document.querySelectorAll('.notes')[3]
            divNotePlay.classList.add('active')
            setTimeout(() => {
                divNotePlay.classList.remove('active')
            }, 200)
        }, 1200)

        setTimeout(() => {
            notes[0][2].currentTime = 0
            notes[0][2].play()
            const divNotePlay = document.querySelectorAll('.notes')[2]
            divNotePlay.classList.add('active')
            setTimeout(() => {
                divNotePlay.classList.remove('active')
            }, 200)
        }, 1800)

        setTimeout(() => {
            notes[0][1].currentTime = 0
            notes[0][1].play()
            const divNotePlay = document.querySelectorAll('.notes')[1]
            divNotePlay.classList.add('active')
            setTimeout(() => {
                divNotePlay.classList.remove('active')
            }, 200)
        }, 2400)

        setTimeout(() => {
            notes[0][3].currentTime = 0
            notes[0][3].play()
            const divNotePlay = document.querySelectorAll('.notes')[3]
            divNotePlay.classList.add('active')
            setTimeout(() => {
                divNotePlay.classList.remove('active')
            }, 200)
        }, 2700)

        setTimeout(() => {
            notes[0][2].currentTime = 0
            notes[0][2].play()
            const divNotePlay = document.querySelectorAll('.notes')[2]
            divNotePlay.classList.add('active')
            setTimeout(() => {
                divNotePlay.classList.remove('active')
            }, 200)
        }, 3000)

        setTimeout(() => {
            notes[0][2].currentTime = 0
            notes[0][2].play()
            const divNotePlay = document.querySelectorAll('.notes')[2]
            divNotePlay.classList.add('active')
            setTimeout(() => {
                divNotePlay.classList.remove('active')
            }, 200)
        }, 3300)

        setTimeout(() => {
            notes[0][1].currentTime = 0
            notes[0][1].play()
            const divNotePlay = document.querySelectorAll('.notes')[1]
            divNotePlay.classList.add('active')
            setTimeout(() => {
                divNotePlay.classList.remove('active')
            }, 200)
        }, 3600)

    })
})

notes[1].forEach((notesDiese, index) => {
    const divNoteDiese = document.createElement('div')
    divNoteDiese.classList.add('noteDiese')
    dieseCount++
    divNoteDiese.classList.add(`divNote${dieseCount}`)

    const h = baseHeight - index * 5;
    divNoteDiese.style.height = h + 'px';

    containerNote.append(divNoteDiese)

    const circle1 = document.createElement('div')
    circle1.classList.add('circleNote1')
    divNoteDiese.append(circle1)

    const circle2 = document.createElement('div')
    circle2.classList.add('circleNote2')
    divNoteDiese.append(circle2)

    const paraNoteDiese = document.createElement('p')
    paraNoteDiese.textContent = notesDiese.getAttribute('id')
    paraNoteDiese.classList.add('paraNoteDiese')
    divNoteDiese.append(paraNoteDiese)

    divNoteDiese.addEventListener('click', () => {
        notesDiese.currentTime = 0;
        notesDiese.play();
    });
})

// Piano

const PianoC5 = document.getElementById('PianoC5');
const PianoD5 = document.getElementById('PianoD5');
const PianoE5 = document.getElementById('PianoE5');
const PianoF5 = document.getElementById('PianoF5');
const PianoG5 = document.getElementById('PianoG5');
const PianoA5 = document.getElementById('PianoA5');
const PianoB5 = document.getElementById('PianoB5');
const PianoC6 = document.getElementById('PianoC6');
const PianoD6 = document.getElementById('PianoD6');
const PianoE6 = document.getElementById('PianoE6');
const PianoF6 = document.getElementById('PianoF6');
const PianoG6 = document.getElementById('PianoG6');
const PianoA6 = document.getElementById('PianoA6');
const PianoB6 = document.getElementById('PianoB6');
const PianoC7 = document.getElementById('PianoC7');
const PianoD7 = document.getElementById('PianoD7');
const PianoF7 = document.getElementById('PianoF7');
const PianoG7 = document.getElementById('PianoG7');
const PianoA7 = document.getElementById('PianoA7');
const PianoB7 = document.getElementById('PianoB7');

const PianoCd5 = document.getElementById('PianoCD5');
const PianoDd5 = document.getElementById('PianoDD5');
const PianoFd5 = document.getElementById('PianoFD5');
const PianoGd5 = document.getElementById('PianoGD5');
const PianoAd5 = document.getElementById('PianoAD5');
const PianoCd6 = document.getElementById('PianoCD6');
const PianoDd6 = document.getElementById('PianoDD6');
const PianoFd6 = document.getElementById('PianoFD6');
const PianoGd6 = document.getElementById('PianoGD6');
const PianoAd6 = document.getElementById('PianoAD6');
const PianoCd7 = document.getElementById('PianoCD7');
const PianoDd7 = document.getElementById('PianoDD7');
const PianoGd7 = document.getElementById('PianoGD7');
const PianoAd7 = document.getElementById('PianoAD7');

const PianoNotes = [[PianoC5, PianoD5, PianoE5, PianoF5, PianoG5, PianoA5, PianoB5, PianoC6, PianoD6, PianoE6, PianoF6, PianoG6, PianoA6, PianoB6, PianoC7, PianoD7, PianoF7, PianoG7, PianoA7, PianoB7], [PianoCd5, PianoDd5, PianoFd5, PianoGd5, PianoAd5, PianoCd6, PianoDd6, PianoFd6, PianoGd6, PianoAd6, PianoCd7, PianoDd7, PianoGd7, PianoAd7]];

const pianoScreen = document.createElement('div')
pianoScreen.classList.add('pianoScreen')
document.body.append(pianoScreen)

const titlePianoScreen = document.createElement('h2')
titlePianoScreen.textContent = "Piano"
titlePianoScreen.classList.add('titlePianoScreen')
pianoScreen.append(titlePianoScreen)

const btnReturnPiano = document.createElement('div')
btnReturnPiano.textContent = "Retour"
btnReturnPiano.classList.add('btnRetrun')
pianoScreen.append(btnReturnPiano)

const mainPianoContainer = document.createElement('div')
mainPianoContainer.classList.add('mainPianoContainer')
pianoScreen.append(mainPianoContainer)

const structureLeftPiano = document.createElement('div')
structureLeftPiano.classList.add('structureLeftPiano')
mainPianoContainer.append(structureLeftPiano)

const structureRightPiano = document.createElement('div')
structureRightPiano.classList.add('structureRightPiano')
mainPianoContainer.append(structureRightPiano)

const structureTopPiano = document.createElement('div')
structureTopPiano.classList.add('structureTopPiano')
mainPianoContainer.append(structureTopPiano)

const structureTopBottomNotePiano = document.createElement('div')
structureTopBottomNotePiano.classList.add('structureTopBottomNotePiano')
structureTopPiano.append(structureTopBottomNotePiano)

const ecranPiano = document.createElement('div')
ecranPiano.classList.add('ecranPiano')
structureTopPiano.append(ecranPiano)

const paraNotePlay = document.createElement('p')
paraNotePlay.textContent = "Piano"
paraNotePlay.classList.add('paraNotePlay')
ecranPiano.append(paraNotePlay)

const containerPianoNote = document.createElement('div')
containerPianoNote.classList.add('containerPianoNote')
mainPianoContainer.append(containerPianoNote)

const btnPlayNotePiano = document.createElement('button')
btnPlayNotePiano.textContent = "Jouer"
btnPlayNotePiano.classList.add('btnPlay')
pianoScreen.append(btnPlayNotePiano)

let diesePianoCount = 0

PianoNotes[0].forEach((notePiano) => {
    const divNotePiano = document.createElement('div')
    divNotePiano.classList.add('notesPiano')

    containerPianoNote.append(divNotePiano)

    const paraNotePiano = document.createElement('p')
    const fullId = notePiano.getAttribute('id');
    const trimmedId = fullId.replace('Piano', '');  
    paraNotePiano.textContent = trimmedId
    paraNotePiano.classList.add('paraNotePiano')
    divNotePiano.append(paraNotePiano)

    divNotePiano.addEventListener('click', () => {
        notePiano.pause()
        notePiano.currentTime = 0;
        notePiano.play();
        paraNotePlay.textContent = trimmedId
    });

    btnPlayNotePiano.addEventListener('click', () => {

        paraNotePlay.textContent = `Interstellar`

        for (let i = 0 ; i < 33 ; i++) {
            setTimeout(() => {
                PianoNotes[0][0].currentTime = 0
                PianoNotes[0][0].play()
                const divNotePlayPiano = document.querySelectorAll('.notesPiano')[0]
                divNotePlayPiano.classList.add('activePiano')
                setTimeout(() => {
                    divNotePlayPiano.classList.remove('activePiano')
                }, 500)
            }, i * 700);
        }

        setTimeout(() => {
            PianoNotes[0][3].currentTime = 0
            PianoNotes[0][3].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[3]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 1500)
        }, 8400)

        setTimeout(() => {
            PianoNotes[0][4].currentTime = 0
            PianoNotes[0][4].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[4]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 3500)
        }, 10500)

        setTimeout(() => {
            PianoNotes[0][3].currentTime = 0
            PianoNotes[0][3].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[3]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 14700)

        setTimeout(() => {
            PianoNotes[0][4].currentTime = 0
            PianoNotes[0][4].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[4]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 15400)

        setTimeout(() => {
            PianoNotes[0][5].currentTime = 0
            PianoNotes[0][5].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[5]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 16100)

        setTimeout(() => {
            PianoNotes[0][4].currentTime = 0
            PianoNotes[0][4].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[4]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 16800)

        setTimeout(() => {
            PianoNotes[0][3].currentTime = 0
            PianoNotes[0][3].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[3]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 17500)

        setTimeout(() => {
            PianoNotes[0][4].currentTime = 0
            PianoNotes[0][4].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[4]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 18200)

        setTimeout(() => {
            PianoNotes[0][5].currentTime = 0
            PianoNotes[0][5].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[5]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 1500)
        }, 18900)

        setTimeout(() => {
            PianoNotes[0][4].currentTime = 0
            PianoNotes[0][4].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[4]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 1500)
        }, 21000)

        setTimeout(() => {
            PianoNotes[0][3].currentTime = 0
            PianoNotes[0][3].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[3]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 23100)

        setTimeout(() => {
            PianoNotes[0][7].currentTime = 0
            PianoNotes[0][7].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[7]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 1100)
        }, 23800)

        setTimeout(() => {
            PianoNotes[0][3].currentTime = 0
            PianoNotes[0][3].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[3]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 25100)

        setTimeout(() => {
            PianoNotes[0][7].currentTime = 0
            PianoNotes[0][7].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[7]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 1100)
        }, 25800)

        setTimeout(() => {
            PianoNotes[0][4].currentTime = 0
            PianoNotes[0][4].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[4]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 27100)

        setTimeout(() => {
            PianoNotes[0][7].currentTime = 0
            PianoNotes[0][7].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[7]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 1100)
        }, 27800)

        setTimeout(() => {
            PianoNotes[0][4].currentTime = 0
            PianoNotes[0][4].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[4]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 29100)

        setTimeout(() => {
            PianoNotes[0][7].currentTime = 0
            PianoNotes[0][7].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[7]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 1100)
        }, 29800)

        setTimeout(() => {
            PianoNotes[0][5].currentTime = 0
            PianoNotes[0][5].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[5]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 31100)

        setTimeout(() => {
            PianoNotes[0][7].currentTime = 0
            PianoNotes[0][7].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[7]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 1100)
        }, 31800)

        setTimeout(() => {
            PianoNotes[0][5].currentTime = 0
            PianoNotes[0][5].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[5]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 33100)

        setTimeout(() => {
            PianoNotes[0][7].currentTime = 0
            PianoNotes[0][7].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[7]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 1100)
        }, 33800)

        setTimeout(() => {
            PianoNotes[0][6].currentTime = 0
            PianoNotes[0][6].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[6]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 35100)

        setTimeout(() => {
            PianoNotes[0][7].currentTime = 0
            PianoNotes[0][7].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[7]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 1100)
        }, 35800)

        setTimeout(() => {
            PianoNotes[0][6].currentTime = 0
            PianoNotes[0][6].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[6]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 37100)

        setTimeout(() => {
            PianoNotes[0][7].currentTime = 0
            PianoNotes[0][7].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[7]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 37800)

        setTimeout(() => {
            PianoNotes[0][4].currentTime = 0
            PianoNotes[0][4].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[4]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 38500)

        setTimeout(() => {
            PianoNotes[0][3].currentTime = 0
            PianoNotes[0][3].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[3]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 39200)

        setTimeout(() => {
            PianoNotes[0][7].currentTime = 0
            PianoNotes[0][7].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[7]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 39900)

        setTimeout(() => {
            PianoNotes[0][3].currentTime = 0
            PianoNotes[0][3].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[3]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 40600);

        setTimeout(() => {
            PianoNotes[0][3].currentTime = 0
            PianoNotes[0][3].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[3]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 41300);

        setTimeout(() => {
            PianoNotes[0][7].currentTime = 0
            PianoNotes[0][7].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[7]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 42000)

        setTimeout(() => {
            PianoNotes[0][3].currentTime = 0
            PianoNotes[0][3].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[3]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 42700);

        setTimeout(() => {
            PianoNotes[0][4].currentTime = 0
            PianoNotes[0][4].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[4]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 43400)

        setTimeout(() => {
            PianoNotes[0][7].currentTime = 0
            PianoNotes[0][7].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[7]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 44100);

        setTimeout(() => {
            PianoNotes[0][4].currentTime = 0
            PianoNotes[0][4].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[4]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 44800)

        setTimeout(() => {
            PianoNotes[0][4].currentTime = 0
            PianoNotes[0][4].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[4]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 45500)

        setTimeout(() => {
            PianoNotes[0][7].currentTime = 0
            PianoNotes[0][7].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[7]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 46200);

        setTimeout(() => {
            PianoNotes[0][4].currentTime = 0
            PianoNotes[0][4].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[4]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 46900)

        setTimeout(() => {
            PianoNotes[0][5].currentTime = 0
            PianoNotes[0][5].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[5]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 47600)

        setTimeout(() => {
            PianoNotes[0][7].currentTime = 0
            PianoNotes[0][7].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[7]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 48300);

        setTimeout(() => {
            PianoNotes[0][5].currentTime = 0
            PianoNotes[0][5].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[5]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 49000)

        setTimeout(() => {
            PianoNotes[0][5].currentTime = 0
            PianoNotes[0][5].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[5]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 49700)

        setTimeout(() => {
            PianoNotes[0][7].currentTime = 0
            PianoNotes[0][7].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[7]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 50400);

        setTimeout(() => {
            PianoNotes[0][5].currentTime = 0
            PianoNotes[0][5].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[5]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 51100)

        setTimeout(() => {
            PianoNotes[0][6].currentTime = 0
            PianoNotes[0][6].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[6]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 51800)

        setTimeout(() => {
            PianoNotes[0][7].currentTime = 0
            PianoNotes[0][7].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[7]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 52500);

        setTimeout(() => {
            PianoNotes[0][6].currentTime = 0
            PianoNotes[0][6].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[6]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 53200)

        setTimeout(() => {
            PianoNotes[0][6].currentTime = 0
            PianoNotes[0][6].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[6]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 53900)

        setTimeout(() => {
            PianoNotes[0][7].currentTime = 0
            PianoNotes[0][7].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[7]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 54600);

        setTimeout(() => {
            PianoNotes[0][4].currentTime = 0
            PianoNotes[0][4].play()
            const divNotePlayPiano = document.querySelectorAll('.notesPiano')[4]
            divNotePlayPiano.classList.add('activePiano')
            setTimeout(() => {
                divNotePlayPiano.classList.remove('activePiano')
            }, 500)
        }, 55300);

    })
})

PianoNotes[1].forEach((noteDiesePiano) => {
    const divNoteDiesePiano = document.createElement('div')
    divNoteDiesePiano.classList.add('noteDiesePiano')
    diesePianoCount++
    divNoteDiesePiano.classList.add(`divNoteDiesePiano${diesePianoCount}`)

    containerPianoNote.append(divNoteDiesePiano)

    const paraNoteDiesePiano = document.createElement('p')
    const fullId = noteDiesePiano.getAttribute('id');
    const trimmedId = fullId.replace('Piano', '');  
    paraNoteDiesePiano.textContent = trimmedId
    paraNoteDiesePiano.classList.add('paraNoteDiesePiano')
    divNoteDiesePiano.append(paraNoteDiesePiano)

    divNoteDiesePiano.addEventListener('click', () => {
        noteDiesePiano.pause()
        noteDiesePiano.currentTime = 0;
        noteDiesePiano.play();
        paraNotePlay.textContent = trimmedId
    });
})

// Batterie

const batterieScreen = document.createElement('div')
batterieScreen.classList.add('batterieScreen')
document.body.append(batterieScreen)

const titleBatterieScreen = document.createElement('h2')
titleBatterieScreen.textContent = "Batterie"
titleBatterieScreen.classList.add('titleBatterieScreen')
batterieScreen.append(titleBatterieScreen)

const btnReturnBatterie = document.createElement('div')
btnReturnBatterie.textContent = "Retour"
btnReturnBatterie.classList.add('btnRetrun')
batterieScreen.append(btnReturnBatterie)

const mainBatterieContainer = document.createElement('div')
mainBatterieContainer.classList.add('mainBatterieContainer')
batterieScreen.append(mainBatterieContainer)

const containerBatterieNote = document.createElement('div')
containerBatterieNote.classList.add('containerBatterieNote')
mainBatterieContainer.append(containerBatterieNote)

const China = document.getElementById('China')
const CrashL = document.getElementById('CrashL')
const CrashR = document.getElementById('CrashR')
const HihatClosed = document.getElementById('HihatClosed')
const HihatOpen = document.getElementById('HihatOpen')
const KdrumL = document.getElementById('KdrumL')
const KdrumR = document.getElementById('KdrumR')
const RideL = document.getElementById('RideL')
const RideR = document.getElementById('RideR')
const Snare = document.getElementById('Snare')
const Tom1 = document.getElementById('Tom1')
const Tom2 = document.getElementById('Tom2')
const Tom3 = document.getElementById('Tom3')
const Tom4 = document.getElementById('Tom4')

const notesBatterie = [China, CrashL, CrashR, HihatClosed, HihatOpen, KdrumL, KdrumR, RideL, RideR, Snare, Tom1, Tom2, Tom3, Tom4]

let dieseBetterieCount = 0

notesBatterie.forEach((noteBatterie) => {
    const divNoteBatterie = document.createElement('div')
    divNoteBatterie.classList.add('notesBatterie')

    containerBatterieNote.append(divNoteBatterie)
    dieseBetterieCount++
    divNoteBatterie.classList.add(`notesBatterie${dieseBetterieCount}`)

    const paraNoteBatterie = document.createElement('p')
    paraNoteBatterie.textContent = noteBatterie.getAttribute('id');
    paraNoteBatterie.classList.add('paraNoteBatterie')
    divNoteBatterie.append(paraNoteBatterie)

    divNoteBatterie.addEventListener('click', () => {
        noteBatterie.pause()
        noteBatterie.currentTime = 0;
        noteBatterie.play();
    });
})


const mainContainerWelcome = document.querySelector(".mainContainerWelcome")
const card1 = document.getElementById('card-1')
const card2 = document.getElementById('card-2')
const card3 = document.getElementById('card-3')

card1.addEventListener('click', () => {
    mainContainerWelcome.style.display = "none"
    xylophoneScreen.style.display = "block"
})

card2.addEventListener('click', () => {
    mainContainerWelcome.style.display = "none"
    pianoScreen.style.display = "block"
})

card3.addEventListener('click', () => {
    mainContainerWelcome.style.display = "none"
    batterieScreen.style.display = "block"
})

btnReturnXylo.addEventListener('click', () => {
    xylophoneScreen.style.display = "none"
    mainContainerWelcome.style.display = "flex"
})

btnReturnPiano.addEventListener('click', () => {
    pianoScreen.style.display = "none"
    mainContainerWelcome.style.display = "flex"
})

btnReturnBatterie.addEventListener('click', () => {
    batterieScreen.style.display = "none"
    mainContainerWelcome.style.display = "flex"
})