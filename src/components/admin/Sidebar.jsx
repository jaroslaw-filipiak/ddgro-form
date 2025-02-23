import Link from 'next/link'

export default function Sidebar() {
    return (
        <div className='bg-white py-10 px-6'>
            <ul className='space-y-1'>
                <li>
                    <Link prefetch={true} href='/admin/products'>
                        Produkty
                    </Link>
                </li>
                <li>
                    <Link prefetch={true} href='/admin/accesories'>
                        Akcesoria
                    </Link>
                </li>
                <li>
                    <Link prefetch={true} href='/admin/applications'>
                        Zgłoszenia
                    </Link>
                </li>
            </ul>
        </div>
    )
}
