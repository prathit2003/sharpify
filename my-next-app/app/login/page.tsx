import { LoginForm } from "@/components/sections/login-form";

export default function LoginPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[url('/images/background3.jpg')] bg-cover bg-bottom bg-no-repeat ">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
}
