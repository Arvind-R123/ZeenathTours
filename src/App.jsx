// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import Gallery from "./components/pages/gallery";
import ContactPage from "./components/pages/ContactPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#573BFE",
    },
    secondary: {
      main: "#01C0F6",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
});

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />

          {/* WhatsApp Floating Icon (right) */}
          <a
            href={`https://wa.me/919443495741?text=${encodeURIComponent(
              "Hello, Zeenath Tours! I'd like to book a ride."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp: Hello Zeenath Tours"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M13.601 2.326A7.94 7.94 0 0 0 8.013.001a7.96 7.96 0 0 0-6.86 11.951L.01 15.99l4.13-1.078A7.96 7.96 0 0 0 8.01 16c4.418 0 8.004-3.582 8-8.005a7.94 7.94 0 0 0-2.409-5.669zm-5.59 12.675a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.478.646.662-2.415-.157-.248a6.6 6.6 0 1 1 6.07 3.08zm3.633-4.981c-.197-.099-1.166-.574-1.347-.639-.181-.066-.313-.099-.444.099-.132.197-.508.638-.623.77-.115.132-.23.148-.426.05-.197-.099-.832-.307-1.584-.98-.586-.52-.981-1.162-1.097-1.358-.115-.198-.012-.304.087-.403.089-.088.197-.23.296-.345.099-.115.132-.198.197-.33.066-.132.033-.247-.016-.346-.05-.099-.444-1.071-.608-1.466-.16-.385-.323-.332-.444-.338l-.38-.007c-.132 0-.346.05-.528.247-.181.198-.694.677-.694 1.653 0 .975.71 1.915.81 2.049.099.132 1.394 2.132 3.383 2.988.473.204.84.326 1.127.418.473.151.904.129 1.246.078.38-.057 1.166-.477 1.33-.939.164-.462.164-.858.115-.939-.049-.082-.18-.132-.377-.231z" />
            </svg>
          </a>

          {/* Phone Floating Button (left) */}
          <a
            href="tel:+919443495741"
            className="phone-float"
            aria-label="Call 9443495741"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.19-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.01c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
          </a>

          <style>{`
            /* WhatsApp (right) */
            .whatsapp-float {
              position: fixed;
              right: 20px;
              bottom: 20px;
              z-index: 9999;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 48px;
              height: 48px;
              background: #25d366;
              color: #fff;
              text-decoration: none;
              border-radius: 50%;
              box-shadow: 0 2px 8px rgba(0,0,0,0.2);
              transition: box-shadow 0.2s, transform 0.1s;
            }
            .whatsapp-float:hover {
              box-shadow: 0 4px 16px rgba(0,0,0,0.3);
              transform: translateY(-1px);
            }

            /* Phone (left) */
            .phone-float {
              position: fixed;
              left: 20px;
              bottom: 20px;
              z-index: 9999;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 48px;
              height: 48px;
              background: #573BFE;
              color: #fff;
              text-decoration: none;
              border-radius: 50%;
              box-shadow: 0 2px 8px rgba(0,0,0,0.2);
              transition: box-shadow 0.2s, transform 0.1s;
            }
            .phone-float:hover {
              box-shadow: 0 4px 16px rgba(0,0,0,0.3);
              transform: translateY(-1px);
            }

            /* Icon sizing */
            .whatsapp-float svg,
            .phone-float svg {
              width: 24px;
              height: 24px;
              fill: currentColor;
              display: block;
            }
          `}</style>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
