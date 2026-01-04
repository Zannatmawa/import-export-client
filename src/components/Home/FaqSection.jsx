import React, { useState } from "react"

const faqData = [
    {
        question: "How do I place an order for import/export services?",
        answer: "Register on our platform, browse available services, fill out the order form, and submit it. Our team will confirm and process your request.",
    },
    {
        question: "What are your shipping and delivery timelines?",
        answer: "Delivery timelines vary depending on the destination country and the type of service. Typically, standard shipping takes 7-14 business days.",
    },
    {
        question: "How can I track my shipments?",
        answer: "Once your shipment is confirmed, you will receive a tracking ID via email. Enter the tracking ID in our 'Track Shipment' section to see real-time updates.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept multiple payment methods including credit/debit cards, PayPal, and bank transfers. All payments are processed securely.",
    },
    {
        question: "Can I cancel or modify my order?",
        answer: "Orders can be modified or canceled within 24 hours of placement. Please contact our support team immediately to request changes.",
    },
]

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="max-w-5xl mx-auto mt-16 mb-16 p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                        >
                            <span className="font-medium">{item.question}</span>
                            <span className="text-indigo-600">{openIndex === index ? "-" : "+"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="px-6 pb-4 text-gray-700">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQSection
