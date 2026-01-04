import { motion } from "framer-motion"

const highlights = [
    {
        title: "Trusted Exporters",
        description: "All partners are verified to ensure safe and reliable trade.",
    },
    {
        title: "Global Reach",
        description: "Trade with businesses across 60+ countries seamlessly.",
    },
    {
        title: "Secure Payments",
        description: "Transactions are protected with modern security protocols.",
    },
    {
        title: "24/7 Support",
        description: "Our support team is always ready to assist you anytime.",
    }
]

const HighlightsSection = () => {
    return (
        <section className="py-16 bg-white my-10">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {highlights.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        className="rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
                    >
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default HighlightsSection
