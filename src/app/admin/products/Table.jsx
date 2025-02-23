'use client'

import React from 'react'
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
    Chip,
    User,
    Pagination,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    useDraggable,
    Checkbox,
    Link,
    Select,
    SelectSection,
    SelectItem,
} from '@heroui/react'

export const columns = [
    { name: 'ID', uid: 'id', sortable: true },
    { name: 'NAME', uid: 'name', sortable: true },
    { name: 'SERIES', uid: 'series', sortable: true },
    { name: 'TYPE', uid: 'type', sortable: true },
    { name: 'DISTANCE_CODE', uid: 'distance_code', sortable: true },
    { name: 'SHORT_NAME', uid: 'short_name' },
    { name: 'HEIGHT_MM', uid: 'height_mm' },
    { name: 'PRICE_NET', uid: 'price_net', sortable: true },
    { name: 'ACTIONS', uid: 'actions' },
]

export function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : ''
}

export const PlusIcon = ({ size = 24, width, height, ...props }) => {
    return (
        <svg aria-hidden='true' fill='none' focusable='false' height={size || height} role='presentation' viewBox='0 0 24 24' width={size || width} {...props}>
            <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5}>
                <path d='M6 12h12' />
                <path d='M12 18V6' />
            </g>
        </svg>
    )
}

export const VerticalDotsIcon = ({ size = 24, width, height, ...props }) => {
    return (
        <svg aria-hidden='true' fill='none' focusable='false' height={size || height} role='presentation' viewBox='0 0 24 24' width={size || width} {...props}>
            <path
                d='M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
                fill='currentColor'
            />
        </svg>
    )
}

export const SearchIcon = props => {
    return (
        <svg aria-hidden='true' fill='none' focusable='false' height='1em' role='presentation' viewBox='0 0 24 24' width='1em' {...props}>
            <path
                d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
            />
            <path d='M22 22L20 20' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
        </svg>
    )
}

export const ChevronDownIcon = ({ strokeWidth = 1.5, ...otherProps }) => {
    return (
        <svg aria-hidden='true' fill='none' focusable='false' height='1em' role='presentation' viewBox='0 0 24 24' width='1em' {...otherProps}>
            <path
                d='m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit={10}
                strokeWidth={strokeWidth}
            />
        </svg>
    )
}

const INITIAL_VISIBLE_COLUMNS = ['id', 'name', 'series', 'type', 'distance_code', 'short_name', 'height_mm', 'price_net', 'actions']

