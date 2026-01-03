import { useLoaderData } from "react-router";
import Products from "../Products/Products";

const LatestProducts = () => {
    const products = useLoaderData() || [];
    // const product = products.slice(); 

    return (
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 bg-gray-50 mb-25">
            {products
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                .slice(0, 6)
                .map((product, index) => (
                    <Products key={index} product={product} />
                ))}
        </div>
    );
};


export default LatestProducts