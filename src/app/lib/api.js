const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

/*
 *
 * PRODUKTY
 *
 */

export async function fetchProducts() {
    const response = await fetch(`${API_BASE_URL}/api/products`)
    if (!response.ok) throw new Error('wystąpił problem z pobraniem produktów')
    return response.json()
}

export async function updateProduct(id, productData) {
    const response = await fetch(`${API_BASE_URL}/api/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    })
    if (!response.ok) throw new Error('Failed to update product')
    return response.json()
}

/*
 *
 * AKCESORIA
 *
 */

export async function fetchAccesories() {
    const response = await fetch(`${API_BASE_URL}/api/accesories`)
    if (!response.ok) throw new Error('wystąpił problem z pobraniem akcesoriów')
    return response.json()
}
