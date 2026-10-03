import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ProductCart({pdata}) {
    let {title,price,category,thumbnail,id}=pdata
  return (
   <div className="w-full  p-4">
      <div className="group flex flex-col bg-white overflow-hidden rounded-lg border border-gray-100 transition-all duration-300 hover:shadow-lg">
        
        {/* Product Thumbnail Area */}
        <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
          <Link 
            href={`/product/${id}`}
            className="block h-full w-full"
          >
            {/* Primary Image */}
            <img
              src={thumbnail}
              alt="Sapien Sofa Cum Bed Primary View"
              // fill=tru
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              // priority
            />
          </Link>
        </div>

        {/* Product Content Details */}
        <div className="flex flex-1 flex-col p-4">
          {/* Category Tag */}
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
            {category}
          </span>

          {/* Product Title */}
          <h3 className="text-base font-semibold text-gray-800 line-clamp-2 hover:text-amber-600 transition-colors mb-2">
            <a>
             {title}
            </a>
          </h3>

          {/* Price Box */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-lg font-bold text-gray-900">Rs. {price}</span>
            <span className="text-sm text-gray-400 line-through">Rs. {price}</span>
          </div>

          {/* Action Row */}
          <div className="mt-auto flex items-center justify-between gap-2 border-t border-gray-50 pt-3">
            {/* Wishlist Button */}
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-red-50 hover:text-red-500 transition-colors"
              title="Add to Wishlist"
              aria-label="Add to Wishlist"
            >
              <Heart/>
            </button>
            

            {/* Add to Cart Button */}
            <button
              
              className="flex-1 inline-flex items-center justify-center h-10 px-4 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 rounded-md transition-colors shadow-sm uppercase tracking-wider"
            >
                'Add to Cart'
            
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
