import { React, useState, useMemo, useCallback, useEffect, use } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
} from '@nextui-org/react';

import { SearchIcon } from './SearchIcon';
import { ChevronDownIcon } from './ChevronDownIcon';
import { capitalize } from './utils';
import { ItemCounter } from './ItemCounter';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Step6({ activeStep, setActiveStep }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.form.products);

  const columns = [
    { name: 'id', uid: 'id', sortable: true },
    { name: 'Nazwa', uid: 'name', sortable: true },
    { name: 'Nazwa skrócona', uid: 'short_name', sortable: true },
    { name: 'Seria', uid: 'series', sortable: true },
    { name: 'Akcje', uid: 'actions', sortable: false },
  ];

  const statusOptions = [
    { name: 'Spiral', uid: 'spiral' },
    { name: 'Podstawki tarasowe', uid: 'podstawki-tarasowe' },
    { name: 'Standard', uid: 'standard' },
    { name: 'Max', uid: 'max', sortable: true },
    { name: 'Raptor', uid: 'raptor', sortable: true },
  ];

  const [selected, setSelected] = useState(null);
  const INITIAL_VISIBLE_COLUMNS = ['id', 'name', 'series', 'actions'];

  const [filterValue, setFilterValue] = useState('');
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = useState('all');
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [sortDescriptor, setSortDescriptor] = useState({
    column: 'age',
    direction: 'ascending',
  });
  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns === 'all') return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredproducts = [...products];

    if (hasSearchFilter) {
      filteredproducts = filteredproducts.filter((product) =>
        product.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== 'all' &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredproducts = filteredproducts.filter((product) =>
        Array.from(statusFilter).includes(product.series)
      );
    }

    return filteredproducts;
  }, [products, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = useCallback((product, columnKey) => {
    const cellValue = product[columnKey];

    switch (columnKey) {
      case 'id':
        return <div>{product.id}</div>;
      case 'name':
        return (
          <div>
            {product.name}
            <strong> ({product.short_name})</strong>
          </div>
        );
      case 'series':
        let words = product.series.split('-');
        let capitalizedWords = words.map((word) => capitalizeFirstLetter(word));
        let finalString = capitalizedWords.join(' ');
        return <div>{finalString}</div>;
      case 'actions':
        return (
          <div className='relative flex justify-end items-center gap-2'>
            <ItemCounter key={product.id} item={product} />
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue('');
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue('');
    setPage(1);
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between gap-3 items-end'>
          <Input
            isClearable
            className='w-full sm:max-w-[44%]'
            placeholder='Szukaj po nazwie...'
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className='flex gap-3'>
            <Dropdown>
              <DropdownTrigger className='hidden sm:flex'>
                <Button
                  endContent={<ChevronDownIcon className='text-small' />}
                  variant='flat'
                >
                  Seria
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label='Table Columns'
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode='multiple'
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className='capitalize'>
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onRowsPerPageChange,
    products.length,
    onSearchChange,
    hasSearchFilter,
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className='py-2 px-2 flex justify-between items-center'>
        <span className='w-[30%] text-small text-default-400'>
          {selectedKeys === 'all'
            ? 'All items selected'
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color='primary'
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className='hidden sm:flex w-[30%] justify-end gap-2'>
          <Button
            isDisabled={pages === 1}
            size='sm'
            variant='flat'
            onPress={onPreviousPage}
          >
            Wstecz
          </Button>
          <Button
            isDisabled={pages === 1}
            size='sm'
            variant='flat'
            onPress={onNextPage}
          >
            Dalej
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <>
      <section>
        <div className='step--wrapper step-6 bg-[#f7f5f5]  relative'>
          {/* label absolute */}
          <div className='absolute left-0 top-0  text-white font-bold text-base flex flex-col gap-1 items-start justify-center'>
            <div className='bg-main pt-3 pb-3 pl-8 pr-8'>
              Dodaj ręcznie dodatkowe ilości produktów
            </div>
            <div className=' bg-red-500 pt-3 pb-3 pl-8 pr-8 flex items-center gap-3 w-full'>
              <div>
                <svg
                  className='icon icon-tabler icon-tabler-alert-circle-filled'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path
                    d='M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z'
                    strokeWidth='0'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <span>
                Uwaga: krok dodatkowy umożliwiający ręczne dodanie produktów,
                można pominąć bez zaznaczania jakiejkolwiek opcji
              </span>
            </div>
          </div>
          {/* content + padding */}
          <div className='step--inner pt-40 pb-20 lg:pl-10 lg:pr-10 lg:w-10/12 mx-auto'>
            {/* one serie db info */}
            <div className='series--info'>
              <header className='flex items-center justify-start gap-10'>
                <div>
                  <p className='text-2xl lg:text-4xl font-bold text-black text-opacity-70'>
                    Przeglądaj cały asortyment DDGRO
                  </p>
                  <pre>
                    <code>{selectedKeys}</code>
                  </pre>
                </div>
              </header>
              <p className='text-2xl font-bold text-black text-opacity-70 pt-4 pb-9'>
                Nasze produkty
              </p>

              <div className='series--accesories flex flex-col gap-6'>
                {/* loop items */}

                <Table
                  aria-label='products--ddgro-table'
                  bottomContent={bottomContent}
                  bottomContentPlacement='outside'
                  // classNames={{
                  //   wrapper: 'max-h-[382px]',
                  // }}
                  // selectedKeys={selectedKeys}
                  // selectionMode='multiple'
                  sortDescriptor={sortDescriptor}
                  topContent={topContent}
                  topContentPlacement='outside'
                  onSelectionChange={setSelectedKeys}
                  onSortChange={setSortDescriptor}
                >
                  <TableHeader columns={headerColumns}>
                    {(column) => (
                      <TableColumn
                        key={column.uid}
                        align={column.uid === 'actions' ? 'center' : 'start'}
                        allowsSorting={column.sortable}
                      >
                        {column.name}
                      </TableColumn>
                    )}
                  </TableHeader>
                  <TableBody
                    emptyContent={'No products found'}
                    items={sortedItems}
                  >
                    {(item) => (
                      <TableRow key={item.id}>
                        {(columnKey) => (
                          <TableCell>{renderCell(item, columnKey)}</TableCell>
                        )}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
            {/* mobile btn */}
            <div className='w-full flex items-center justify-center mt-20 mb-16'>
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                className='btn btn--main btn--rounded'
              >
                Następny krok
                <Image
                  width={42}
                  height={42}
                  className='ml-5'
                  src='/assets/arrow-next.svg'
                  alt=''
                />
              </button>
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                className='btn btn--circle pointer-none disabled:opacity-50 disabled:cursor-not-allowed fixed hidden right-10 xl:flex items-center justify-center top-[50%] translate-y-[-50%]'
              >
                <Image
                  className='min-w-[42px]'
                  src='/assets/arrow-next.svg'
                  alt=''
                  width={42}
                  height={42}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