export default function AdminProductsTable({ items }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const targetRef = React.useRef(null)
    const { moveProps } = useDraggable({ targetRef, isDisabled: !isOpen })
    const [backdrop, setBackdrop] = React.useState('opaque')
    const [selectedProduct, setSelectedProduct] = React.useState(null)
    const [filterValue, setFilterValue] = React.useState('')
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]))
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS))

    const [rowsPerPage, setRowsPerPage] = React.useState(20)
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: 'age',
        direction: 'ascending',
    })
    const [page, setPage] = React.useState(1)

    const pages = Math.ceil(items.length / rowsPerPage)

    const hasSearchFilter = Boolean(filterValue)

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === 'all') return columns

        return columns.filter(column => Array.from(visibleColumns).includes(column.uid))
    }, [visibleColumns])

    const filteredItems = React.useMemo(() => {
        let filteredItems = [...items]

        if (hasSearchFilter) {
            filteredItems = filteredItems.filter(user => user.name.toLowerCase().includes(filterValue.toLowerCase()))
        }

        return filteredItems
    }, [items, filterValue])

    const paginatedItems = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage
        const end = start + rowsPerPage

        return filteredItems.slice(start, end)
    }, [page, filteredItems, rowsPerPage])

    const sortedItems = React.useMemo(() => {
        return [...paginatedItems].sort((a, b) => {
            const first = a[sortDescriptor.column]
            const second = b[sortDescriptor.column]
            const cmp = first < second ? -1 : first > second ? 1 : 0

            return sortDescriptor.direction === 'descending' ? -cmp : cmp
        })
    }, [sortDescriptor, paginatedItems])

    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey]

        switch (columnKey) {
            case 'name':
                return (
                    <User
                        avatarProps={{ radius: 'full', size: 'sm', src: user.avatar }}
                        classNames={{
                            description: 'text-default-500',
                        }}
                        description={user.email}
                        name={cellValue}
                    >
                        {user.email}
                    </User>
                )
            case 'role':
                return (
                    <div className='flex flex-col'>
                        <p className='text-bold text-small capitalize'>{cellValue}</p>
                        <p className='text-bold text-tiny capitalize text-default-500'>{user.team}</p>
                    </div>
                )
            case 'actions':
                return (
                    <div className='relative flex justify-end items-center gap-2'>
                        <Dropdown className='bg-background border-1 border-default-200'>
                            <DropdownTrigger>
                                <Button isIconOnly radius='full' size='sm' variant='light'>
                                    <VerticalDotsIcon className='text-default-400' />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                {/* <DropdownItem key='view'>Szczegóły</DropdownItem> */}
                                <DropdownItem key='edit' onPress={() => {
                                    setSelectedProduct(user)
                                    onOpen()
                                }}>
                                    Edytuj
                                </DropdownItem>
                                <DropdownItem key='delete'>Usuń</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                )
            default:
                return cellValue
        }
    }, [])

    const onRowsPerPageChange = React.useCallback(e => {
        setRowsPerPage(Number(e.target.value))
        setPage(1)
    }, [])

    const onSearchChange = React.useCallback(value => {
        if (value) {
            setFilterValue(value)
            setPage(1)
        } else {
            setFilterValue('')
        }
    }, [])

    const topContent = React.useMemo(() => {
        return (
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between gap-3 items-end'>
                    <Input
                        isClearable
                        classNames={{
                            base: 'w-full sm:max-w-[44%]',
                            inputWrapper: 'border-1',
                        }}
                        placeholder='Szukaj...'
                        size='md'
                        startContent={<SearchIcon className='text-default-300' />}
                        value={filterValue}
                        variant='bordered'
                        onClear={() => setFilterValue('')}
                        onValueChange={onSearchChange}
                    />
                    <div className='flex gap-3'>
                        <Dropdown>
                            <DropdownTrigger className='hidden sm:flex'>
                                <Button endContent={<ChevronDownIcon className='text-small' />} size='md' variant='flat'>
                                    Kolumny
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label='Table Columns'
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
                                selectionMode='multiple'
                                onSelectionChange={setVisibleColumns}
                            >
                                {columns.map(column => (
                                    <DropdownItem key={column.uid}>
                                        {(() => {
                                            switch (column.name) {
                                                case 'ID':
                                                    return 'ID'
                                                case 'NAME':
                                                    return 'Nazwa'
                                                case 'SERIES':
                                                    return 'Seria'
                                                case 'TYPE':
                                                    return 'Typ'
                                                case 'DISTANCE_CODE':
                                                    return 'Kod'
                                                case 'SHORT_NAME':
                                                    return 'Skrócona nazwa'
                                                case 'HEIGHT_MM':
                                                    return 'Wysokość (mm)'
                                                case 'PRICE_NET':
                                                    return 'Cena netto (PLN)'
                                                case 'ACTIONS':
                                                    return 'Akcje'
                                                default:
                                                    return ''
                                            }
                                        })()}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Button className='bg-foreground text-background' endContent={<PlusIcon />} size='md'>
                            Dodaj nowy
                        </Button>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-default-400 text-small'>Łącznie {items.length} produktów</span>
                </div>
            </div>
        )
    }, [filterValue, visibleColumns, onSearchChange, onRowsPerPageChange, items.length, hasSearchFilter])

    const bottomContent = React.useMemo(() => {
        return (
            <div className='py-2 px-2 flex justify-between items-center'>
                <Pagination
                    showControls
                    classNames={{
                        cursor: 'bg-foreground text-background',
                    }}
                    color='default'
                    isDisabled={hasSearchFilter}
                    page={page}
                    total={pages}
                    variant='light'
                    onChange={setPage}
                />
                <span className='text-small text-default-400'></span>
            </div>
        )
    }, [selectedKeys, items.length, page, pages, hasSearchFilter])

    const classNames = React.useMemo(
        () => ({
            wrapper: ['max-h-[382px]', 'max-w-3xl'],
            th: ['bg-transparent', 'text-default-500', 'border-b', 'border-divider'],
            td: [
                // changing the rows border radius
                // first
                'group-data-[first=true]/tr:first:before:rounded-none',
                'group-data-[first=true]/tr:last:before:rounded-none',
                // middle
                'group-data-[middle=true]/tr:before:rounded-none',
                // last
                'group-data-[last=true]/tr:first:before:rounded-none',
                'group-data-[last=true]/tr:last:before:rounded-none',
            ],
        }),
        [],
    )

    return (
        <>
            <Table
                isCompact
                removeWrapper
                aria-label='Example table with custom cells, pagination and sorting'
                bottomContent={bottomContent}
                bottomContentPlacement='outside'
                checkboxesProps={{
                    classNames: {
                        wrapper: 'after:bg-foreground after:text-background text-background',
                    },
                }}
                classNames={classNames}
                selectedKeys={selectedKeys}
                selectionMode='multiple'
                sortDescriptor={sortDescriptor}
                topContent={topContent}
                topContentPlacement='outside'
                onSelectionChange={setSelectedKeys}
                onSortChange={setSortDescriptor}
                className='bg-white container py-6 px-12'
            >
                <TableHeader columns={headerColumns}>
                    {column => (
                        <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'} allowsSorting={column.sortable}>
                            {(() => {
                                switch (column.name) {
                                    case 'ID':
                                        return 'ID'
                                    case 'NAME':
                                        return 'Nazwa'
                                    case 'SERIES':
                                        return 'Seria'
                                    case 'TYPE':
                                        return 'Typ'
                                    case 'DISTANCE_CODE':
                                        return 'Kod'
                                    case 'SHORT_NAME':
                                        return 'Skrócona nazwa'
                                    case 'HEIGHT_MM':
                                        return 'Wysokość (mm)'
                                    case 'PRICE_NET':
                                        return 'Cena netto (PLN)'
                                    case 'ACTIONS':
                                        return 'Akcje'
                                    default:
                                        return ''
                                }
                            })()}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent={'Brak danych do wyświetlenia'} items={sortedItems}>
                    {item => <TableRow key={item.id}>{columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}
                </TableBody>
            </Table>

            <Modal
                ref={targetRef}
                size='3xl'
                isOpen={isOpen}
                placement='top-center'
                onOpenChange={onOpenChange}
                backdrop={backdrop}
                classNames={{
                    backdrop: 'bg-black bg-opacity-40 blur-lg backdrop-opacity-20',
                }}
            >
                <ModalContent>
                    {onClose => (
                        <>
                            <ModalHeader {...moveProps} className='flex flex-col gap-1'>
                                Edytuj produkt
                            </ModalHeader>
                            <ModalBody>
                                <Input 
                                    label='Nazwa' 
                                    placeholder='Nazwa'
                                    value={selectedProduct?.name || ''}
                                />
                                <div className='flex gap-4'>
                                    <Select 
                                        className='w-full' 
                                        label='Typ'
                                        selectedKeys={selectedProduct?.type ? [selectedProduct.type] : []}
                                    >
                                        <SelectItem key='wood'>Drewno</SelectItem>
                                        <SelectItem key='slab'>Płyty</SelectItem>
                                    </Select>
                                    <Select 
                                        className='w-full' 
                                        label='Seria'
                                        selectedKeys={selectedProduct?.series ? [selectedProduct.series] : []}
                                    >
                                        <SelectItem key='spiral'>Spiral</SelectItem>
                                        <SelectItem key='standard'>Standard</SelectItem>
                                        <SelectItem key='max'>Max</SelectItem>
                                    </Select>
                                </div>
                                <div className='flex gap-4'>
                                    <Input 
                                        label='Kod' 
                                        placeholder='np: 230043'
                                        value={selectedProduct?.distance_code || ''}
                                    />
                                    <Input 
                                        label='Skrócona nazwa' 
                                        placeholder='np: DPP050-070'
                                        value={selectedProduct?.short_name || ''}
                                    />
                                </div>
                                <div className='flex gap-4'>
                                    <Input 
                                        label='Wysokość (mm)' 
                                        placeholder='np: 40'
                                        value={selectedProduct?.height_mm || ''}
                                    />
                                    <Input 
                                        label='Wysokość (inch)' 
                                        placeholder='wysokośc w calach'
                                        value={selectedProduct?.height_inch || ''}
                                    />
                                </div>
                                <div className='flex gap-4'>
                                    <Input 
                                        label='Cena netto (PLN)' 
                                        placeholder='np: 120.00'
                                        value={selectedProduct?.price_net || ''}
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color='danger' variant='flat' onPress={onClose}>
                                    Anulut
                                </Button>
                                <Button color='primary' onPress={onClose}>
                                    Zapisz
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
