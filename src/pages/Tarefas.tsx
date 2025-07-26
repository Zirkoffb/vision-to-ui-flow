import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/ui/metric-card";
import { AnalyticsChart } from "@/components/ui/analytics-chart";

const mockData = [
  { name: "Jan", value: 24 },
  { name: "Fev", value: 28 },
  { name: "Mar", value: 32 },
  { name: "Abr", value: 35 },
  { name: "Mai", value: 38 },
  { name: "Jun", value: 42 },
  { name: "Jul", value: 45 }
];

export default function Tarefas() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold font-urbanist text-slate-800">Tarefas</h1>
      
      {/* Métricas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Tarefas Concluídas</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold text-slate-800">147</div>
            <div className="text-sm text-emerald-600 flex items-center gap-1">
              ↗ +23
            </div>
            <div className="text-xs text-slate-500 mt-1">Este mês</div>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Produtividade</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold text-slate-800">%94.2</div>
            <div className="text-sm text-emerald-600 flex items-center gap-1">
              ↗ 5.8%
            </div>
            <div className="text-xs text-slate-500 mt-1">Taxa de conclusão</div>
          </CardContent>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-green-100 to-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-white">Eficiência</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold text-white">%87.5</div>
            <div className="text-sm text-emerald-600 flex items-center gap-1">
              ↗ 125%
            </div>
          </CardContent>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-cyan-100 to-cyan-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Tempo Médio</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold text-slate-800">2.5h</div>
            <div className="text-sm text-slate-600">Por tarefa</div>
          </CardContent>
        </Card>
      </div>

      {/* Análises detalhadas */}
      <div>
        <h2 className="text-2xl font-bold font-urbanist text-slate-800 mb-4">Visão Geral das Tarefas</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AnalyticsChart
            title="Tarefas Concluídas"
            data={mockData}
            currentValue="147"
            unit=""
            trend={"up"}
            variant="area"
            color="blue"
          />
          
          <AnalyticsChart
            title="Taxa de Produtividade"
            data={mockData.map(d => ({ ...d, value: d.value * 2 }))}
            currentValue="94.2"
            unit="%"
            trend={"up"}
            variant="area"
            color="emerald"
          />
          
          <AnalyticsChart
            title="Eficiência Geral"
            data={mockData.map(d => ({ ...d, value: d.value * 1.8 }))}
            currentValue="87.5"
            unit="%"
            trend={"up"}
            variant="area"
            color="cyan"
          />
        </div>
      </div>
    </div>
  );
}