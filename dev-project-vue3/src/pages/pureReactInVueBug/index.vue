<template>
  <div class="wrapper">
    <div>
      <span>0ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled0"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled0">Native button</button>
    </div>
    <div>
      <span>1ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled1"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled1">Native button</button>
    </div>
    <div>
      <span>2ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled2"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled2">Native button</button>
    </div>
    <div>
      <span>3ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled3"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled3">Native button</button>
    </div>
    <div>
      <span>4ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled4"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled4">Native button</button>
    </div>
    <div>
      <span>5ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled5"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled5">Native button</button>
    </div>
    <div>
      <span>6ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled6"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled6">Native button</button>
    </div>
    <div>
      <span>7ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled7"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled7">Native button</button>
    </div>
    <div>
      <span>8ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled8"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled8">Native button</button>
    </div>
    <div>
      <span>9ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled9"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled9">Native button</button>
    </div>
    <div>
      <span>10ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled10"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled10">Native button</button>
    </div>
    <div>
      <span>11ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled11"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled11">Native button</button>
    </div>
    <div>
      <span>12ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled12"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled12">Native button</button>
    </div>
    <div>
      <span>13ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled13"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled13">Native button</button>
    </div>
    <div>
      <span>14ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled14"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled14">Native button</button>
    </div>
    <div>
      <span>15ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled15"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled15">Native button</button>
    </div>
    <div>
      <span>16ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled16"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled16">Native button</button>
    </div>
    <div>
      <span>17ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled17"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled17">Native button</button>
    </div>
    <div>
      <span>18ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled18"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled18">Native button</button>
    </div>
    <div>
      <span>19ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled19"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled19">Native button</button>
    </div>
    <div>
      <span>20ms timeout: </span>
      <ReactButtonWithPure :disabled="disabled20"
        >React button</ReactButtonWithPure
      >
      <button :disabled="disabled20">Native button</button>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { applyPureReactInVue, applyReactInVue } from "veaury";
import { ref } from "vue";

import ReactButton from "./react_app/ReactButton";

const ReactButtonWithPure = applyPureReactInVue(ReactButton);

const disabled0 = ref(true);
const disabled1 = ref(true);
const disabled2 = ref(true);
const disabled3 = ref(true);
const disabled4 = ref(true);
const disabled5 = ref(true);
const disabled6 = ref(true);
const disabled7 = ref(true);
const disabled8 = ref(true);
const disabled9 = ref(true);
const disabled10 = ref(true);
const disabled11 = ref(true);
const disabled12 = ref(true);
const disabled13 = ref(true);
const disabled14 = ref(true);
const disabled15 = ref(true);
const disabled16 = ref(true);
const disabled17 = ref(true);
const disabled18 = ref(true);
const disabled19 = ref(true);
const disabled20 = ref(true);

setTimeout(() => {
  disabled0.value = false;
}, 0);

setTimeout(() => {
  disabled1.value = false;
}, 1);

setTimeout(() => {
  disabled2.value = false;
}, 2);

setTimeout(() => {
  disabled3.value = false;
}, 3);

setTimeout(() => {
  disabled4.value = false;
}, 4);

setTimeout(() => {
  disabled5.value = false;
}, 5);

setTimeout(() => {
  disabled6.value = false;
}, 6);

setTimeout(() => {
  disabled7.value = false;
}, 7);

setTimeout(() => {
  disabled8.value = false;
}, 8);

setTimeout(() => {
  disabled9.value = false;
}, 9);

setTimeout(() => {
  disabled10.value = false;
}, 10);

setTimeout(() => {
  disabled11.value = false;
}, 11);

setTimeout(() => {
  disabled12.value = false;
}, 12);

setTimeout(() => {
  disabled13.value = false;
}, 13);

setTimeout(() => {
  disabled14.value = false;
}, 14);

setTimeout(() => {
  disabled15.value = false;
}, 15);

setTimeout(() => {
  disabled16.value = false;
}, 16);

setTimeout(() => {
  disabled17.value = false;
}, 17);

setTimeout(() => {
  disabled18.value = false;
}, 18);

setTimeout(() => {
  disabled19.value = false;
}, 19);

setTimeout(() => {
  disabled20.value = false;
}, 20);
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
