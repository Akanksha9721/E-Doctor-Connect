'use client';

export function ResetSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full max-w-md">
        <div className="h-6 bg-gray-300 rounded w-2/3 mx-auto" />
        <div className="bg-white p-6 rounded shadow space-y-4">
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  );
}
