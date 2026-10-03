import React from 'react'

export default function loading() {
  return (
    <div className="max-w-7xl mx-auto p-6 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Image Skeleton */}
        <div className="bg-gray-200 rounded-xl h-[450px] w-full"></div>

        {/* Content Skeleton */}
        <div className="space-y-5">
          <div className="h-10 bg-gray-200 rounded w-3/4"></div>

          <div className="flex gap-3">
            <div className="h-8 bg-gray-200 rounded w-24"></div>
            <div className="h-8 bg-gray-200 rounded w-20"></div>
          </div>

          <div className="h-6 bg-gray-200 rounded w-1/3"></div>

          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>

          <div className="flex gap-4 pt-4">
            <div className="h-12 bg-gray-200 rounded-lg w-32"></div>
            <div className="h-12 bg-gray-200 rounded-lg w-40"></div>
          </div>
        </div>
      </div>

    
    </div>
  )
}
