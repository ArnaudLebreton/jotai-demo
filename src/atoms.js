import { atom } from "jotai";
import {atomWithStorage} from 'jotai/utils'

// export const colorAtom = atom("green");
export const colorAtom = atomWithStorage('color-picker', 'green')

export const textAtom = atom("Foobar !!!");
export const upperCaseTextAtom = atom((get) =>
  get(textAtom).toLocaleUpperCase(),
);

export const userAtom = atom({ id: 1, name: "foobar" });
export const usernameAtom = atom((get) => get(userAtom).name);
