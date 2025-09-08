import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AreiaEnsacada from "./pages/AreiaEnsacada";
import AreiaLavada from "./pages/AreiaLavada";
import BicaCorrida from "./pages/BicaCorrida";
import Brita0 from "./pages/Brita0";
import Brita1 from "./pages/Brita1";
import BritaEnsacada from "./pages/BritaEnsacada";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/areia-ensacada" element={<AreiaEnsacada />} />
          <Route path="/areia-lavada" element={<AreiaLavada />} />
          <Route path="/bica-corrida" element={<BicaCorrida />} />
          <Route path="/brita-0" element={<Brita0 />} />
          <Route path="/brita-1" element={<Brita1 />} />
          <Route path="/brita-ensacada" element={<BritaEnsacada />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
