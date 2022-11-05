import { AusturlandData } from '../../data/austurlanddata.js';
import LineChart from '../LineChart.jsx';
import LineChart80 from '../LineScreen80.jsx';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = AusturlandData.map((data) => data.aldur);
//const x = 12;
//const b = CaptureData.map((data) => (data.aPercemtagetGrowth * x) / 100);

export const data = {
  labels,
  datasets: [
    {
      label: 'Alaskaösp',
      data: AusturlandData.map((data) => data.alaskaosp),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgba(242,47,4,0.4)',
      backgroundColor: 'rgba(242,47,4,0.4)',
      pointRadius: 1,
    },
    {
      label: 'Sitkagreni',
      data: AusturlandData.map((data) => data.sitkagreni),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgba(7,49,152,0.4)',
      backgroundColor: 'rgba(7,49,152,0.4)',
      pointRadius: 1,
    },
    {
      label: 'Stafafura',
      data: AusturlandData.map((data) => data.stafafura),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgba(46,146,3,0.4)',
      backgroundColor: 'rgba(46,146,3,0.4)',
      pointRadius: 1,
    },
    {
      label: 'Rússalerki',
      data: AusturlandData.map((data) => data.russalerki),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgba(242,148,5,0.4)',
      backgroundColor: 'rgba(242,148,5,0.4)',
      pointRadius: 1,
    },
    {
      label: 'Ilmbjörk',
      data: AusturlandData.map((data) => data.ilmbjork),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgba(150,3,96,0.4)',
      backgroundColor: 'rgba(150,3,96,0.4)',
      pointRadius: 1,
    },
    {
      label: 'Meðaltal',
      data: AusturlandData.map((data) => data.medaltal),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgb(3,3,95)',
      backgroundColor: 'rgba(3,3,95,0.4)',
      pointRadius: 1,
    },
  ],
};

export default function AusturlandBasicChart() {
  return (
    <>
      <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col w-full'>
        <h1 className='text-xl sm:text-2x mb-2l'>
          Áætluð árleg binding (tonn/ha) í 50 ár
        </h1>
        <p className='text-sm sm:text-base'>
          Svæði: Austurland, Fljótsdalshérað, Hérað
        </p>
        <p className='mb-2 text-sm sm:text-base'>
          (Vel gróið, áborið, hæð 0-150m)
        </p>
        <div className='inline lg:hidden'>
          <LineChart80 options={options} data={data} />
        </div>
        <div className='hidden lg:inline'>
          <LineChart options={options} data={data} />
        </div>
      </div>
    </>
  );
}
