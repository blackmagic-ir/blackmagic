<template>
  <div>
    <header>  
      <nav-bar />
    </header>
    <!-- main -->
    <div class="container">
      <side-bar />
      <div class="mainBar">
        <main
          ref="content"
          @mousedown="mousedown"
          @mouseup="mouseup"
          @mousemove="mousemove"
          @mousewheel="mousewheel"
        >
          <slot></slot>
        </main>
      </div>
      <side-bar />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let scale = 1;
let panning = false;
let pointX = 0;
let pointY = 0;
let start = { x: 0, y: 0 };
const content = ref();
const sidebar1 = ref(true)
const sidebar2 = ref(true)
function setTransform() {
  content.value.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
}

function mousedown(e) {
  e.preventDefault();
  start = { x: e.clientX - pointX, y: e.clientY - pointY };
  panning = true;
}

function mouseup(e) {
  panning = false;
}

function mousemove(e) {
  e.preventDefault();
  if (!panning) {
    return;
  }
  pointX = e.clientX - start.x;
  pointY = e.clientY - start.y;
  setTransform();
}

function mousewheel(e) {
  e.preventDefault();
  let xs = (e.clientX - pointX) / scale;
  let ys = (e.clientY - pointY) / scale;
  let delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
  delta > 0 ? (scale *= 1.2) : (scale /= 1.2);
  pointX = e.clientX - xs * scale;
  pointY = e.clientY - ys * scale;
  setTransform();
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  main {
    z-index: 0;
    transform-origin: 0px 0px;
    transform: scale(1) translate(0px, 0px);
    -webkit-transform: scale(1) translate(0px, 0px);
    -moz-transform: scale(1) translate(0px, 0px);
    -ms-transform: scale(1) translate(0px, 0px);
    -o-transform: scale(1) translate(0px, 0px);
    cursor: grab;
  }
}
.mainBar{
  overflow: hidden;
  flex: 5;
  background-color: $dark;
  height: 100vh;
}
</style>