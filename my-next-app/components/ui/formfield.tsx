import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const FormField = ({ label, id, type, placeholder, onChange }: any) => (
  <div className="space-y-1">
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      required
      onChange={onChange}
      className="bg-black/50  border-white/20"
    />
  </div>
);
export default FormField;
