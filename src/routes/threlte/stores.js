import { writable } from 'svelte/store'

export const wasmProject = writable({})
export const project = writable({})

export const realization = writable({})
export const wasmRealization = writable({})

export const workbenchIndex = writable(-1)
export const workbench = writable({})

// stores the index of the feature being edited
export const featureIndex = writable(-1)
export const realizationIsStale = writable(false)