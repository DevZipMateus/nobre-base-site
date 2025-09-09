import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import AreiaLavada from "./pages/AreiaLavada";
import AreiaLavadaFina from "./pages/AreiaLavadaFina";
import AreiaParaAterro from "./pages/AreiaParaAterro";
import Brita0 from "./pages/Brita0";
import Brita1 from "./pages/Brita1";
import PoDePedra from "./pages/PoDePedra";
import Rachao from "./pages/Rachao";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/areia-lavada" element={<AreiaLavada />} />
          <Route path="/areia-lavada-fina" element={<AreiaLavadaFina />} />
          <Route path="/areia-para-aterro" element={<AreiaParaAterro />} />
          <Route path="/brita-0" element={<Brita0 />} />
          <Route path="/brita-1" element={<Brita1 />} />
          <Route path="/po-de-pedra" element={<PoDePedra />} />
          <Route path="/rachao" element={<Rachao />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
