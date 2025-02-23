'use client'

import AdminProductsTable from './Table'
import { useState, useEffect } from 'react'
import { CircularProgress } from '@heroui/progress'
import { fetchProducts, updateProduct } from '@/app/lib/api'

export default function AdminProductPage() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState('false')
    const [error, setError] = useState(null)

    useEffect(() => {
        loadProducts()
    }, [])

    async function loadProducts() {
        try {
            setLoading(true)
            const data = await fetchProducts()
            setProducts(data?.data)
        } catch (err) {
            setError('Wystapił problem z pobraniem produktów')
        } finally {
            setLoading(false)
        }
    }

    if (loading)
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <div className='flex'>
                    <CircularProgress color='warning' label='Wczytywanie...' showValueLabel={true} size='lg' />
                </div>
            </div>
        )
    if (error) return <div className='flex justify-center items-center min-h-screen text-red-500'>Error: {error}</div>

    return (
        <div className='min-h-screen bg-gray-50'>
            <AdminProductsTable items={products || []} />
        </div>
    )
}
