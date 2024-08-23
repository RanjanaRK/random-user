import { atomWithStorage } from "jotai/utils";

const fetchAtom = atomWithStorage("fetching", false);

export default fetchAtom;
