import { motion } from "framer-motion"

const testimonials = [
    {
        name: "John Doe",
        role: "Exporter, USA",
        message: "This platform made global trading seamless and reliable.",
        avatar: "https://i.pravatar.cc/100?img=1"
    },
    {
        name: "Maria Smith",
        role: "Importer, Germany",
        message: "I found verified suppliers in minutes. Highly recommended!",
        avatar: "https://i.pravatar.cc/100?img=2"
    },
    {
        name: "Ahmed Khan",
        role: "Trader, Bangladesh",
        message: "Secure payments and easy communication. Great service.",
        avatar: "https://i.pravatar.cc/100?img=3"
    }
]

const TestimonialsSection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
                {testimonials.map((testi, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-transform"
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src={testi.avatar}
                                alt={testi.name}
                                className="w-12 h-12 rounded-full mr-4 object-cover"
                            />
                            <div>
                                <h3 className="font-semibold">{testi.name}</h3>
                                <p className="text-gray-500 text-sm">{testi.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-700">"{testi.message}"</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default TestimonialsSection
