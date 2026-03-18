"use client";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdArrowBackIos,
  MdArrowForwardIos,
} from "react-icons/md";
import { FaFilter, FaStar, FaRegStar } from "react-icons/fa";
import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";
import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const PRODUCTS_PER_PAGE = 6;

const priceRanges = [
  { label: "Under $20", min: 0, max: 20 },
  { label: "$20 – $50", min: 20, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "Over $100", min: 100, max: Infinity },
];

const ratings = [5, 4, 3, 2];

export default function CategoryPage() {
  const { id } = useParams();
  const categoryId = Number(id);

  const currentCategory = categories.find((c) => c.id === categoryId);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    rating: true,
  });
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSection = (key: keyof typeof expandedSections) =>
    setExpandedSections((s) => ({ ...s, [key]: !s[key] }));

  const filtered = useMemo(() => {
    let result = products.filter((p) => p.categoryId === categoryId);

    if (searchQuery.trim()) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedPriceRange !== null) {
      const { min, max } = priceRanges[selectedPriceRange];
      result = result.filter((p) => p.price >= min && p.price < max);
    }

    if (selectedRating !== null) {
      result = result.filter((p) => Math.floor(p.rating) >= selectedRating);
    }

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
  }, [categoryId, searchQuery, selectedPriceRange, selectedRating, sortBy]);

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);

  const paginated = filtered.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const clearFilters = () => {
    setSelectedPriceRange(null);
    setSelectedRating(null);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const hasFilters =
    selectedPriceRange !== null || selectedRating !== null || searchQuery;

  const SectionHeader = ({
    label,
    sectionKey,
  }: {
    label: string;
    sectionKey: keyof typeof expandedSections;
  }) => (
    <button
      onClick={() => toggleSection(sectionKey)}
      className="flex items-center justify-between w-full text-[12px] uppercase font-bold text-gray-500 mb-3"
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
    <div className="min-h-screen bg-[#f7f9f9]">
      <div className="max-w-[1400px] mx-auto px-4 py-12">

        {/* Heading */}
        <div className="mb-8">
          <p className="text-[11px] uppercase font-semibold text-[#1ca7a6]">
            Browse Category
          </p>
          <h1 className="salsify text-[42px] md:text-[52px] text-gray-800">
            {currentCategory?.name || "Category"}
          </h1>
          <p className="text-gray-500 mt-2">
            {currentCategory?.description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* SIDEBAR */}
          <aside className="w-full lg:w-[260px]">
            <div className="bg-white rounded-2xl p-6 shadow-sm border">

              {/* Search */}
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full mb-5 p-2 border rounded"
              />

              {/* Price */}
              <SectionHeader label="Price Range" sectionKey="price" />
              {priceRanges.map((range, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedPriceRange(
                      selectedPriceRange === i ? null : i
                    );
                    setCurrentPage(1);
                  }}
                  className="block w-full text-left py-1 text-sm"
                >
                  {range.label}
                </button>
              ))}

              {/* Rating */}
              <SectionHeader label="Rating" sectionKey="rating" />
              {ratings.map((r) => (
                <button
                  key={r}
                  onClick={() => {
                    setSelectedRating(selectedRating === r ? null : r);
                    setCurrentPage(1);
                  }}
                  className="flex items-center gap-1 py-1"
                >
                  {[1, 2, 3, 4, 5].map((n) =>
                    n <= r ? (
                      <FaStar key={n} size={12} />
                    ) : (
                      <FaRegStar key={n} size={12} />
                    )
                  )}
                </button>
              ))}

              {hasFilters && (
                <button onClick={clearFilters} className="btn mt-4 w-full">
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* MAIN */}
          <section className="flex-1">

            {/* Toolbar */}
            <div className="flex justify-between mb-4">
              <p>{filtered.length} products</p>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price ↑</option>
                <option value="price-desc">Price ↓</option>
              </select>
            </div>

            {/* GRID */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {paginated.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.max(1, p - 1))
                }
              >
                <MdArrowBackIos />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() =>
                  setCurrentPage((p) =>
                    Math.min(totalPages, p + 1)
                  )
                }
              >
                <MdArrowForwardIos />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}