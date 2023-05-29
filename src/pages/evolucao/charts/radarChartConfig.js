import { getEvolucaoObjetivos } from "@/services/evolucao";

export const evolucaoObjetivos = async () => {
  return await getEvolucaoObjetivos();
};

const dados = await evolucaoObjetivos();

export const radarData = {
  labels: Object.keys(dados.categorias),
  // labels: ["Alimentação", "Sono", "Código", "Ciclismo", "Corrida"],

  datasets: [
    {
      label: "Objetivos por categoria",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255,99,132,1)",
      data: Object.values(dados.categorias),
      // data: [28, 48, 96, 27, 100],
    },
  ],
};

export const radarOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
