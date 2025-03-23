'use client'

import Link from 'next/link'
import { useState } from 'react'
import { IconList } from '@tabler/icons-react'

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div
            className={`bg-white py-10 transition-all duration-300 flex h-screen ${isExpanded ? 'w-40' : 'w-[44px]'}`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <div className='flex flex-col  justify-between'>
                <ul className='space-y-6 '>
                    <li>
                        <Link prefetch={true} href='/admin' className='flex items-center text-gray-700 hover:text-main transition-all '>
                            <div className='flex justify-center w-10'>
                                <IconList size={24} />
                            </div>
                            <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Produkty</span>
                        </Link>
                    </li>
                    {/* <li>
                    <Link prefetch={true} href='/admin/accesories' className='flex items-center text-gray-700 hover:text-blue-600 transition-colors'>
                        <div className='flex justify-center w-20'>
                            <IconList size={24} />
                        </div>
                        <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Akcesoria</span>
                    </Link>
                </li>
                <li>
                    <Link prefetch={true} href='/admin/applications' className='flex items-center text-gray-700 hover:text-blue-600 transition-colors'>
                        <div className='flex justify-center w-20'>
                            <IconList size={24} />
                        </div>
                        <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Zgłoszenia</span>
                    </Link>
                </li> */}
                </ul>
                <footer className='pl-2 hidden'>
                    <small className='text-xs'>v.1.0.0</small>
                </footer>
            </div>
        </div>
    )
}
