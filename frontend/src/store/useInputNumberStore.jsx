import { create } from 'zustand';

const useInputNumberStore = create((set) => ({
    inputNumberValues: {},
    setInputValue: (id, value) =>
        set((state) => ({
            inputNumberValues: { ...state.inputNumberValues, [id]: value },
        })),
    increaseValue: (id) =>
        set((state) => {
            const currentValue = state.inputNumberValues[id] || 0;
            return {
                inputNumberValues: {
                    ...state.inputNumberValues,
                    [id]: Math.min(currentValue + 1, 5),
                },
            };
        }),
    decreaseValue: (id) =>
        set((state) => {
            const currentValue = state.inputNumberValues[id] || 0;
            return {
                inputNumberValues: {
                    ...state.inputNumberValues,
                    [id]: Math.max(currentValue - 1, 0),
                },
            };
        }),
    resetNumberValue: () => set({inputNumberValues: {}})
}));

export default useInputNumberStore;
