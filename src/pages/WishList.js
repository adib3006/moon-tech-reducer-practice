import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

function WishList() {
    const {
        state: { wishList, loading, error },
    } = useProducts();

    const fromWishList = true;

    let content;

    if (loading) {
        content = <p className="text-center">Loading</p>;
    }

    if (error) {
        content = <p>Something went wrong</p>;
    }

    if (!loading && !error && wishList?.length === 0) {
        content = <p>Nothing to show, Product list is empty.</p>;
    }

    if (!loading && !error && wishList?.length) {
        content = wishList?.map((product, index) => (
            <ProductCard
                fromWishList={fromWishList}
                key={index}
                product={product}
            />
        ));
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
            {content}
        </div>
    );
}

export default WishList;
