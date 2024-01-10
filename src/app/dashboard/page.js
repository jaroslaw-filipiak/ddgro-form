'use client';

import Matrix from '@/components/form/debug/Matrix';
import { store } from '@/store/index';
import { Provider } from 'react-redux';
import { NextUIProvider } from '@nextui-org/system';

export default function Page() {
  return (
    <main className='container min-h-screen'>
      <NextUIProvider>
        <Provider store={store}>
          <Matrix />
        </Provider>
      </NextUIProvider>
    </main>
  );
}
