import { create } from 'zustand';

const useInputRangeStore = create((set) => ({
    inputRangeValues: {},
    setInputRange: (key, value) =>
        set((state) => ({
            inputRangeValues: { ...state.inputRangeValues, [key]: value },
        })),
    resetRangeValue: () => set({inputRangeValues: {}})
}));

export default useInputRangeStore;
