/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import useInputRangeStore from '../../store/useInputRangeStore';

const SliderInput = ({ label, min, step, max, id, name }) => {
    const { inputRangeValues, setInputRange } = useInputRangeStore();
    const rangeValue = inputRangeValues[name] || 0;
    const handleChange = (e) => {
        setInputRange(name, +(e.target.value));
    };

    useEffect(() => {
        if (inputRangeValues[name] === undefined) {
            setInputRange(name, 0);
        }
    }, [name, inputRangeValues, setInputRange]);
    
    return (
        <div className=''>
            <label htmlFor={id} className='font-light mb-2 inline-block'>
                {label}
            </label>
            <div className='flex gap-2'>
                <input
                    type='range'
                    id={id}
                    min={min}
                    max={max}
                    step={step}
                    name={name}
                    className='slider w-[90%]'
                    value={rangeValue}
                    onChange={handleChange}
                />
                <span className='text-red'>{rangeValue}</span>
            </div>
        </div>
    );
};

export default SliderInput;
