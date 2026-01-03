import { motion } from "framer-motion"

const categories = [
    "Agriculture",
    "Textile",
    "Electronics",
    "Machinery",
    "Pharmaceutical",
    "Raw Materials"
]

const CategoriesSection = () => {
    return (
        <section className="py-16 bg-gray-50 my-25 ">
            <h2 className="text-3xl font-bold text-center mb-10">Top Categories</h2>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.map((name, i) => (
                    <motion.div
                        key={i}
                        initial={{ backgroundColor: "white" }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
                            backgroundColor: "#bfdbfe"
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="rounded-xl py-12 flex items-center justify-center cursor-pointer border border-gray-200"
                    >
                        <span className="font-semibold text-lg md:text-xl">{name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default CategoriesSection
