'use client';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin"></div>
        <p className="text-gray-600 text-sm">Loading...</p>
      </div>
    </div>
  );
}
