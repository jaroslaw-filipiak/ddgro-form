import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAdditionalProducts } from '@/store/slices/formSlice'
import { useTranslations } from 'next-intl'

export const ItemCounter = props => {
    const dispatch = useDispatch()
    const [count, setCount] = React.useState(0)
    const products = useSelector(state => state.form.products)
    const [filteredProducts, setFilteredProducts] = React.useState([])

    const t = useTranslations()

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
            <input onChange={handleChange} type='number' className='border p-1' placeholder={t('ItemCounter.label')} value={count ? count : ''} />
        </>
    )
}
