"use client";
import { RxCross2 } from "react-icons/rx";
import usePopupStore from "@/app/store/popupsatom";
import { LoginForm } from "../sections/login-form";
import { Signupform } from "../sections/signup-form";
import ErrorPopup from "@/components/sections/errorpopup";
export default function PopupWrapper() {
  const { SignInpopup, SignUppopup, Errorpopup, closepopup } = usePopupStore();

  return (
    <>
      {SignInpopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <button
            onClick={closepopup}
            className="absolute top-4 right-4 text-red-400 hover:bg-red-700"
          >
            <RxCross2 size={20} />
          </button>
          <LoginForm />
        </div>
      )}
      {SignUppopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <button
            onClick={closepopup}
            className="absolute top-4 right-4 text-red-400 hover:bg-red-700"
          >
            <RxCross2 size={20} />
          </button>
          <Signupform />
        </div>
      )}
      {Errorpopup && <ErrorPopup />}
    </>
  );
}
