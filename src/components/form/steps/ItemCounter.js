import React, { useEffect } from 'react';
import { MinusIcon } from './MinusIcon';
import { PlusIcon } from './PlusIcon';
import { Button } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { addExtraCountToProduct } from '@/store/slices/formSlice';

export const ItemCounter = (props) => {
  const dispatch = useDispatch();
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      dispatch(
        addExtraCountToProduct({
          id: props.item.id,
          count: newCount,
        })
      );
      return newCount;
    });
  };

  const handleDecrement = () => {
    if (count <= 0) {
      setCount((prev) => (prev = 0));
    } else {
      setCount((prev) => {
        const newCount = prev - 1;

        dispatch(
          addExtraCountToProduct({
            id: props.item.id,
            count: newCount,
          })
        );
        return newCount;
      });
    }
  };

  return (
    <>
      <Button onClick={handleDecrement} isIconOnly size='sm' radius='full'>
        <MinusIcon />
      </Button>
      <div className='w-12 text-center'>{count ? count : '-'} </div>
      <Button onClick={handleIncrement} isIconOnly size='sm' radius='full'>
        <PlusIcon />
      </Button>
    </>
  );
};
