"use client";

import usePopupStore from "@/app/store/popupsatom";
import { LoginForm } from "../sections/login-form";
import { Signupform } from "../sections/signup-form";
import CloseIcon from "@mui/icons-material/Close";
export default function PopupWrapper() {
  const { SignInpopup, SignUppopup, closepopup } = usePopupStore();

  return (
    <>
      {SignInpopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full mx-4 rounded-2xl overflow-hidden shadow-2xl">
            <CloseIcon
              onClick={closepopup}
              className="absolute top-6 left-6 cursor-pointer text-white/80 hover:text-white z-10"
            />
            <LoginForm className="bg-card" />
          </div>
        </div>
      )}

      {SignUppopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative max-w-4xl mx-4 rounded-2xl overflow-hidden shadow-2xl">
            <CloseIcon
              onClick={closepopup}
              className="absolute top-8 left-8 cursor-pointer text-white/80 hover:text-white z-10"
            />
            <Signupform />
          </div>
        </div>
      )}
    </>
  );
}
