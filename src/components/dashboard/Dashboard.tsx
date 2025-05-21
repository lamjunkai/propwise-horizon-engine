
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MetricsOverview from "./MetricsOverview";
import PropertyList from "../properties/PropertyList";
import PropertyMap from "../map/PropertyMap";
import { mockDashboardMetrics, mockProperties } from "@/data/mockData";
import PropertyDetail from "../properties/PropertyDetail";
import { Property } from "@/types/property";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handleSelectProperty = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleCloseDetail = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gold-800">
          Property Development Analysis Dashboard
        </h1>
        <div className="flex gap-2">
          <Link to="/properties">
            <Button variant="outline" className="border-gold-200 hover:bg-gold-50 hover:text-gold-700">
              View All Properties
            </Button>
          </Link>
          <Button className="bg-gold-500 hover:bg-gold-600 text-white">
            Add Property
          </Button>
        </div>
      </div>

      {!selectedProperty ? (
        <>
          <MetricsOverview metrics={mockDashboardMetrics} />

          <div className="mt-8">
            <Tabs defaultValue="map" className="w-full">
              <TabsList className="mb-4 bg-gold-50">
                <TabsTrigger value="map" className="data-[state=active]:bg-white data-[state=active]:text-gold-700">Map View</TabsTrigger>
                <TabsTrigger value="list" className="data-[state=active]:bg-white data-[state=active]:text-gold-700">List View</TabsTrigger>
              </TabsList>

              <TabsContent value="map" className="space-y-6">
                <PropertyMap properties={mockProperties} onSelectProperty={handleSelectProperty} />
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gold-800">Top Development Opportunities</h2>
                    <Link to="/properties" className="text-gold-600 hover:text-gold-700 text-sm font-medium">
                      View all properties →
                    </Link>
                  </div>
                  <PropertyList
                    properties={mockProperties.filter(p => p.developmentScore >= 70).slice(0, 3)}
                    onSelectProperty={handleSelectProperty}
                  />
                </div>
              </TabsContent>

              <TabsContent value="list" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gold-800">All Properties</h2>
                  <Link to="/properties" className="text-gold-600 hover:text-gold-700 text-sm font-medium">
                    Advanced filters →
                  </Link>
                </div>
                <PropertyList properties={mockProperties} onSelectProperty={handleSelectProperty} />
              </TabsContent>
            </Tabs>
          </div>
        </>
      ) : (
        <PropertyDetail property={selectedProperty} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

export default Dashboard;
