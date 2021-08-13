import {Universe} from "wasm-game-of-life";

const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new(264, 264); // Make the universe but don't initiate th cells just yet.
pre.addEventListener('click', (e) => {
   getRelativeCoords(e);
   // Init small local cluster of cells.
});

console.log(universe);

const getRelativeCoords = (event) => {
    console.log(event.offsetX, event.offsetY);
    return {x: event.offsetX, y: event.offsetY};
}

const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();

    requestAnimationFrame(renderLoop);
}

requestAnimationFrame(renderLoop);


