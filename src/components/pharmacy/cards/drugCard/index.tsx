"use client"

import { useState, useMemo, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Heart,
  Plus,
  Minus,
  Check,
  ShoppingCart,
} from "lucide-react"
import styles from "./drugCard.module.css"
import { ArrowLeft, Button, ChevronRight, Rating, Spinner, Tabs } from "@hexify/atoms"
import clsx from "clsx"
import Details from "./detailsComponent"
import { useGetPharmacyDrugById } from "@/http/pharmacy/query"
import routes from "@/lib/constants/routes"
import { useCart } from "@/context/cart"

interface ProductDetailProps {
  product?: {
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
  pharmacyId: string
  drugId: string
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
    "https://images.pexels.com/photos/5682763/pexels-photo-5682763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7852731/pexels-photo-7852731.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/7581085/pexels-photo-7581085.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/7615575/pexels-photo-7615575.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  flavors: [
    {
      name: "Orange",
      color: "#fff9e6",
      image:
        "https://media.istockphoto.com/id/155302141/photo/healthy-food-background-orange.jpg?s=2048x2048&w=is&k=20&c=J8PxrZGORaP9VcbowxoTtf9e__lmR-DtTRrJdx9fRJk=",
    },
    {
      name: "Blueberry",
      color: "#f0f5ff",
      image:
        "https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Lime",
      color: "#F8FAF0",
      image:
        "https://images.pexels.com/photos/4457153/pexels-photo-4457153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ],
  usage:
    "Using vitamin C supplements effectively involves understanding the appropriate dosage, the form that best suits your needs, and the timing of intake. Here are some guidelines.",
}

const ProductDetail = ({
  product = productD,
  pharmacyId,
  drugId,
}: ProductDetailProps) => {
  const { data, isLoading, error } = useGetPharmacyDrugById({
    pharmacyId,
    drugId,
  })

  const displayedData = {
    images: data?.data?.images || [],
    name: data?.data?.name,
    description: data?.data?.description,
    doses: data?.data?.doses,
    review: undefined,
    reviewCount: undefined,
    flavors: [],
    currency: "NGN",
  }

  const [selectedDoseId, setSelectedDoseId] = useState(
    displayedData?.doses?.[0]?.id
  )


  const selectedDose = useMemo(() => {
    const dose = displayedData?.doses?.find((d) => d?.id === selectedDoseId)
    if (!!dose) {
      return dose
    }

    return displayedData?.doses?.[0]
  }, [selectedDoseId, displayedData])

  const { addToCart, cartItems } = useCart();


const quantityInCart = useMemo(() => {
  return cartItems?.[selectedDose?.id]?.quantity || 0
}, [selectedDose, cartItems])

useEffect(() => {
  setQuantity(quantityInCart)
}, [quantityInCart])






  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedFlavor, setSelectedFlavor] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const handlePrevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? displayedData?.images?.length - 1 : prev - 1
    )
  }

  const handleNextImage = () => {
    setSelectedImage((prev) =>
      prev === displayedData?.images?.length - 1 ? 0 : prev + 1
    )
  }

  const handleQuantityChange = (value: number) => {
    const newQuantity = quantity + value
    if (newQuantity >= 0) {
      setQuantity(newQuantity)
    }
  }

  const handleDoseSelection = (e: any) => {
    setSelectedDoseId(e?.target?.value)
  }




  const tabs = [
    {
      label: "Details",
      Component: () => <Details product={data?.data} selectedDose={selectedDose} />,
    },
    {
      label: "Packing",
      Component: () => <div>No Design </div>,
    },
    {
      label: "Shipping details",
      Component: () => <div>No Design</div>,
    },
  ]


  const addToCartHandler = () => {
    if(!selectedDose?.id) return;
    addToCart(selectedDose?.id, {
      name: displayedData?.name,
      form: selectedDose?.form,
      price: selectedDose?.price,
      inventoryId: selectedDose?.inventoryId,
      inventoryDoseId: selectedDose?.id,
      quantity,

    })
  }


  if(isLoading) {
    return <div className={styles.container}>
      <Spinner />
    </div>
  }
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link
          href={routes.pharmacy(pharmacyId)}
          className={styles.breadcrumbLink}
        >
          <ArrowLeft />
          Products
        </Link>
        <span className={styles.breadcrumbSeparator}>
          <ChevronRight />
        </span>
        <span className={styles.breadcrumbCurrent}>{displayedData?.name}</span>
      </div>

      <div className={styles.productGrid}>
        {/* Product Image */}
        <div className={styles.productImageContainer}>
          <div className={styles.mainImage}>
            <Image
              src={displayedData.images[selectedImage]}
              alt={displayedData.name || ""}
              width={249}
              height={350}
              className={styles.image}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{displayedData?.name}</h1>

          {/* Rating */}
          {displayedData?.review && (
            <div className={styles.ratingContainer}>
              <div className={styles.stars}>
                <Rating defaultValue={4} readOnly />
              </div>
              <span className={styles.reviewCount}>
                {displayedData.reviewCount} reviews
              </span>
              <span className={styles.separator}>|</span>
              <span className={styles.size}>{selectedDose.quantity}</span>
            </div>
          )}

          {/* Thumbnail Gallery */}
          {!!displayedData?.images?.length && (
            <div className={styles.thumbnailGallery}>
              <button
                onClick={handlePrevImage}
                className={styles.galleryButton}
              >
                <ArrowLeft />
              </button>
              {displayedData.images.map((image, index) => (
                <div
                  key={index}
                  className={`${styles.thumbnail} ${selectedImage === index ? styles.activeThumbnail : ""}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${displayedData.name} thumbnail ${index + 1}`}
                    height={79}
                    width={57}
                  />
                </div>
              ))}
              <button
                onClick={handleNextImage}
                className={clsx(styles.galleryButton, styles.next)}
              >
                <ArrowLeft />
              </button>
            </div>
          )}

          {/* Price */}
          <div className={styles.priceContainer}>
            <h2 className={styles.price}>
              {displayedData.currency} {selectedDose?.price?.toLocaleString()}
            </h2>
          </div>

          {/* Description */}
          {displayedData?.description && (
            <p className={styles.description}>
              {displayedData?.description}{" "}
              <button className={styles.readMore}>Read more...</button>
            </p>
          )}

          {/* Flavor Selection */}
          {!!displayedData?.flavors?.length && (
            <div className={styles.flavorSection}>
              <div>
                <h3 className={styles.sectionTitle}>Flavour</h3>
                <div className={styles.selectedFlavorName}>
                  {displayedData?.flavors[selectedFlavor].name}
                </div>
              </div>
              <div className={styles.flavorOptions}>
                {displayedData.flavors.map((flavor, index) => (
                  <div
                    key={index}
                    className={`${styles.flavorOption} ${selectedFlavor === index ? styles.selectedFlavor : ""}`}
                    onClick={() => setSelectedFlavor(index)}
                    style={{ backgroundColor: flavor.color }}
                  >
                    <Image
                      src={flavor.image || "/placeholder.svg"}
                      alt={flavor.name}
                      width={56}
                      height={52}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className={styles.purchaseOptions}>
            <label htmlFor="dose" className={styles.sizeSelector}>
              <select
                onChange={handleDoseSelection}
                id="dose"
                className={styles.select}
              >
                {displayedData?.doses?.map((dose) => {
                  return (
                    <option
                      value={dose?.id}
                      className={styles.option}
                      key={dose?.id}
                    >
                      {dose?.form?.[0]?.toUpperCase()}{dose?.form?.slice(1)} {`(${dose?.strength}${dose?.unit})`}
                    </option>
                  )
                })}
              </select>
            </label>
            <div className={styles.quantitySelector}>
              <button
                className={styles.quantityButton}
                onClick={() => handleQuantityChange(-1)}
              >
                <Minus size={16} />
              </button>
              <input
                type="text"
                value={quantity}
                defaultValue={10}
                readOnly
                className={styles.quantityInput}
              />
              <button
                className={styles.quantityButton}
                onClick={() => handleQuantityChange(1)}
              >
                <Plus size={16} />
              </button>
            </div>
            <Button
              variant="contained"
              color="primary"
              rounded
              className={styles.addToCartButton}
             onClick={addToCartHandler}
            >
              {" "}
              <ShoppingCart size={18} /> {!!quantityInCart ? "Update cart" : "Add to cart"}
            </Button>
          </div>

          {/* Wishlist and Guarantee */}
{ false &&         <div className={styles.additionalOptions}>
            <button className={styles.wishlistButton}>
              <Heart size={24} />
              Add to wishlist
            </button>
            <div className={styles.guarantee}>
              <span className={styles.iconWrapper}>
                <Check size={16} className={styles.checkIcon} />
              </span>
              <span>30 days money back guarantee</span>
            </div>
          </div>}

          {/* Tabs */}
          <div className={styles.tabsContainer}>
            <Tabs tabs={tabs} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
