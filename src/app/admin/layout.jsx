import Sidebar from '@/components/admin/Sidebar';

export default function AdminLayout({ children }) {
  return (
    <main className='flex min-h-screen'>
      <div className='border'>
        <Sidebar />
      </div>
      <div className='flex-1 border bg-[#f7f5f5] py-10'>{children}</div>
    </main>
  );
}
