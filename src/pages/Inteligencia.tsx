import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/ui/metric-card";
import { AnalyticsChart } from "@/components/ui/analytics-chart";

const mockData = [
  { name: "Jan", value: 85 },
  { name: "Fev", value: 78 },
  { name: "Mar", value: 92 },
  { name: "Abr", value: 88 },
  { name: "Mai", value: 95 },
  { name: "Jun", value: 90 },
  { name: "Jul", value: 98 }
];

export default function Inteligencia() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold font-urbanist text-slate-800">Inteligência</h1>
      
      {/* Métricas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Seu Rank</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold text-slate-800">26</div>
            <div className="text-sm text-emerald-600 flex items-center gap-1">
              ↗ +6
            </div>
            <div className="text-xs text-slate-500 mt-1">Classificação por Atividade</div>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Taxa de Análise</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold text-slate-800">%6.91</div>
            <div className="text-sm text-emerald-600 flex items-center gap-1">
              ↗ 3.64%
            </div>
            <div className="text-xs text-slate-500 mt-1">Atualizado 12/24 às 9:00 AM</div>
          </CardContent>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-orange-100 to-orange-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-white">Taxa Flutuante</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold text-white">%3.64</div>
            <div className="text-sm text-emerald-600 flex items-center gap-1">
              ↗ 175%
            </div>
          </CardContent>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-yellow-100 to-yellow-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Empréstimo Expandido</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold text-slate-800">%1.75</div>
            <div className="text-sm text-slate-600">Meta atingida</div>
          </CardContent>
        </Card>
      </div>

      {/* Análises detalhadas */}
      <div>
        <h2 className="text-2xl font-bold font-urbanist text-slate-800 mb-4">Visão Geral da Análise</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AnalyticsChart
            title="Taxa Estável"
            data={mockData}
            currentValue="6.91"
            unit="%"
            trend={"up"}
            variant="area"
            color="orange"
          />
          
          <AnalyticsChart
            title="Taxa Flutuante"
            data={mockData}
            currentValue="3.64"
            unit="%"
            trend={"up"}
            variant="area"
            color="emerald"
          />
          
          <AnalyticsChart
            title="Empréstimo Expandido"
            data={mockData}
            currentValue="1.75"
            unit="%"
            trend={"down"}
            variant="area"
            color="yellow"
          />
        </div>
      </div>
    </div>
  );
}