const ProductSkeleton = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
            <div className="h-[220px] bg-gray-200"></div>

            <div className="p-4 space-y-4">
                <div className="flex justify-between">
                    <div className="h-4 w-32 bg-gray-200 rounded"></div>
                    <div className="h-4 w-12 bg-gray-200 rounded"></div>
                </div>

                <div className="flex gap-2">
                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                    <div className="h-4 w-12 bg-gray-200 rounded"></div>
                    <div className="h-4 w-14 bg-gray-200 rounded"></div>
                </div>

                <div className="h-10 bg-gray-200 rounded"></div>
            </div>
        </div>
    )
}

export default ProductSkeleton
