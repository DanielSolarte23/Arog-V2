import React from "react";

export default function KeyMetrics() {
  return (
    <div className="bg-background rounded-lg border p-6 w-full max-w-4xl">
      {/* Contenedor principal */}
      <div className="flex flex-col gap-4">
        {/* Encabezado con título y un ícono */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Key Metrics</h2>
          <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
            {/* Ícono SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-muted-foreground"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
        </div>
        {/* Grilla de métricas */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Métrica 1 */}
          <div className="bg-card rounded-lg p-4 flex flex-col gap-2">
            <div className="bg-muted rounded-full w-10 h-10 flex items-center justify-center">
              {/* Ícono SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-muted-foreground"
              >
                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
              </svg>
            </div>
            <div className="text-sm font-medium">Total Revenue</div>
            <div className="text-2xl font-bold">$45,231.89</div>
          </div>
          {/* Métrica 2 */}
          <div className="bg-card rounded-lg p-4 flex flex-col gap-2">
            <div className="bg-muted rounded-full w-10 h-10 flex items-center justify-center">
              {/* Ícono SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="text-sm font-medium">Subscriptions</div>
            <div className="text-2xl font-bold">+2,350</div>
          </div>
          {/* Métrica 3 */}
          <div className="bg-card rounded-lg p-4 flex flex-col gap-2">
            <div className="bg-muted rounded-full w-10 h-10 flex items-center justify-center">
              {/* Ícono SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-muted-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" x2="22" y1="10" y2="10"></line>
              </svg>
            </div>
            <div className="text-sm font-medium">Sales</div>
            <div className="text-2xl font-bold">+12,234</div>
          </div>
          {/* Métrica 4 */}
          <div className="bg-card rounded-lg p-4 flex flex-col gap-2">
            <div className="bg-muted rounded-full w-10 h-10 flex items-center justify-center">
              {/* Ícono SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-muted-foreground"
              >
                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
              </svg>
            </div>
            <div className="text-sm font-medium">Active Now</div>
            <div className="text-2xl font-bold">+573</div>
          </div>
        </div>
      </div>
    </div>
  );
}


