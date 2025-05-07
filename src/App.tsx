
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Precos from "./pages/Precos";
import Recursos from "./pages/Recursos";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import RoleDashboardPage from "./pages/RoleDashboardPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/precos" element={<Precos />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:role" element={<RoleDashboardPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
