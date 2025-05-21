
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-propwise-800 text-white p-2 rounded">
            <span className="font-bold text-lg">PW</span>
          </div>
          <h1 className="text-xl font-semibold text-propwise-800">
            PropWise <span className="text-propwise-700">Horizon Engine</span>
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Dashboard
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Properties
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Analytics
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Notifications
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
