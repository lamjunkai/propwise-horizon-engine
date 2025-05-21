
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MetricsOverview from "./MetricsOverview";
import PropertyList from "../properties/PropertyList";
import PropertyMap from "../map/PropertyMap";
import { mockDashboardMetrics, mockProperties } from "@/data/mockData";
import PropertyDetail from "../properties/PropertyDetail";
import { Property } from "@/types/property";

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
        <h1 className="text-2xl font-bold text-propwise-800">
          Property Development Analysis Dashboard
        </h1>
      </div>

      {!selectedProperty ? (
        <>
          <MetricsOverview metrics={mockDashboardMetrics} />

          <div className="mt-8">
            <Tabs defaultValue="map" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="map">Map View</TabsTrigger>
                <TabsTrigger value="list">List View</TabsTrigger>
              </TabsList>

              <TabsContent value="map" className="space-y-6">
                <PropertyMap properties={mockProperties} onSelectProperty={handleSelectProperty} />
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-4">Top Development Opportunities</h2>
                  <PropertyList
                    properties={mockProperties.filter(p => p.developmentScore >= 70).slice(0, 3)}
                    onSelectProperty={handleSelectProperty}
                  />
                </div>
              </TabsContent>

              <TabsContent value="list" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">All Properties</h2>
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
