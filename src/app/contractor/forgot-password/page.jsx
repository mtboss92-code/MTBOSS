import ForgotPasswordForm from '@/app/components/auth/ForgotPasswordForm';

export default function ContractorForgotPasswordPage() {
  return (
    <ForgotPasswordForm
      userType="contractor"
      loginHref="/contractor/login"
      accentColor="#2563eb"
    />
  );
}
