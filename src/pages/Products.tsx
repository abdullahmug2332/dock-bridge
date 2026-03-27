import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdArrowBackIos,
  MdArrowForwardIos,
} from "react-icons/md";
import { FaFilter, FaStar, FaRegStar } from "react-icons/fa";
import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";
import { useState, useMemo } from "react";
import { categories, products } from "@/lib/products";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";

const PRODUCTS_PER_PAGE = 6;

const priceRanges = [
  { label: "Under $20", min: 0, max: 20 },
  { label: "$20 – $50", min: 20, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "Over $100", min: 100, max: Infinity },
];

const ratings = [5, 4, 3, 2];

export default function Products() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    rating: true,
  });

  const toggleSection = (key: keyof typeof expandedSections) =>
    setExpandedSections((s) => ({ ...s, [key]: !s[key] }));

  // --- URL Search Params ---
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");
  const selectedPriceRange =
    searchParams.get("price") !== null
      ? Number(searchParams.get("price"))
      : null;
  const selectedRating =
    searchParams.get("rating") !== null
      ? Number(searchParams.get("rating"))
      : null;
  const searchQuery = searchParams.get("search") || "";
  const sortBy = searchParams.get("sort") || "featured";
  const currentPage = Number(searchParams.get("page") || 1);

  const updateParams = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (!value) params.delete(key);
    else params.set(key, value);

    if (key !== "page") params.set("page", "1"); // reset page on filter change
    setSearchParams(params);
  };
  // Map categoryId to { name, count }
  const categoryMap = useMemo(() => {
    const map = new Map<number, { name: string; count: number }>();
    // initialize from categories JSON
    categories.forEach((cat) => map.set(cat.id, { name: cat.name, count: 0 }));
    // count products per category
    products.forEach((p) => {
      const cat = map.get(p.categoryId);
      if (cat) cat.count++;
    });
    return map;
  }, []);

  // --- Filtered products ---
  const filtered = useMemo(() => {
    let result = [...products];

    if (searchQuery.trim()) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (activeCategory) {
      const catId = Number(activeCategory);
      result = result.filter((p) => p.categoryId === catId);
    }

    if (selectedPriceRange !== null) {
      const { min, max } = priceRanges[selectedPriceRange];
      result = result.filter((p) => p.price >= min && p.price < max);
    }

    if (selectedRating !== null)
      result = result.filter((p) => Math.floor(p.rating) >= selectedRating);

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [searchQuery, activeCategory, selectedPriceRange, selectedRating, sortBy]);

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE,
  );

  const clearFilters = () => setSearchParams({});
  const hasFilters =
    activeCategory ||
    selectedPriceRange !== null ||
    selectedRating !== null ||
    searchQuery;

  const SectionHeader = ({
    label,
    sectionKey,
  }: {
    label: string;
    sectionKey: keyof typeof expandedSections;
  }) => (
    <button
      onClick={() => toggleSection(sectionKey)}
      className="flex items-center justify-between w-full text-[12px] tracking-[0.2em] uppercase font-bold text-gray-500 mb-3 cursor-pointer"
    >
      {label}
      {expandedSections[sectionKey] ? (
        <MdOutlineKeyboardArrowUp size={16} />
      ) : (
        <MdOutlineKeyboardArrowDown size={16} />
      )}
    </button>
  );

  return (
    <div className="min-h-screen" style={{ background: "#f7f9f9" }}>
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        {/* Page heading */}
        <div className="mb-8">
          <p
            className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-1"
            style={{ color: "#1ca7a6" }}
          >
            Browse Our Selection
          </p>
          <h1 className="salsify text-[42px] md:text-[52px] text-gray-800 leading-none">
            All Products
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar */}
          <aside
            className={`w-full lg:w-[260px] flex-shrink-0 lg:sticky top-6 transition-all duration-300 overflow-hidden
            ${sidebarOpen ? "max-h-[2000px] opacity-100" : "max-h-0 lg:max-h-[2000px] opacity-0 lg:opacity-100"}`}
          >
            <div
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ border: "1px solid #ececec" }}
            >
              {/* Search */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) =>
                    updateParams("search", e.target.value || null)
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg text-[14px] text-gray-800 placeholder:text-gray-300 outline-none transition-all duration-200"
                  style={{ border: "1px solid #d3d3d3", background: "#fafafa" }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#1ca7a6";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(28,167,166,0.12)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#d3d3d3";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div className="h-px mb-5" style={{ background: "#ececec" }} />

              {/* Categories */}
              <div className="mb-5">
                <SectionHeader label="Categories" sectionKey="categories" />
                {expandedSections.categories && (
                  <ul className="space-y-1">
                    {/* All Categories */}
                    <li>
                      <button
                        onClick={() => updateParams("category", null)}
                        className={`flex justify-between items-center w-full px-3 py-2 rounded-lg text-[13px] transition-all duration-150 cursor-pointer
        ${activeCategory === null ? "bg-teal-100 text-teal-600 font-semibold" : "bg-gray-50 text-gray-600 font-normal"}`}
                      >
                        <span>All Categories</span>
                        <span
                          className={`text-[11px] px-1.5 py-0.5 rounded-full
          ${activeCategory === null ? "bg-teal-200 text-teal-600" : "bg-gray-200 text-gray-400"}`}
                        >
                          {products.length}
                        </span>
                      </button>
                    </li>

                    {/* Individual Categories */}
                    {Array.from(categoryMap.entries()).map(([id, cat]) => (
                      <li key={id}>
                        <button
                          onClick={() =>
                            updateParams(
                              "category",
                              activeCategory === String(id) ? null : String(id),
                            )
                          }
                          className={`flex justify-between items-center w-full px-3 py-2 rounded-lg text-[13px] transition-all duration-150 cursor-pointer
          ${activeCategory === String(id) ? "bg-teal-100 text-teal-600 font-semibold" : "bg-gray-50 text-gray-600 font-normal"}`}
                        >
                          <span>{cat.name}</span>
                          <span
                            className={`text-[11px] px-1.5 py-0.5 rounded-full
            ${activeCategory === String(id) ? "bg-teal-200 text-teal-600" : "bg-gray-200 text-gray-400"}`}
                          >
                            {cat.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="h-px mb-5" style={{ background: "#ececec" }} />

              {/* Price Range */}
              <div className="mb-5">
                <SectionHeader label="Price Range" sectionKey="price" />
                {expandedSections.price && (
                  <ul className="space-y-0.5">
                    {priceRanges.map((range, i) => (
                      <li key={i}>
                        <button
                          onClick={() =>
                            updateParams(
                              "price",
                              selectedPriceRange === i ? null : String(i),
                            )
                          }
                          className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-[13px] transition-all duration-150 cursor-pointer"
                          style={{
                            background:
                              selectedPriceRange === i
                                ? "#f0fafa"
                                : "transparent",
                            color:
                              selectedPriceRange === i ? "#1ca7a6" : "#6b7280",
                            fontWeight: selectedPriceRange === i ? 600 : 400,
                          }}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border flex-shrink-0 flex items-center justify-center"
                            style={{
                              borderColor:
                                selectedPriceRange === i
                                  ? "#1ca7a6"
                                  : "#d3d3d3",
                              background:
                                selectedPriceRange === i ? "#1ca7a6" : "white",
                            }}
                          >
                            {selectedPriceRange === i && (
                              <span className="w-1.5 h-1.5 rounded-full bg-white block" />
                            )}
                          </span>
                          {range.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="h-px mb-5" style={{ background: "#ececec" }} />

              {/* Rating */}
              <div className="mb-2">
                <SectionHeader label="Min Rating" sectionKey="rating" />
                {expandedSections.rating && (
                  <ul className="space-y-0.5">
                    {ratings.map((r) => (
                      <li key={r}>
                        <button
                          onClick={() =>
                            updateParams(
                              "rating",
                              selectedRating === r ? null : String(r),
                            )
                          }
                          className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-[13px] transition-all duration-150 cursor-pointer"
                          style={{
                            background:
                              selectedRating === r ? "#f0fafa" : "transparent",
                          }}
                        >
                          <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((n) =>
                              n <= r ? (
                                <FaStar
                                  key={n}
                                  size={12}
                                  style={{ color: "#FF6B5A" }}
                                />
                              ) : (
                                <FaRegStar
                                  key={n}
                                  size={12}
                                  className="text-gray-300"
                                />
                              ),
                            )}
                          </div>
                          <span
                            style={{
                              color:
                                selectedRating === r ? "#1ca7a6" : "#6b7280",
                              fontWeight: selectedRating === r ? 600 : 400,
                            }}
                          >
                            & up
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Clear filters */}
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full mt-4 py-2 rounded-lg text-[12px] font-semibold tracking-wide transition-all duration-200 cursor-pointer"
                  style={{
                    border: "1.5px solid #fde8e8",
                    background: "#fff5f5",
                    color: "#ef4444",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "#fee2e2";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "#fff5f5";
                  }}
                >
                  ✕ Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <section className="flex-1 min-w-0">
            {/* Toolbar */}
            <div
              className="bg-white rounded-2xl px-5 py-3.5 mb-6 flex flex-wrap gap-3 items-center justify-between shadow-sm"
              style={{ border: "1px solid #ececec" }}
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="flex lg:hidden items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-semibold transition-all cursor-pointer"
                  style={{ border: "1.5px solid #e5e5e5", color: "#6b7280" }}
                >
                  <FaFilter size={12} /> Filters
                  {hasFilters && (
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#FF6B5A" }}
                    />
                  )}
                </button>
                <p className="text-[13px] text-gray-400">
                  <span className="font-semibold text-gray-700">
                    {filtered.length}
                  </span>{" "}
                  products found
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* Active filter chips */}
                <div className="hidden md:flex items-center gap-2 flex-wrap">
                  {activeCategory && (
                    <span
                      onClick={() => updateParams("category", null)}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold cursor-pointer"
                      style={{
                        background: "#f0fafa",
                        color: "#1ca7a6",
                        border: "1px solid #c8e8e8",
                      }}
                    >
                      {activeCategory} <span className="text-gray-400">×</span>
                    </span>
                  )}
                  {selectedPriceRange !== null && (
                    <span
                      onClick={() => updateParams("price", null)}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold cursor-pointer"
                      style={{
                        background: "#f0fafa",
                        color: "#1ca7a6",
                        border: "1px solid #c8e8e8",
                      }}
                    >
                      {priceRanges[selectedPriceRange].label}{" "}
                      <span className="text-gray-400">×</span>
                    </span>
                  )}
                  {selectedRating !== null && (
                    <span
                      onClick={() => updateParams("rating", null)}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold cursor-pointer"
                      style={{
                        background: "#f0fafa",
                        color: "#1ca7a6",
                        border: "1px solid #c8e8e8",
                      }}
                    >
                      {selectedRating}★ & up{" "}
                      <span className="text-gray-400">×</span>
                    </span>
                  )}
                </div>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => updateParams("sort", e.target.value)}
                  className="px-3 py-2 rounded-lg text-[13px] text-gray-600 outline-none cursor-pointer transition-all duration-200"
                  style={{
                    border: "1.5px solid #e5e5e5",
                    background: "#fafafa",
                  }}
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="name">Name A–Z</option>
                </select>

                {/* View toggle */}
                <div
                  className="flex items-center rounded-lg overflow-hidden"
                  style={{ border: "1.5px solid #e5e5e5" }}
                >
                  <button
                    onClick={() => updateParams("view", "grid")}
                    className="px-2.5 py-2 transition-colors cursor-pointer"
                    style={{
                      background:
                        searchParams.get("view") === "grid"
                          ? "#f0fafa"
                          : "white",
                      color:
                        searchParams.get("view") === "grid"
                          ? "#1ca7a6"
                          : "#9ca3af",
                      borderRight: "1.5px solid #e5e5e5",
                    }}
                  >
                    <HiOutlineViewGrid size={16} />
                  </button>
                  <button
                    onClick={() => updateParams("view", "list")}
                    className="px-2.5 py-2 transition-colors cursor-pointer"
                    style={{
                      background:
                        searchParams.get("view") === "list"
                          ? "#f0fafa"
                          : "white",
                      color:
                        searchParams.get("view") === "list"
                          ? "#1ca7a6"
                          : "#9ca3af",
                    }}
                  >
                    <HiOutlineViewList size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Empty state */}
            {paginated.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 gap-3">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-[28px]"
                  style={{ background: "#f0fafa", border: "2px solid #c8e8e8" }}
                >
                  🔍
                </div>
                <p className="text-[18px] font-semibold text-gray-600 salsify">
                  No products found
                </p>
                <p className="text-[13px] text-gray-400">
                  Try adjusting your filters
                </p>
                <button onClick={clearFilters} className="btn mt-2">
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                {/* Grid view */}
                {(searchParams.get("view") || "grid") === "grid" && (
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {paginated.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}

                {/* List view */}
                {(searchParams.get("view") || "grid") === "list" && (
                  <div className="space-y-4">
                    {paginated.map((product) => (
                      <Link
                        to={`/product/${product.id}`}
                        key={product.id}
                        className="flex gap-5 bg-white rounded-2xl p-4 shadow-sm transition-all duration-200 hover:shadow-md"
                        style={{ border: "1px solid #ececec" }}
                      >
                        <img
                          src={product.images?.[0]}
                          alt={product.name}
                          className="w-28 h-28 object-cover rounded-xl flex-shrink-0"
                          style={{ border: "1px solid #ececec" }}
                        />
                        <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                          <div>
                            <h3 className="text-[16px] font-semibold text-gray-800">
                              {product.name}
                            </h3>
                            <p className="text-[13px] text-gray-400 mt-1 line-clamp-2">
                              {product.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-0.5">
                              {[1, 2, 3, 4, 5].map((n) =>
                                n <= Math.round(product.rating) ? (
                                  <FaStar
                                    key={n}
                                    size={11}
                                    style={{ color: "#FF6B5A" }}
                                  />
                                ) : (
                                  <FaRegStar
                                    key={n}
                                    size={11}
                                    className="text-gray-200"
                                  />
                                ),
                              )}
                              <span className="text-[11px] text-gray-400 ml-1">
                                {product.rating.toFixed(1)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between flex-shrink-0">
                          <span
                            className="text-[20px] font-bold salsify"
                            style={{ color: "#1ca7a6" }}
                          >
                            ${product.price.toFixed(2)}
                          </span>
                          <span className="btn2 text-[12px] px-4 py-1.5">
                            Add to Cart
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Pagination */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[13px] text-gray-400">
                    Showing{" "}
                    <span className="font-semibold text-gray-700">
                      {(currentPage - 1) * PRODUCTS_PER_PAGE + 1}–
                      {Math.min(
                        currentPage * PRODUCTS_PER_PAGE,
                        filtered.length,
                      )}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-gray-700">
                      {filtered.length}
                    </span>{" "}
                    products
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateParams(
                          "page",
                          String(Math.max(1, currentPage - 1)),
                        )
                      }
                      disabled={currentPage === 1}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{
                        border: "1.5px solid #e5e5e5",
                        background: "white",
                        color: "#6b7280",
                      }}
                    >
                      <MdArrowBackIos size={12} /> Prev
                    </button>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <button
                            key={page}
                            onClick={() => updateParams("page", String(page))}
                            className="w-9 h-9 rounded-lg text-[13px] font-semibold transition-all duration-200 cursor-pointer"
                            style={{
                              background:
                                currentPage === page ? "#1ca7a6" : "white",
                              color: currentPage === page ? "white" : "#6b7280",
                              border:
                                currentPage === page
                                  ? "1.5px solid #1ca7a6"
                                  : "1.5px solid #e5e5e5",
                            }}
                          >
                            {page}
                          </button>
                        ),
                      )}
                    </div>

                    <button
                      onClick={() =>
                        updateParams(
                          "page",
                          String(Math.min(totalPages, currentPage + 1)),
                        )
                      }
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{
                        border: "1.5px solid #e5e5e5",
                        background: "white",
                        color: "#6b7280",
                      }}
                    >
                      Next <MdArrowForwardIos size={12} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
