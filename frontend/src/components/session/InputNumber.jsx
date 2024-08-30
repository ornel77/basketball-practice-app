/* eslint-disable react/prop-types */

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import useInputNumberStore from '../../store/useInputNumberStore';
import { useEffect } from 'react';

const InputNumber = ({ id }) => {
    const { inputNumberValues, setInputValue, increaseValue, decreaseValue } =
        useInputNumberStore();
    const inputValue = inputNumberValues[id] || 0;

    const handleChange = (e) => {
        e.preventDefault();
        const newValue = Math.max(0, Math.min(5, Number(e.target.value) || 0));
        setInputValue(id, newValue);
    };

    useEffect(() => {
        // Initialize the value if it doesn't exist yet
        if (inputNumberValues[id] === undefined) {
            setInputValue(id, 0);
        }
    }, [id, inputNumberValues, setInputValue]);
    return (
        <div className='custom-num mt-2'>
            <FaChevronLeft
                size={24}
                className='px-1 cursor-pointer'
                onClick={() => decreaseValue(id)}
            />
            <input
                type='number'
                className='num-input'
                min={0}
                max={5}
                value={inputValue}
                onChange={handleChange}
                data-color='#fcba03'
            />
            <FaChevronRight
                size={24}
                className='px-1 cursor-pointer'
                onClick={() => increaseValue(id)}
            />
        </div>
    );
};
export default InputNumber;
