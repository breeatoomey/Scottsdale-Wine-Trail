import { Router, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

import Home from "@/pages/home";
import About from "@/pages/about";
import Wineries from "@/pages/wineries";
import WineTrailMap from "@/pages/wine-trail-map";
import WineTrailPassport from "@/pages/wine-trail-passport";
import Events from "@/pages/events";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/wineries" component={Wineries} />
      <Route path="/wine-trail-map" component={WineTrailMap} />
      <Route path="/wine-trail-passport" component={WineTrailPassport} />
      <Route path="/events" component={Events} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* 👇 Base path makes routes work under /Scottsdale-Wine-Trail/ */}
        <Router base={import.meta.env.BASE_URL}>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Routes />
            </main>
            <Footer />
          </div>
          <Toaster />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

