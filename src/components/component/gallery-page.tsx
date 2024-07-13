"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { initLightboxJS } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { Divide } from "lucide-react";
import LightboxGallery from "@/components/component/LightboxGallery";
export default function LightBox() {
  return (
    <div>
      <div className="py-12">
        <LightboxGallery />
      </div>
    </div>
  );
}
