"use client";
import Agent from "@/components/agents/Agent";
import CityHeader from "@/components/city/CityHeader";
import { useParams } from "next/navigation";

export default function page() {
  const { agentName } = useParams();

  return (
    <div>
      <CityHeader />
      <Agent />
    </div>
  );
}
