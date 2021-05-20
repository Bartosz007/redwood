import {store} from "../storage/storage";

export {
    refreshBetterColors,

    addBlockListener,
    addListOfBlockListeners,

    addFontListener,
    addListOfFontListeners,

    addBlockStaticListener,
    addListOfBlockStaticListeners,

    addBlockStaticListenerRev,
    addListOfBlockStaticListenersRev
}

let blockListeners = []
let fontListeners = []
let blockStaticListeners = []
let blockStaticListenersRev = []
let fontColor;
let fgColor;
let bgColor;

function refreshBetterColors() {
    refreshColors();
    refreshListenersColors();
}

function refreshColors() {
    const mainState = store.getState();
    fontColor = mainState.fontColor;
    fgColor = mainState.fgColor;
    bgColor = mainState.bgColor;
}

function refreshListenersColors() {
    for (let i = 0; i < blockListeners.length; i++) {
        blockListeners[i].style.color = fontColor;
        blockListeners[i].style.backgroundColor = fgColor;
        blockListeners[i].addEventListener("mouseover", () => onMouseOverListener(blockListeners[i]))
        blockListeners[i].addEventListener("mouseout", () => onMouseOutListener(blockListeners[i]))
    }

    for (let i = 0; i < fontListeners.length; i++) {
        fontListeners[i].style.color = fontColor;
    }

    for (let i = 0; i < blockStaticListeners.length; i++) {
        blockStaticListeners[i].style.backgroundColor = fgColor;
    }

    for (let i = 0; i < blockStaticListenersRev.length; i++) {
        blockStaticListenersRev[i].style.backgroundColor = bgColor;
    }
}


function addBlockListener(element) {
    blockListeners.push(element)
}

function addListOfBlockListeners(list) {
    for (let i = 0; i < list.length; i++) {
        blockListeners.push(list[i])
    }
}


function addBlockStaticListenerRev(element) {
    blockStaticListenersRev.push(element)
}

function addListOfBlockStaticListenersRev(list) {
    for (let i = 0; i < list.length; i++) {
        blockStaticListenersRev.push(list[i])
    }
}


function addFontListener(element) {
    fontListeners.push(element)
}

function addListOfFontListeners(list) {
    for (let i = 0; i < list.length; i++) {
        fontListeners.push(list[i])
    }
}


function addBlockStaticListener(element) {
    blockStaticListeners.push(element)
}

function addListOfBlockStaticListeners(list) {
    for (let i = 0; i < list.length; i++) {
        blockStaticListeners.push(list[i])
    }
}


function onMouseOverListener(target) {
    target.style.backgroundColor = bgColor;
}

function onMouseOutListener(target) {
    target.style.backgroundColor = fgColor;
}
