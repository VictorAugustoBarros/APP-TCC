import { getEvolucaoObjetivos } from "@/services/evolucao";

export const evolucaoObjetivos = async () => {
  return await getEvolucaoObjetivos();
};

const dados = await evolucaoObjetivos();

export const barChartFeedbacksData = {
  labels: Object.keys(dados.quantidade_mes),

  datasets: [
    {
      label: "Quantidade",
      backgroundColor: "blue",
      data: Object.values(dados.quantidade_mes),
    },
  ],
};

export const barChartFeedbacksOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
