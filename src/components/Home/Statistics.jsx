import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const stats = [
    { label: "Total Products", value: 5200 },
    { label: "Verified Exporters", value: 2100 },
    { label: "Countries Served", value: 60 },
    { label: "Successful Trades", value: 98, suffix: "%" }
]

const Counter = ({ value }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let start = 0
        const duration = 1500
        const increment = value / (duration / 16)

        const timer = setInterval(() => {
            start += increment
            if (start >= value) {
                setCount(value)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)

        return () => clearInterval(timer)
    }, [value])

    return <span>{count}</span>
}

const StatsSection = () => {
    return (
        <section className="relative -mt-20 z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white rounded-2xl shadow-xl py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl font-bold text-indigo-600">
                                    <Counter value={stat.value} />
                                    {stat.suffix || ""}
                                </h2>
                                <p className="text-gray-600 mt-2">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatsSection
