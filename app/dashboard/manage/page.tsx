"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PropertiesManager } from "./_components/properties-manager";
import { MenuItemsManager } from "./_components/menu-items-manager";

export default function ManagePage() {
  const [activeTab, setActiveTab] = useState("properties");

  return (
    <div className="container mx-auto py-6">
      <h1 className="mb-6 text-3xl font-bold">Manage Business Assets</h1>

      <Tabs
        defaultValue="properties"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="properties">Properties</TabsTrigger>
          <TabsTrigger value="menu-items">Menu Items</TabsTrigger>
        </TabsList>

        <TabsContent value="properties" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Manage Properties</CardTitle>
              <CardDescription>
                Add, edit, or remove properties available for rent or use in
                your business.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PropertiesManager />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="menu-items" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Manage Menu Items</CardTitle>
              <CardDescription>
                Add, edit, or remove items from your food and drink menu.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MenuItemsManager />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
