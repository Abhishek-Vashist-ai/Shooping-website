import { useEffect, useState } from "react";
import ProductList from "./Components/ProductList";
import SearchBar from "./Components/SearchBar";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Products</h1>
      </div>

      <SearchBar search={search} setSearch={setSearch} />

      {loading && <p className="center">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && filteredProducts.length === 0 && (
        <p className="center">No products found</p>
      )}

      {!loading && !error && (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}

export default App;