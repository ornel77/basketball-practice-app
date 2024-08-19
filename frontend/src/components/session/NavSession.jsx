import { useState } from 'react';
import FirstAngle from './angles/FirstAngle';
import ThirdAngle from './angles/ThirdAngle';
import SecondAngle from './angles/SecondAngle';
import FourthAngle from './angles/FourthAngle';
import FifthAngle from './angles/FifthAngle';

const NavSession = () => {
    const [activeTab, setActiveTab] = useState('first');
    const TAB_ITEMS = [
        { label: '0° Left', tabName: 'first' },
        { label: '45° Left', tabName: 'second' },
        { label: '90°', tabName: 'third' },
        { label: '45° Right', tabName: 'fourth' },
        { label: '0° Right', tabName: 'fifth' },
    ];



    const handleTab = (tab) => {
        if (tab === activeTab) return;
        setActiveTab(tab);
    };
    return (
        <div className='w-full relative'>
            <ul className='flex justify-between gap-1 mb-6'>
                {TAB_ITEMS.map((item, index) => (
                    <li
                        className={`tabs ${
                            activeTab === item.tabName
                                ? 'bg-red text-white'
                                : 'bg-pink-200'
                        }`}
                        key={index}
                    >
                        <button onClick={() => handleTab(item.tabName)}>
                            {' '}
                            {item.label}{' '}
                        </button>
                    </li>
                ))}
            </ul>
            <div>
                {activeTab === 'first' && <FirstAngle />}
                {activeTab === 'second' && <SecondAngle />}
                {activeTab === 'third' && <ThirdAngle />}
                {activeTab === 'fourth' && <FourthAngle />}
                {activeTab === 'fifth' && <FifthAngle />}
            </div>
        </div>
    );
};

export default NavSession;
