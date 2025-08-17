import { Button } from "@/components/ui/button";

const icons = {
  Google: (
    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 2.484c-5.225 0-9.488 4.147-9.488 9.244 ..." />
    </svg>
  ),
  GitHub: (
    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 ..." />
    </svg>
  ),
};

const AuthButton = ({ provider }: { provider: "Google" | "GitHub" }) => (
  <Button variant="outline" className="w-full">
    {icons[provider]}
    Signup with {provider}
  </Button>
);
export default AuthButton;
