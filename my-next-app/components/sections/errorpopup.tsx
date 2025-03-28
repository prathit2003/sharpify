"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import usePopupStore from "@/app/store/popupsatom";

const ErrorPopup = () => {
  const { error, reseterror } = usePopupStore();

  if (!error) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <Card className="relative w-96 shadow-lg bg-white">

        <button onClick={reseterror} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
          <X className="w-5 h-5" />
        </button>

        <CardHeader>
          <CardTitle className="text-red-600">Error</CardTitle>
        </CardHeader>

        <CardContent className="text-center">
          <p className="text-gray-700 mb-4">{error}</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" onClick={reseterror}>
              Retry
            </Button>
            <Button onClick={() => {
              reseterror();
              window.location.reload();
            }}>
              Refresh
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ErrorPopup;
