import React from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../components/ProductList";
import { product } from "../data/data";
import Slider from "../components/Slider";

const SearchResult = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query")?.toLowerCase() || ""; // Ambil query dari URL

  // Filter produk sesuai query
  const filteredProducts = product.filter((item) =>
    item.nama.toLowerCase().includes(query)
  );

  return (
    <div className="main-bg">
        <Slider />
        <div style={{ padding: "20px" }}>
            <h2>Hasil Pencarian untuk "{query}"</h2>
            {filteredProducts.length > 0 ? (
                <ProductList product={filteredProducts} />
                ) : (
                <>

                    <p>Produk yang anda cari tidak ditemukan.</p>

                    <div style={{ marginTop: "4rem" }}>

                            <div className="promo-tag" style={{ display: "flex",}}>
                            <div className="rectangle" />
                            <span
                                style={{
                                fontWeight: "bold",
                                marginLeft: "20px",
                                marginTop: "10px",
                                }}
                                >
                                Today's
                            </span>
                        </div>
                    </div>

                        <h1 style={{ marginLeft: "20px" }}> PROMO TERBARU </h1>
                        <ProductList product={product} />
                </>
                )}
        </div>
    </div>
  );
};

export default SearchResult;
