"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Heart, Plus, Minus, Check } from "lucide-react"
import styles from "./drugCard.module.css"
import { ArrowLeft, ChevronRight } from "@hexify/atoms"

interface ProductDetailProps {
  product: {
    id: string
    name: string
    price: number
    currency: string
    description: string
    rating: number
    reviewCount: number
    size: string
    images: string[]
    flavors: Array<{
      name: string
      color: string
      image: string
    }>
    usage: string
  }
}

const productD = {
  id: "vitamin-c-100ml",
  name: "Vitamin C-100ML-Original",
  price: 4500.99,
  currency: "NGN",
  description:
    "Vitamin C, also known as ascorbic acid, is a vital nutrient for various bodily functions, including the maintenance of healthy skin, blood vessels, bones, and cartilage. It also helps with wound healing and acts as an antioxidant.",
  rating: 4.5,
  reviewCount: 288,
  size: "100ml",
  images: [
    "/vitamin-c-bottle-close-up.png",
    "/vitamin-c-boost.png",
    "/vitamin-c-boost-thumbnail.png",
    "/vibrant-c-boost.png",
    "/vitamin-c-boost.png",
  ],
  flavors: [
    {
      name: "Orange",
      color: "#fff9e6",
      image: "/placeholder.svg?height=30&width=30&query=orange",
    },
    {
      name: "Blueberry",
      color: "#f0f5ff",
      image: "/placeholder.svg?height=30&width=30&query=blueberry",
    },
    {
      name: "Lime",
      color: "#f0fff5",
      image: "/placeholder.svg?height=30&width=30&query=lime",
    },
  ],
  usage:
    "Using vitamin C supplements effectively involves understanding the appropriate dosage, the form that best suits your needs, and the timing of intake. Here are some guidelines.",
}

