import Image from "next/image";
import Link from 'next/link';
import { Shield, Leaf, Zap, Award } from 'lucide-react';
import { getFeaturedProducts } from '@/lib/sanity';

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-neutral-950 to-neutral-800 text-white px-5 md:px-10 lg:px-20 py-10 md:py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-20 items-center">
            <div className="flex flex-col gap-6 md:gap-10 py-2 md:py-10 lg:py-20">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 bg-neutral-800 p-3 rounded-lg w-fit">
                  Built for Indian Climate. Powered by Nano-Tech
                </div>
                <h1 className="text-5xl md:text-7xl font-medium leading-tight">
                  India’s Best Nano Coatings for Reflecting Heat
                </h1>
                <p className="text-xl text-neutral-400 font-regular">
                  Excel Coatings are Ideal for homes, factories, and green buildings to reflect heat, seal surfaces,
                  and reduce maintenance with long-lasting protection.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
                >
                  Explore Products
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Excel Coatings?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative nano-coating technology delivers superior protection while maintaining environmental responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                Sustainable formulations that protect the environment while providing superior performance.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Protection</h3>
              <p className="text-gray-600">
                Nano-technology ensures maximum durability and resistance to harsh conditions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Application</h3>
              <p className="text-gray-600">
                Quick-drying formulas that reduce downtime and increase productivity.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Quality</h3>
              <p className="text-gray-600">
                Industry-leading certifications and rigorous quality control standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Featured Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="text-center">
          <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
