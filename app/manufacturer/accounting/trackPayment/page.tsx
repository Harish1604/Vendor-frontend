'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function TrackPayment() {
  const router = useRouter();

  return (
    <div className="container mx-auto p-6 space-y-6">
      <Button 
        variant="outline" 
        onClick={() => router.push('/manufacturer/accounting')}
        className="mb-6"
      >
        <FileText className="mr-2 h-4 w-4" />
        Back
      </Button>

      <Card className="bg-[#1E293B] border-0">
        <CardHeader>
          <CardTitle className="text-xl text-blue-400">Track Payment</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center min-h-[150px]">
          {/* Add payment tracking interface */}
          <span className="text-lg text-gray-300">Under Development</span>
        </CardContent>
      </Card>
    </div>
  );
}
