import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';

import {
  setSections,
  setAverageInEachSection,
  setM_STANDARD,
} from '@/store/slices/formSlice';

export default function Matrix() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.form);
  const [rows, setRows] = useState([]);
  const [standardMatrix, setStandardMatrix] = useState([]);
  const [conditionCount, setConditionCount] = useState(0);

  const columns = [
    {
      key: 'wys_mm',
      label: 'wys_mm',
    },
    {
      key: 'range',
      label: 'przedział',
    },
    {
      key: 'condition',
      label: 'warunek',
    },
    {
      key: 'count_in_range',
      label: 'ilość w predziale',
    },
  ];

  // create matrix of M_STANDARD
  const M_STANDARD = () => {
    const obj = [];
    for (let i = 0; i <= 940; i++) {
      let start = 10;
      obj[i] = {
        id: i,
        wys_mm: start + i,
        condition: 0,
      };
    }

    const calculateRange = (item) => {
      switch (true) {
        case item.wys_mm >= 10 && item.wys_mm <= 16:
          return '10-17';
        case item.wys_mm >= 17 && item.wys_mm <= 29:
          return '17-30';
        case item.wys_mm >= 30 && item.wys_mm <= 45:
          return '30-45';
        case item.wys_mm >= 46 && item.wys_mm <= 69:
          return '45-70';
        case item.wys_mm >= 70 && item.wys_mm <= 119:
          return '70-120';
        case item.wys_mm >= 120 && item.wys_mm <= 219:
          return '120-220';
        case item.wys_mm >= 220 && item.wys_mm <= 319:
          return '220-320';
        case item.wys_mm >= 320 && item.wys_mm <= 420:
          return '320-420';
        case item.wys_mm >= 421 && item.wys_mm <= 549:
          return '350-550';
        case item.wys_mm >= 550 && item.wys_mm <= 749:
          return '550-750';
        case item.wys_mm >= 750 && item.wys_mm <= 950:
          return '750-950';

        default:
          return '';
      }
    };

    const rangeObj = obj.map((item) => ({
      ...item,
      range: calculateRange(item),
    }));

    setRows(rangeObj);
    setStandardMatrix(rangeObj);

    return rangeObj;
  };

  useEffect(() => {
    M_STANDARD();
  }, []);

  const handleCalculate = () => {
    const min = state.lowest;
    const max = state.highest;

    const result = standardMatrix.map((item) => {
      if (item.wys_mm > min && item.wys_mm < max) {
        return {
          ...item,
          condition: 1,
        };
      } else {
        return {
          ...item,
          condition: 0,
        };
      }
    });

    // ilość przedziałów
    const conditionLength = result.filter(
      (item) => item.condition === 1
    ).length;

    // średnia ilośc w przedziale
    const averageInSection = state.supports_count / conditionLength;
    dispatch(setAverageInEachSection(averageInSection));

    const final = result.map((item) => {
      if (item.condition === 0) {
        return {
          ...item,
          count_in_range: 0,
        };
      } else {
        return {
          ...item,
          count_in_range: averageInSection,
        };
      }
    });

    setRows(final);
    setConditionCount(conditionLength);

    dispatch(setSections(conditionLength));
    dispatch(setM_STANDARD(final));
  };

  return (
    <div className='matrix pt-4 pb-4 border border-dashed mt-5'>
      <header>
        <button
          className='btn btn--main btn--rounded'
          onClick={handleCalculate}
        >
          Calculate
        </button>
        <div>
          <div>Min: {state.lowest}</div>
          <div>Max: {state.highest}</div>
        </div>
        <div>
          <div>Liczba przedziałów: {state.sections}</div>
          <div>Liczba w przedziale: {state.count_in_each_section}</div>
        </div>
      </header>
      <div className='table w-full'>
        <Table aria-label='Example table with dynamic content'>
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
