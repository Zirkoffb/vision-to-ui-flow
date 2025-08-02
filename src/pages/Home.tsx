import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3, Settings } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">L</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-800 font-urbanist">Elementos UI</h1>
          <p className="text-slate-600 mt-2">Escolha uma opção para continuar</p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => navigate("/dashboard")}
            className="w-full h-14 text-lg"
            variant="warm"
          >
            <BarChart3 className="mr-3 h-6 w-6" />
            Dash
          </Button>

          <Button
            onClick={() => navigate("/conf")}
            className="w-full h-14 text-lg"
            variant="glow"
          >
            <Settings className="mr-3 h-6 w-6" />
            Conf
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;