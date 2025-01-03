"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/product-card";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images?: string; 
}


export default function Product() {
  const [pro, setPro] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/?limit=10")
      .then((response) => response.json())
      .then((data) => {
        setPro(data.products)
        console.log(data.products) 
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="py-8 md:py-12 px-4 2xl:px-0 mx-auto max-w-screen-xl">
      <h1>All Products</h1>
      <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        {pro.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
