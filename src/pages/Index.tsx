
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Dashboard from "@/components/dashboard/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Dashboard />
      </main>
      <footer className="py-4 border-t bg-white">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 PropWise Horizon Engine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
