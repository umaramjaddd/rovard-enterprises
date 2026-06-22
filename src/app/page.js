"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FAQs from "@/components/FAQs";
import AllProducts from "@/components/AllProducts";
import ContactSection from "@/components/Contact";
import AboutSection from "@/components/About";
import CTASection from "@/components/CTA";
import ShowPieces from "@/components/Showpieces";

import {
  fetchCategories,
  fetchSubCategories,
  fetchProducts,
} from "../Redux/Slices/productsSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  const { categories, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
      dispatch(fetchSubCategories());
    }
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, categories.length, products.length]);
 
  return (
    // Changed bg-white to bg-background for the continuous dark aesthetic
    <main className="flex flex-col bg-black">
      <HeroSection />
      <div className="flex flex-col px-4 gap-12 max-w-7xl w-full self-center">
        <CategoryGrid />
        <AllProducts title="Featured Collection" showAll="no" />
        <AboutSection />
        <FAQs />
      </div>
      <ContactSection />
      <ShowPieces />
    </main>
  );
}