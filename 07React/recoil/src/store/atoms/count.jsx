import { atom, selector } from "recoil";
// This is a Recoil atom, which is a piece of state that can be shared across components.

export const countAtom = atom({
  key: "count",
  default: 0,
}); // This is the default value (aka initial value)

export const evenSelector = selector({
  key: "evenSelector",
  get: ({get}) => {
    const count = get(countAtom);
    return count % 2 === 0; // This checks if the count is even.
    // This is a Recoil selector, which is a derived piece of state that can be computed from other atoms or selectors.
    // In this case, it checks if the count is even or odd.
    // The get function is used to read the value of the countAtom.
  },
});
