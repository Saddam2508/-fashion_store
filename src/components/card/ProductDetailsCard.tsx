"use client";
import React from "react";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { Product } from "@/types/product";
import { Star } from "lucide-react";
import { MdArrowBackIos } from "react-icons/md";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      delayChildren: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const DetailsCard = ({ selectedProduct }: { selectedProduct: Product }) => {
  const { addToCart } = useCart();

  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(selectedProduct);
    router.push("/cart");
  };

  return (
    <div className="mt-20 container mx-auto">
      <Card className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5 sm:gap-10">
        <motion.div
          className="relative aspect-square rounded-2xl h-[30vh] sm:h-[50vh] md:h-[70vh] sm:w-150 sm:mx-auto md:w-full"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            alt="Cherries"
            className="object-cover aspect-square rounded-2xl"
            loading="lazy"
            fill
            src={selectedProduct.image}
          />
        </motion.div>
        <motion.div
          className="flex flex-col gap-3"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex gap-1 items-center"
          >
            <MdArrowBackIos />
            <Link href={"/all-products"}>Back to All All Products</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <hr className="border-t border-gray-300 my-6" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card.Header className="gap-5">
              <Card.Title className="pr-8 text-2xl sm:text-3xl">
                {selectedProduct.name}
              </Card.Title>
              <Card.Description>
                {" "}
                {selectedProduct.inStock ? "In Stock" : "Out of stock"}
              </Card.Description>
            </Card.Header>
          </motion.div>
          <motion.div variants={itemVariants} className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={20}
                className={
                  star <= Math.round(selectedProduct.rating)
                    ? "fill-orange-400 text-orange-400"
                    : "text-gray-300"
                }
              />
            ))}
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card.Description>{selectedProduct.description}</Card.Description>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card.Description>Sizes : {selectedProduct.sizes}</Card.Description>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card.Description className="text-[1.75rem] sm:text-4xl font-bold mt-2">
              Price : {selectedProduct.price}
            </Card.Description>
          </motion.div>
          <motion.div variants={itemVariants}>
            <hr className="border-t border-gray-300 my-6" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card.Description>
              Color : {selectedProduct.colors}
            </Card.Description>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card.Description>
              Category : {selectedProduct.category}
            </Card.Description>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-auto w-full">
            <Card.Footer className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  Only 20 spots
                </span>
                <span className="text-xs text-muted">
                  Submission ends Oct 10.
                </span>
              </div>
              <Button onClick={handleAddToCart} className="w-full sm:w-auto">
                Add to Cart
              </Button>
            </Card.Footer>
          </motion.div>
        </motion.div>
      </Card>
    </div>
  );
};

export default DetailsCard;
