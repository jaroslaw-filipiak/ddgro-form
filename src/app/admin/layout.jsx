import Sidebar from '@/components/admin/Sidebar'

export default function AdminLayout({ children }) {
    return (
        <main className='flex min-h-screen'>
            <div className='w-2/12 border'>
                <Sidebar />
            </div>
            <div className='w-10/12 border bg-[#f7f5f5] py-10'>{children}</div>
        </main>
    )
}
