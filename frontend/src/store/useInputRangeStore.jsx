import { create } from 'zustand';

const useInputRangeStore = create((set) => ({
    inputRangeValues: {},
    setInputRange: (key, value) =>
        set((state) => ({
            inputRangeValues: { ...state.inputRangeValues, [key]: value },
        })),
}));

export default useInputRangeStore;
