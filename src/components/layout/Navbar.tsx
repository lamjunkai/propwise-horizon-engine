
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white border-b border-gold-100 sticky top-0 z-10 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gold-500 text-white p-2 rounded">
            <span className="font-bold text-lg">PW</span>
          </div>
          <h1 className="text-xl font-semibold text-gold-800">
            PropWise <span className="text-gold-600">Horizon Engine</span>
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-gold-600 transition-colors">
            Dashboard
          </Link>
          <Link to="/properties" className="text-sm font-medium text-muted-foreground hover:text-gold-600 transition-colors">
            Properties
          </Link>
          <Link to="/analytics" className="text-sm font-medium text-muted-foreground hover:text-gold-600 transition-colors">
            Analytics
          </Link>
          <Link to="/notifications" className="text-sm font-medium text-muted-foreground hover:text-gold-600 transition-colors">
            Notifications
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="border-gold-200 hover:bg-gold-50 hover:text-gold-700">
            Login
          </Button>
          <Button size="sm" className="bg-gold-500 hover:bg-gold-600 text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
