'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { IconList, IconFileText } from '@tabler/icons-react';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  // Helper function to determine if a link is active
  const isActiveLink = (href) => {
    if (href === '/admin') {
      return pathname === '/admin';
    }
    return pathname.startsWith(href);
  };

  /*
   * Ma chwile obecną nie używam wartości isExpanded , ustawiono na false po hoverze
   *
   */

  return (
    <div
      className={`bg-white py-10 ps-4 pe-12 transition-all duration-300 flex h-screen ${
        isExpanded ? 'w-40' : ''
      }`}
      onMouseEnter={() => setIsExpanded(false)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className='flex flex-col justify-between'>
        <ul className='space-y-3'>
          <li>
            <Link
              prefetch={true}
              href='/admin'
              className={`flex items-center transition-all ${
                isActiveLink('/admin')
                  ? 'text-main rounded-lg px-2 py-1'
                  : 'text-gray-700 hover:text-main  rounded-lg px-2 py-1'
              }`}
            >
              <div className='flex justify-start w-10'>
                <IconList size={24} />
              </div>
              <span
                className={`transition-opacity duration-300 ${
                  isExpanded ? 'opacity-100' : 'opacity-100'
                }`}
              >
                Produkty
              </span>
            </Link>
          </li>
          <li>
            <Link
              prefetch={true}
              href='/admin/applications'
              className={`flex items-center transition-all ${
                isActiveLink('/admin/applications')
                  ? 'text-main rounded-lg px-2 py-1'
                  : 'text-gray-700 hover:text-main  rounded-lg px-2 py-1'
              }`}
            >
              <div className='flex justify-start w-10'>
                <IconFileText size={24} />
              </div>
              <span
                className={`transition-opacity duration-300 ${
                  isExpanded ? 'opacity-100' : 'opacity-100'
                }`}
              >
                Zgłoszenia
              </span>
            </Link>
          </li>
        </ul>
        <footer className='pl-2 hidden'>
          <small className='text-xs'>v.1.0.0</small>
        </footer>
      </div>
    </div>
  );
}
