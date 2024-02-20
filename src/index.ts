import { observable } from "@legendapp/state";

const state = observable({ test: true });

console.log(state.get());
