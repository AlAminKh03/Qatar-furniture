"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function LanguageSwitcher() {
  const router = useRouter();

  const toggleLanguage = (locale: string) => {
    const path = window.location.pathname;
    const newPath = locale === "ar" ? `/ar${path}` : path.replace("/ar", "");
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      <Button variant="ghost" size="sm" onClick={() => toggleLanguage("en")}>
        English
      </Button>
      <Button variant="ghost" size="sm" onClick={() => toggleLanguage("ar")}>
        العربية
      </Button>
    </div>
  );
}
