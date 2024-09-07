  
  
  export default function Estadisticas(){
  return (
    <div className="grid gap-6 p-4 md:p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-4 rounded">
          <div className="border-b pb-2 mb-2">
            <h2 className="text-lg font-bold">Volumen de Residuos Recolectados</h2>
            <p className="text-sm text-gray-600">Cantidad total de residuos orgánicos recolectados en el último mes.</p>
          </div>
          <div>
            <BarChart className="aspect-[4/3]" colors={{ background: 'bg-[#2e7d32]', foreground: 'text-[#2e7d32]' }} />
          </div>
        </div>
        <div className="border p-4 rounded">
          <div className="border-b pb-2 mb-2">
            <h2 className="text-lg font-bold">Frecuencia de Recolección</h2>
            <p className="text-sm text-gray-600">Número de recolecciones realizadas en diferentes áreas.</p>
          </div>
          <div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Área</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recolecciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Centro</td>
                  <td className="px-6 py-4 whitespace-nowrap">15</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Norte</td>
                  <td className="px-6 py-4 whitespace-nowrap">12</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Sur</td>
                  <td className="px-6 py-4 whitespace-nowrap">10</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Este</td>
                  <td className="px-6 py-4 whitespace-nowrap">8</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Oeste</td>
                  <td className="px-6 py-4 whitespace-nowrap">6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-4 rounded">
          <div className="border-b pb-2 mb-2">
            <h2 className="text-lg font-bold">Tipos de Residuos</h2>
            <p className="text-sm text-gray-600">Clasificación y cantidad de los diferentes tipos de residuos recolectados.</p>
          </div>
          <div>
            <BarChart className="aspect-[4/3]" colors={{ background: 'bg-[#004d40]', foreground: 'text-[#004d40]' }} />
          </div>
        </div>
        <div className="border p-4 rounded">
          <div className="border-b pb-2 mb-2">
            <h2 className="text-lg font-bold">Puntos de Recolección</h2>
            <p className="text-sm text-gray-600">Ubicaciones y número de puntos de recolección activos.</p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center">
              <LocateIcon className="h-5 w-5 mr-2" />
              <div>Centro - 15 puntos</div>
            </div>
            <div className="flex items-center">
              <LocateIcon className="h-5 w-5 mr-2" />
              <div>Norte - 12 puntos</div>
            </div>
            <div className="flex items-center">
              <LocateIcon className="h-5 w-5 mr-2" />
              <div>Sur - 10 puntos</div>
            </div>
            <div className="flex items-center">
              <LocateIcon className="h-5 w-5 mr-2" />
              <div>Este - 8 puntos</div>
            </div>
            <div className="flex items-center">
              <LocateIcon className="h-5 w-5 mr-2" />
              <div>Oeste - 6 puntos</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border p-4 rounded">
        <div className="border-b pb-2 mb-2">
          <h2 className="text-lg font-bold">Cumplimiento de Horarios</h2>
          <p className="text-sm text-gray-600">Tasa de cumplimiento de los horarios de recolección establecidos.</p>
        </div>
        <div>
          <div className="relative pt-1 bg-[#2e7d32]">
            <div className="flex mb-2 items-center justify-between">
              <div className="text-right">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#2e7d32]">85% de cumplimiento</span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
              <div style={{ width: '85%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center text-[#2e7d32]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border p-4 rounded">
        <div className="border-b pb-2 mb-2">
          <h2 className="text-lg font-bold">Tareas Realizadas</h2>
          <p className="text-sm text-gray-600">Cantidad total de tareas de recolección realizadas.</p>
        </div>
        <div className="text-4xl font-bold text-[#2e7d32]">1,234</div>
      </div>
    </div>
  );
}

/* function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: 'Jan', count: 111 },
          { name: 'Feb', count: 157 },
          { name: 'Mar', count: 129 },
          { name: 'Apr', count: 150 },
          { name: 'May', count: 119 },
          { name: 'Jun', count: 72 },
        ]}
        keys={['count']}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={['#4caf50']} // Verde
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: '9999px',
            },
            container: {
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '6px',
            },
          },
          grid: {
            line: {
              stroke: '#f3f4f6',
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
} */

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

