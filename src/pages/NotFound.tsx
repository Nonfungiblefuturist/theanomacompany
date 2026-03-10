import { Link } from "react-router-dom";
import NebulaEffects from "@/components/shared/NebulaEffects";
import Navbar from "@/components/layout/Navbar";

const NotFound = () => (
  <div className="min-h-screen bg-background text-foreground flex flex-col">
    <NebulaEffects />
    <Navbar />
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-foreground/10">404</h1>
        <p className="mt-4 text-muted-foreground">This page doesn't exist.</p>
        <Link to="/" className="inline-block mt-6 text-sm text-primary hover:text-foreground transition-colors">
          Back to Home →
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
