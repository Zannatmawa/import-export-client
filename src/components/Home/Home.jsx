import LatestProducts from '../LatestProducts/LatestProducts'
import Contact from '../Contact/Contact'
import OurServices from '../OurServices/OurServices'
import Search from '../Search/Search'
import { AuthContext } from '../contexts/AuthContext'
import HeroSlider from './HeroSection'
import StatsSection from './Statistics'
import CategoriesSection from './CategoriesSection'
import HighlightsSection from './HighlightSection'
import { useEffect, useState } from 'react'

const Home = () => {
    const [latestProducts, setLatestProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://import-export-hub-sigma.vercel.app/products")
            .then((res) => res.json())
            .then((data) => {
                setLatestProducts(data)
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }, [])

    // if (loading) return <p className="text-center py-10">Loading...</p>
    return (
        <>
            <HeroSlider />
            <StatsSection />
            <CategoriesSection />
            <HighlightsSection />
            <LatestProducts latestProducts={latestProducts} />
            <Contact />
            <OurServices />
        </>
    )
}

export default Home