import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import { ConfigProvider } from "antd";

type RouteConfig = {
  path: string;
  Component?: React.ComponentType<any>;
  children?: RouteConfig[];
};
function renderRoutes(routes: RouteConfig[]) {
  return routes.map(({ path, Component, children }) => {
    const RouteComponent = Component ?? React.Fragment;
    return (
      <Route key={path} path={path} Component={RouteComponent}>
        {children && renderRoutes(children)}
      </Route>
    );
  });
}


export default function App() {
return (
  
    <ConfigProvider
      theme={{
        token: {
          // 🔵 SYSTEM BASE (Navy)
          colorPrimary: "#0F172A",

          // 🟡 Accent
          colorWarning: "#D4A017",

          // 🟢 Semantic success (keep different from teal)
          colorSuccess: "#16A34A",

          // Backgrounds
          colorBgBase: "#ffffff",
          colorBgLayout: "#F8FAFC",
          colorBgContainer: "#ffffff",

          // Text
          colorText: "#0F172A",
          colorTextSecondary: "#475569",

          // Borders
          colorBorder: "#E2E8F0",

          // Radius
          borderRadius: 8,
        },

        components: {
          // 🔵 Layout (Navy branding)
          Layout: {
            headerBg: "#0F172A",
            siderBg: "#0F172A",
          },

          // 🟢 Buttons (Teal = CTA)
          Button: {
            colorPrimary: "#0F766E",
            colorPrimaryHover: "#0a5952",
            colorPrimaryActive: "#084f4a",
            defaultColor: "#0F766E",
            defaultBorderColor: "#0F766E",
          },

          // 🟢 Menu selection (Teal highlight on Navy)
          Menu: {
            darkItemBg: "#0F172A",
            darkItemSelectedBg: "#0F766E",
            darkItemHoverBg: "#1E293B",
            darkItemColor: "#CBD5E1",
            darkItemSelectedColor: "#ffffff",
          },

          // 🟢 Inputs (focus = teal)
          Input: {
            activeBorderColor: "#0F766E",
            activeShadow: "0 0 0 2px rgba(15,118,110,0.15)",
          },

          // 🟡 Tags / highlights (Gold)
          Tag: {
            defaultBg: "#FEF3C7",
            defaultColor: "#92400E",
          },

          // 🟡 Alerts
          Alert: {
            colorWarning: "#D4A017",
          },

          // Tables
          Table: {
            headerBg: "#0F172A",
            headerColor: "#F8FAFC",
            rowHoverBg: "#F0FDFA",
          },
        },
      }}
    >
      <BrowserRouter>
        <Routes>{renderRoutes(routes)}</Routes>
      </BrowserRouter>
    </ConfigProvider>

 );
}
