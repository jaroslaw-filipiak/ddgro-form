'use client'

import AdminProductsTable from './Table'
import { useState, useEffect } from 'react'
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
            setError('Failed to load products')
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div>
            <AdminProductsTable items={products} />
        </div>
    )
}
