import { Link } from "react-router-dom";
import SiteLayout from "@/components/site/SiteLayout";

const NotFound = () => (
  <SiteLayout>
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-playfair text-7xl text-[hsl(0_0%_96%)]">404</h1>
      <p className="mt-4 font-inter text-xl text-[hsl(0_0%_40%)]">Lost in the void.</p>
      <Link
        to="/home"
        className="mt-8 rounded-lg bg-[hsl(0_0%_96%)] px-6 py-3 font-inter text-sm font-medium text-[hsl(0_0%_3%)] transition-colors hover:bg-[hsl(330_85%_52%)] hover:text-white"
      >
        Return Home →
      </Link>
    </div>
  </SiteLayout>
);

export default NotFound;
