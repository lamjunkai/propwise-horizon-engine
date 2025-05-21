
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white border-b border-gold-100 sticky top-0 z-10 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
          <div className="bg-gold-500 text-white p-2 rounded">
            <span className="font-bold text-lg">PW</span>
          </div>
          <h1 className="text-xl font-semibold text-gold-800">
            PropWise <span className="text-gold-600">Horizon Engine</span>
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {[
            { path: "/", label: "Dashboard" },
            { path: "/properties", label: "Properties" },
            { path: "/analytics", label: "Analytics" },
            { path: "/notifications", label: "Notifications" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-sm font-medium text-muted-foreground hover:text-gold-600 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-gold-200 hover:bg-gold-50 hover:text-gold-700 transition-transform duration-300 hover:scale-105"
          >
            Login
          </Button>
          <Button 
            size="sm" 
            className="bg-gold-500 hover:bg-gold-600 text-white transition-transform duration-300 hover:scale-105"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
