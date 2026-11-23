import ForgotPasswordForm from '@/app/components/auth/ForgotPasswordForm';

export default function ContractorResetPasswordPage() {
  return (
    <ForgotPasswordForm
      userType="contractor"
      loginHref="/contractor/login"
      accentColor="#2563eb"
    />
  );
}
