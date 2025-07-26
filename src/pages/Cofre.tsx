import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/ui/metric-card";
import { AnalyticsChart } from "@/components/ui/analytics-chart";

const mockData = [
  { name: "Jan", value: 120 },
  { name: "Fev", value: 135 },
  { name: "Mar", value: 142 },
  { name: "Abr", value: 158 },
  { name: "Mai", value: 165 },
  { name: "Jun", value: 178 },
  { name: "Jul", value: 185 }
];

export default function Cofre() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold font-urbanist text-slate-800">Cofre</h1>
      
      {/* Métricas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Saldo Total</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold text-slate-800">R$ 45.2K</div>
            <div className="text-sm text-emerald-600 flex items-center gap-1">
              ↗ +12%
            </div>
            <div className="text-xs text-slate-500 mt-1">Crescimento mensal</div>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Rendimento</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold text-slate-800">%8.45</div>
            <div className="text-sm text-emerald-600 flex items-center gap-1">
              ↗ 2.1%
            </div>
            <div className="text-xs text-slate-500 mt-1">Taxa anual</div>
          </CardContent>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-purple-100 to-purple-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-white">Proteção</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold text-white">99.9%</div>
            <div className="text-sm text-emerald-600 flex items-center gap-1">
              ↗ Seguro
            </div>
          </CardContent>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-indigo-100 to-indigo-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Liquidez</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold text-slate-800">24h</div>
            <div className="text-sm text-slate-600">Acesso imediato</div>
          </CardContent>
        </Card>
      </div>

      {/* Análises detalhadas */}
      <div>
        <h2 className="text-2xl font-bold font-urbanist text-slate-800 mb-4">Visão Geral do Cofre</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AnalyticsChart
            title="Crescimento do Saldo"
            data={mockData}
            currentValue="45.2"
            unit="K"
            trend={"up"}
            variant="area"
            color="emerald"
          />
          
          <AnalyticsChart
            title="Taxa de Rendimento"
            data={mockData.map(d => ({ ...d, value: d.value * 0.1 }))}
            currentValue="8.45"
            unit="%"
            trend={"up"}
            variant="area"
            color="blue"
          />
          
          <AnalyticsChart
            title="Histórico de Segurança"
            data={mockData.map(d => ({ ...d, value: 99.9 }))}
            currentValue="99.9"
            unit="%"
            trend={"up"}
            variant="area"
            color="purple"
          />
        </div>
      </div>
    </div>
  );
}