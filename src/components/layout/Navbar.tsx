import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RotateCw } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="dark:bg-sidebar border-b dark:border-sidebar-border sticky top-0 z-10 shadow-md backdrop-blur-sm dark:bg-opacity-90 transition-all duration-300">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105 group">
          <div className="bg-gold-500 text-white p-2 rounded shadow-lg group-hover:rotate-6 transition-all duration-500">
            <span className="font-bold text-lg flex items-center">
              PW 
              <RotateCw className="ml-1 w-4 h-4 animate-spin-slow" />
            </span>
          </div>
          <h1 className="text-xl font-semibold dark:text-gold-300">
            PropWise <span className="dark:text-gold-400 animate-pulse-subtle">Horizon Engine</span>
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
              className="text-sm font-medium dark:text-sidebar-foreground dark:hover:text-gold-400 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 mr-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="dark:border-gold-700 dark:text-gold-300 dark:hover:text-gold-200 transition-all duration-300 hover:scale-105 hover:rotate-1"
          >
            Login
          </Button>
          <Button 
            size="sm" 
            className="dark:bg-gold-600 dark:hover:bg-gold-500 text-white transition-all duration-300 hover:scale-105 hover:rotate-1 dark:hover:shadow-gold-500/30 button-shine"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
