import { Product } from "@/types/product";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaHeart } from "react-icons/fa";
import { motion } from "motion/react";
const MotionLink = motion.create(Link);

const AllProductsCard = ({ product }: { product: Product }) => {
  if (!product) return <p> No data found</p>;

  return (
    <MotionLink
      href={`/all-products/${product.id}`}
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        y: -5,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
    >
      <Card className=" gap-2 group cursor-pointer">
        <div className="relative w-full aspect-square">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            alt="Indie Hackers community"
            className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
            loading="lazy"
            src={product.image}
          />
          <Chip className="absolute top-2 right-2"> {product.category} </Chip>
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
            <Chip className="flex items-center gap-2 text-white bg-black/70 backdrop-blur-md px-4 py-2">
              <FaHeart className="text-red-500" />
              Favorite
            </Chip>
          </div>
          <Button
            onClick={() => redirect(`/all-tiles/${product.id}`)}
            className="absolute right-2  bottom-2 opacity-0 transition duration-300 group-hover:opacity-100"
          >
            View Details
          </Button>
        </div>
        <Card.Header> {product.name} </Card.Header>
        <Card.Content>
          {" "}
          {product.price} {product.colors}{" "}
        </Card.Content>
      </Card>
    </MotionLink>
  );
};

export default AllProductsCard;
