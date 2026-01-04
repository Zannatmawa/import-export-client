const PrivacyTerms = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-10 text-center">
                Privacy Policy & Terms of Service
            </h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
                <p className="mb-4">
                    Import Export Hub values your privacy. This policy explains how we
                    collect, use, and protect your personal information when you use
                    our platform.
                </p>

                <h3 className="text-xl font-semibold mb-2">Information We Collect</h3>
                <ul className="list-disc pl-6 mb-4">
                    <li>Personal details such as name, email, and profile information</li>
                    <li>Product listings and interaction data</li>
                    <li>Technical data such as browser type and IP address</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">How We Use Information</h3>
                <ul className="list-disc pl-6 mb-4">
                    <li>To provide and improve our services</li>
                    <li>To communicate important updates</li>
                    <li>To ensure platform security and prevent misuse</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
                <p>
                    We implement industry-standard security measures to protect your
                    data and do not share personal information with third parties
                    without consent, except where required by law.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
                <p className="mb-4">
                    By using Import Export Hub, you agree to comply with the following
                    terms and conditions.
                </p>

                <h3 className="text-xl font-semibold mb-2">User Responsibilities</h3>
                <ul className="list-disc pl-6 mb-4">
                    <li>Provide accurate and lawful information</li>
                    <li>Do not engage in fraudulent or illegal activities</li>
                    <li>Respect other users and platform policies</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">Content & Listings</h3>
                <p className="mb-4">
                    Users are responsible for the accuracy of their product listings.
                    Import Export Hub reserves the right to remove content that violates
                    platform rules.
                </p>

                <h3 className="text-xl font-semibold mb-2">Limitation of Liability</h3>
                <p className="mb-4">
                    Import Export Hub is not liable for any direct or indirect losses
                    resulting from transactions or use of the platform.
                </p>

                <h3 className="text-xl font-semibold mb-2">Changes to Policy</h3>
                <p>
                    We may update these policies at any time. Continued use of the
                    platform indicates acceptance of the updated terms.
                </p>
            </section>
        </div>
    )
}

export default PrivacyTerms
