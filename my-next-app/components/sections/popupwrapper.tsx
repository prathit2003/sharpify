"use client";

import usePopupStore from "@/app/store/popupsatom";
import { LoginForm } from "../sections/login-form";
import { Signupform } from "../sections/signup-form";
import PrivewPopup from "@/components/sections/preview";
import CloseIcon from "@mui/icons-material/Close";
export default function PopupWrapper() {
  const { SignInpopup, SignUppopup, Priviewpopup, closepopup } =
    usePopupStore();

  return (
    <>
      {SignInpopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <CloseIcon
            onClick={closepopup}
            className="absolute top-4 right-4"
          ></CloseIcon>
          <LoginForm />
        </div>
      )}
      {SignUppopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <CloseIcon
            onClick={closepopup}
            className="absolute top-4 right-4"
          ></CloseIcon>
          <Signupform />
        </div>
      )}
      {Priviewpopup && (
        <div className="fixed inset-0 flex items-center justify-center ml-20 z-50">
          <PrivewPopup />
        </div>
      )}
    </>
  );
}
