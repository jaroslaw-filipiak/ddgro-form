import React from 'react';
import { MinusIcon } from './MinusIcon';
import { PlusIcon } from './PlusIcon';
import { Button, Input } from '@nextui-org/react';

export const ItemCounter = (props) => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  };

  return (
    <>
      <Button onClick={handleDecrement} isIconOnly size='sm' radius='full'>
        <MinusIcon />
      </Button>
      <div className='w-12 text-center'> {count ? count : '-'} </div>
      <Button onClick={handleIncrement} isIconOnly size='sm' radius='full'>
        <PlusIcon />
      </Button>
    </>
  );
};
