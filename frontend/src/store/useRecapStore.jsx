import { create } from 'zustand';

const useRecapStore = create((set) => ({
    recap: undefined,
    setRecap: (value) =>
        set(() => ({
            recap: value
        })),
}));

export default useRecapStore
