import InstallBanner from "./pwa/InstallBanner"
import "./App.css"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import TabBar from "./components/TabBar"
import Dashboard from "./pages/Dashboard"
import Scheduling from "./pages/Scheduling"
import Patients from "./pages/Patients"
import PatientDetail from "./pages/PatientDetail"
import Finance from "./pages/Finance"
import Flags from "./pages/Flags"
import { isEnabled } from "./lib/flags"

function Disabled() {
  return <div className="text-xs text-white/60">
      <InstallBanner />
Ã˜Â§Ã›Å’Ã™â€  Ã™â€¦Ã˜Â§ÃšËœÃ™Ë†Ã™â€ž Ã™ÂÃ˜Â¹Ã™â€žÃ˜Â§Ã™â€¹ Ã˜ÂºÃ›Å’Ã˜Â±Ã™ÂÃ˜Â¹Ã˜Â§Ã™â€ž Ã˜Â§Ã˜Â³Ã˜Âª.</div>
}

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      
      <InstallBanner />
<header className="sticky top-0 z-10 border-b border-white/10 bg-white/5 backdrop-blur-2xl">
        <div className="max-w-md mx-auto px-4 py-4">
          
      <InstallBanner />
<div className="text-lg font-bold text-emerald-300">
      <InstallBanner />
Dental-Mina</div>
          <div className="text-xs text-white/70 mt-1">
      <InstallBanner />
G32 Feature Flags Foundation</div>
        </div>
      </header>

      <BrowserRouter>
        <main className="max-w-md mx-auto px-4 py-5 space-y-4 pb-28">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/scheduling" element={isEnabled("mod.scheduling") ? <Scheduling /> : <Disabled />} />
            <Route path="/patients" element={isEnabled("mod.patients") ? <Patients /> : <Disabled />} />
            <Route path="/patients/:id" element={isEnabled("mod.patients") ? <PatientDetail /> : <Disabled />} />
            <Route path="/finance" element={isEnabled("mod.finance") ? <Finance /> : <Disabled />} />

            <Route path="/flags" element={<Flags />} />
            <Route path="*" element={<div className="text-sm text-white/70">
      <InstallBanner />
Not Found</div>} />
          </Routes>
        </main>
        <TabBar />
      </BrowserRouter>
    </div>
  )
}