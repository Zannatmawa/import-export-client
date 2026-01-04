import { motion } from "framer-motion"
import { useState } from "react"
//bg-[#4F46E5]
const NewsletterSection = () => {
    const [email, setEmail] = useState("")

    const handleSubscribe = (e) => {
        e.preventDefault()
        alert(`Subscribed with: ${email}`)
        setEmail("")
    }

    return (
        <section className="py-16 bg-[#4F46E5]">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto px-6 text-center text-white"
            >
                <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="mb-8 text-lg">
                    Get the latest updates, offers, and product news straight to your inbox.
                </p>
                <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full sm:w-auto px-4 py-3 rounded-lg border border-gray-200 focus:outline-none text-gray-800"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                        className="px-6 py-3 rounded-lg bg-gray-500 font-semibold text-white hover:bg-gray-600 transition-colors"
                        type="submit"
                    >
                        Subscribe
                    </motion.button>
                </form>
            </motion.div>
        </section>
    )
}

export default NewsletterSection
