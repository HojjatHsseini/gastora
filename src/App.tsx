/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingToolbar from "./components/FloatingToolbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import { Toaster } from "sonner";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');

    const handleMouseMove = (e: MouseEvent) => {
      const targets = document.querySelectorAll(".reveal-effect");
      targets.forEach((target) => {
        const rect = (target as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (target as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (target as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-orange-500/30 selection:text-orange-500 flex flex-col">
        <Toaster position="bottom-left" theme="dark" />
        <Header />
        <main className="flex-grow pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <FloatingToolbar />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
