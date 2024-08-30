import SliderInput from './SliderInput';

import NavSession from './NavSession';
import { useState } from 'react';
import useInputRangeStore from '../../store/useInputRangeStore';
import useInputNumberStore from '../../store/useInputNumberStore';
import { generatePercent } from '../../utils/generatePercent';

const SessionForm = () => {
    // STORE
    const { inputRangeValues, setInputRange } = useInputRangeStore();
    const { inputNumberValues, setInputValue } = useInputNumberStore();

    const currentDate = Date.now();
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })
        .format(currentDate)
        .split('/')
        .reverse()
        .join('-');

    const [selectedDate, setSelectedDate] = useState(formattedDate);
    const handleSubmit = (e) => {
        e.preventDefault();
        const average = generatePercent(inputNumberValues)
        console.log(average);
    };

    const handleInputDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    
    return (
        <form onSubmit={handleSubmit} className='relative'>
            <section className='flex flex-wrap gap-6 mb-8'>
                <NavSession />
            </section>

            <section className='bg-white rounded-lg mb-8 p-4 shadow-lg'>
                <h2 className='text-center text-2xl uppercase font-bold mb-4'>
                    layup and free throw
                </h2>
                <div className='flex flex-col gap-5'>
                    <SliderInput
                        label={'Layup Left'}
                        min={'0'}
                        step={'1'}
                        max={'20'}
                        id={'ll'}
                        name={'ll'}
                    />
                    <SliderInput
                        label={'Layup Right'}
                        min={'0'}
                        step={'1'}
                        max={'20'}
                        id={'lr'}
                        name={'lr'}
                    />
                    <SliderInput
                        label={'Free Throw'}
                        min={'0'}
                        step={'1'}
                        max={'10'}
                        id={'ft'}
                        name={'ft'}
                    />
                </div>
            </section>
            <input
                type='date'
                className='w-full inline-block mb-10 p-4 rounded-lg focus:outline-none shadow-lg'
                value={selectedDate}
                onChange={handleInputDateChange}
            />
            <button className='px-4 py-3 bg-red w-full uppercase text-white font-bold text-xl rounded-lg shadow-lg bottom-20 left-0 z-10 sticky'>
                Finished
            </button>
        </form>
    );
};

export default SessionForm;
