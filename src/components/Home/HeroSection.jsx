import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
    {
        title: "Global Import & Export Made Simple",
        subtitle: "Connect with verified buyers and sellers worldwide",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
    },
    {
        title: "Expand Your Trade Across Borders",
        subtitle: "Access trusted exporters from 60+ countries",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
        title: "Secure & Transparent Trade Platform",
        subtitle: "Built for modern global commerce",
        image: "https://images.unsplash.com/photo-1700114339471-9e90a155d4b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
    }
]

const slideVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
}

const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
}

const HeroCarousel = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const prev = () =>
        setIndex((i) => (i === 0 ? slides.length - 1 : i - 1))

    const next = () =>
        setIndex((i) => (i + 1) % slides.length)

    return (
        <section className="relative h-[70vh] overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 1.0 }}
                    className="absolute inset-0"
                >
                    <img
                        src={slides[index].image}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center">
                        <div className="max-w-7xl mx-auto px-6 text-white">
                            <motion.h1
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-5xl font-bold mb-4"
                            >
                                {slides[index].title}
                            </motion.h1>
                            <motion.p
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.4 }}
                                className="text-lg md:text-xl max-w-xl"
                            >
                                {slides[index].subtitle}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-6"
                            >
                                <button className="bg-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">
                                    Explore Marketplace
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 w-10 h-10 rounded-full flex items-center justify-center"
            >
                ‹
            </button>

            <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 w-10 h-10 rounded-full flex items-center justify-center"
            >
                ›
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm animate-bounce">
                ↓ Scroll
            </div>
        </section>
    )
}

export default HeroCarousel
