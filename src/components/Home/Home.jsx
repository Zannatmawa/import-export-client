import LatestProducts from '../LatestProducts/LatestProducts'
import Contact from '../Contact/Contact'
import { AuthContext } from '../contexts/AuthContext'
import HeroSlider from './HeroSection'
import StatsSection from './Statistics'
import CategoriesSection from './CategoriesSection'
import HighlightsSection from './HighlightSection'
import { useEffect, useState } from 'react'
import TestimonialsSection from './Testimonials'
import NewsletterSection from './NewsLetter'
import ProductSkeleton from './ProductsSkeleton'

const Home = () => {

    const [latestProducts, setLatestProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://import-export-hub-sigma.vercel.app/products`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                return res.json()
            })
            .then((data) => {
                setLatestProducts(data)
                setLoading(false)
            })
            .catch((err) => {
                console.error("Fetch error:", err)
                setLoading(false)
            })
    }, [])



    if (loading) {
        return (
            <section className="py-16 my-20">
                <div className="max-w-7xl mx-auto px-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {[...Array(8)].map((_, i) => (
                        <ProductSkeleton key={i} />))}
                </div>
            </section>
        )
    }
    return (
        <div>
            <HeroSlider />
            <StatsSection />
            {/* <CategoriesSection /> */}
            <LatestProducts latestProducts={latestProducts} />
            <HighlightsSection />
            <TestimonialsSection />
            <NewsletterSection />
            <Contact />
        </div>
    )
}

export default Home