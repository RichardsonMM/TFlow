import React from 'react';
import {SearchIcon, AtSymbolIcon, BellIcon} from '@heroicons/react/outline';
import Image from 'next/image';

function TopBar(props) {
    return (
        <div style={{borderRadius: "10px"}} className="h-16 pl-40 fixed bg-gradient-to-r from-pink-800
        to-purple-700 w-full flex items-center justify-between pr-5">

            <div className="flex space-x-6 w-full">

                <div className="flex justify-between items-center text-white w-full">
                    <h1 style={{ fontSize: '24px' }} className='font-bold'>TFLOW</h1>

                </div>
            </div>
        </div>
    );
}

export default TopBar