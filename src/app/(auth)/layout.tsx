import { MockAuthProvider } from '@/context/MockAuthProvider';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MockAuthProvider>{children}</MockAuthProvider>;
}
