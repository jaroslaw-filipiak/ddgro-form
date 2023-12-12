import React from 'react';
import { MinusIcon } from './MinusIcon';
import { PlusIcon } from './PlusIcon';
import { Button } from '@nextui-org/react';

const handleIncrement = () => {
  console.log('handleIncrement');
};
const handleDecrement = () => {
  console.log('handleDecrement');
};

export const ItemCounter = (props) => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Button onClick={handleDecrement} isIconOnly size='sm' radius='full'>
        <MinusIcon />
      </Button>
      <div className='pl-1 pr-1'> {count ? count : '-'} </div>
      <Button onClick={handleIncrement} isIconOnly size='sm' radius='full'>
        <PlusIcon />
      </Button>
    </>
  );
};
