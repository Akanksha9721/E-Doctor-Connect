import { Suspense } from 'react';
import ResetPassword from './ResetPassword';
import { ResetSkeleton } from './ResetSkeleton';

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<ResetSkeleton />}>
      <ResetPassword />
    </Suspense>
  );
}