const ProductDetail = ({ product = productD
}: ProductDetailProps) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedFlavor, setSelectedFlavor] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("details")
  const [expandedSection, setExpandedSection] = useState("how-to-use")

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? product?.images?.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === product?.images?.length - 1 ? 0 : prev + 1))
  }

  const handleQuantityChange = (value: number) => {
    const newQuantity = quantity + value
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? "" : section)
  }

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href="/products" className={styles.breadcrumbLink}>
          <ArrowLeft />
          Products
        </Link>
        <span className={styles.breadcrumbSeparator}><ChevronRight /></span>
        <Link href="/products/supplements" className={styles.breadcrumbLink}>
          Supplements
        </Link>
        <span className={styles.breadcrumbSeparator}>›</span>
        <span className={styles.breadcrumbCurrent}>Vitamin C</span>
      </div>

      <div className={styles.productGrid}>
        {/* Product Image */}
        <div className={styles.productImageContainer}>
          <div className={styles.mainImage}>
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={300}
              className={styles.image}
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className={styles.thumbnailGallery}>
            <button onClick={handlePrevImage} className={styles.galleryButton}>
              <ChevronLeft size={20} />
            </button>
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`${styles.thumbnail} ${selectedImage === index ? styles.activeThumbnail : ""}`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  width={60}
                  height={60}
                />
              </div>
            ))}
            <button onClick={handleNextImage} className={styles.galleryButton}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{product.name}</h1>

          {/* Rating */}
          <div className={styles.ratingContainer}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <span key={i + 'df'} className={i < Math.floor(product.rating) ? styles.starFilled : styles.star}>
                  {i < Math.floor(product.rating) ? "★" : "☆"}
                </span>
              ))}
              {product.rating % 1 !== 0 && <span className={styles.starHalf}>★</span>}
            </div>
            <span className={styles.reviewCount}>{product.reviewCount} reviews</span>
            <span className={styles.size}>{product.size}</span>
          </div>

          {/* Price */}
          <div className={styles.priceContainer}>
            <h2 className={styles.price}>
              {product.currency} {product.price.toLocaleString()}
            </h2>
          </div>

          {/* Description */}
          <p className={styles.description}>{product.description}</p>
          <button className={styles.readMore}>Read more...</button>

          {/* Flavor Selection */}
          <div className={styles.flavorSection}>
            <h3 className={styles.sectionTitle}>Flavour</h3>
            <div className={styles.flavorOptions}>
              {product.flavors.map((flavor, index) => (
                <div
                  key={index}
                  className={`${styles.flavorOption} ${selectedFlavor === index ? styles.selectedFlavor : ""}`}
                  onClick={() => setSelectedFlavor(index)}
                  style={{ backgroundColor: flavor.color }}
                >
                  <Image src={flavor.image || "/placeholder.svg"} alt={flavor.name} width={30} height={30} />
                </div>
              ))}
            </div>
            <div className={styles.selectedFlavorName}>{product.flavors[selectedFlavor].name}</div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className={styles.purchaseOptions}>
            <div className={styles.sizeSelector}>
              <select className={styles.select}>
                <option>{product.size}</option>
              </select>
            </div>
            <div className={styles.quantitySelector}>
              <button className={styles.quantityButton} onClick={() => handleQuantityChange(-1)}>
                <Minus size={16} />
              </button>
              <input type="text" value={quantity} readOnly className={styles.quantityInput} />
              <button className={styles.quantityButton} onClick={() => handleQuantityChange(1)}>
                <Plus size={16} />
              </button>
            </div>
            <button className={styles.addToCartButton}>Add to cart</button>
          </div>

          {/* Wishlist and Guarantee */}
          <div className={styles.additionalOptions}>
            <button className={styles.wishlistButton}>
              <Heart size={16} />
              Add to wishlist
            </button>
            <div className={styles.guarantee}>
              <Check size={16} className={styles.checkIcon} />
              <span>30 days money back guarantee</span>
            </div>
          </div>

          {/* Tabs */}
          <div className={styles.tabsContainer}>
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${activeTab === "details" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("details")}
              >
                Details
              </button>
              <button
                className={`${styles.tab} ${activeTab === "packing" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("packing")}
              >
                Packing
              </button>
              <button
                className={`${styles.tab} ${activeTab === "shipping" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("shipping")}
              >
                Shipping details
              </button>
            </div>
          </div>

          {/* Accordion Sections */}
          <div className={styles.accordionContainer}>
            <div className={styles.accordionItem}>
              <button className={styles.accordionHeader} onClick={() => toggleSection("key-features")}>
                KEY FEATURES
                <Plus size={16} className={styles.accordionIcon} />
              </button>
              {expandedSection === "key-features" && <div className={styles.accordionContent}>Content here</div>}
            </div>

            <div className={styles.accordionItem}>
              <button className={styles.accordionHeader} onClick={() => toggleSection("ingredients")}>
                INGREDIENTS
                <Plus size={16} className={styles.accordionIcon} />
              </button>
              {expandedSection === "ingredients" && <div className={styles.accordionContent}>Content here</div>}
            </div>

            <div className={styles.accordionItem}>
              <button className={styles.accordionHeader} onClick={() => toggleSection("how-to-use")}>
                HOW TO USE
                {expandedSection === "how-to-use" ? (
                  <div className={styles.accordionIconCircle}>
                    <Minus size={16} className={styles.accordionIcon} />
                  </div>
                ) : (
                  <Plus size={16} className={styles.accordionIcon} />
                )}
              </button>
              {expandedSection === "how-to-use" && (
                <div className={styles.accordionContent}>
                  <p>{product.usage}</p>
                </div>
              )}
            </div>

            <div className={styles.accordionItem}>
              <button className={styles.accordionHeader} onClick={() => toggleSection("quality")}>
                QUALITY
                <Plus size={16} className={styles.accordionIcon} />
              </button>
              {expandedSection === "quality" && <div className={styles.accordionContent}>Content here</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
