import { atom } from "jotai";

// Define an atom for the user's name
export const nameAtom = atom("");

// Define an atom for the user's age
export const ageAtom = atom(0);

// Define an atom for the user's profile,
// which is composed of the name and age atoms
export const profileAtom = atom(get => ({
  name: get(nameAtom),
  age: get(ageAtom),
}));
