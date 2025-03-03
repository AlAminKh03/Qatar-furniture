import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-muted-foreground mb-8">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
