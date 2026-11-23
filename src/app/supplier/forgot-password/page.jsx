'use client';
import ForgotPasswordForm from '@/app/components/auth/ForgotPasswordForm';
export default function Page() {
  return <ForgotPasswordForm userType="supplier" loginHref="/supplier/login" accentColor="#10b981" />;
}
