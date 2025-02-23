import React, { useEffect } from 'react'
import { MinusIcon } from './MinusIcon'
import { PlusIcon } from './PlusIcon'
// import { Button } from '@heroui-org/react'
import { useDispatch, useSelector } from 'react-redux'
import { addExtraCountToProduct, setAdditionalProducts } from '@/store/slices/formSlice'

export const ItemCounter = props => {
    const dispatch = useDispatch()
    const [count, setCount] = React.useState(0)
    const products = useSelector(state => state.form.products)
    const [filteredProducts, setFilteredProducts] = React.useState([])

    useEffect(() => {
        setFilteredProducts(products)
    }, [products])

    const handleChange = e => {
        const newCount = e.target.value
        const ID = props.item.id

        setCount(newCount)

        const updatedProducts = filteredProducts.map(product => {
            if (product.id === ID) {
                return {
                    ...product,
                    count: parseInt(newCount),
                }
            } else {
                return product
            }
        })

        setFilteredProducts(updatedProducts)
        dispatch(setAdditionalProducts(updatedProducts))
    }

    return (
        <>
            <input onChange={handleChange} type='number' className='border p-1' placeholder='podaj dodatkową ilość' value={count ? count : ''} />
        </>
    )
}
