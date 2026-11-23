import ForgotPasswordForm from '@/app/components/auth/ForgotPasswordForm';

export default function FranchiseForgotPasswordPage() {
  return <ForgotPasswordForm userType="franchise" loginHref="/franchise/login" accentColor="#2563eb" />;
}
