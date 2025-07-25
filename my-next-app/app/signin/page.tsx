import { LoginForm } from "@/components/sections/login-form";

const Signin = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center  bg-header backdrop-blur-2xl">
      <div className="w-[90%] h-[70%] max-w-5xl">
        <LoginForm />
      </div>
    </div>
  );
};
export default Signin;
