import { getEvolucaoAmizades } from "@/services/evolucao";

export const evolucaoAmizades = async () => {
  return await getEvolucaoAmizades();
};

const dados = await evolucaoAmizades();

export const barChartAmizadesData = {
  labels: Object.keys(dados.quantidade_mes),

  datasets: [
    {
      label: "Quantidade",
      backgroundColor: "blue",
      data: Object.values(dados.quantidade_mes),
    },
  ],
};

export const barChartAmizadesOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
