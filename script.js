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

const btnPlaynote = document.createElement('button')
btnPlaynote.textContent = "Jouer"
btnPlaynote.classList.add('btnPlay')
xylophoneScreen.append(btnPlaynote)

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

    btnPlaynote.addEventListener('click', () => {

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

// const keyMap = {
//     'a': B0,
//     'z': C1,
//     'e': D1,
//     'r': E1,
//     't': F1,
//     'y': G1,
//     'u': A1
// };

// document.addEventListener('keydown', (event) => {
//     const key = event.key.toLowerCase();
//     const note = keyMap[key];
//     if (note) {
//         note.currentTime = 0;
//         note.play();
//         containerNote.children[[...note.parentNode.children].indexOf(note)].classList.add('active')
//     }
// });

// document.addEventListener('keyup', (event) => {
//     const key = event.key.toLowerCase();
//     const note = keyMap[key];
//     containerNote.children[[...note.parentNode.children].indexOf(note)].classList.remove('active')
// })