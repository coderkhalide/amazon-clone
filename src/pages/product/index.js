import { useRouter } from 'next/router'
import { useEffect } from 'react'

function Products() {
    const router = useRouter()
    useEffect(() => {
        router.push('/')
    }, [])
    return (
        <h1>Redirecting to Home</h1>
    )
}

export default Products
