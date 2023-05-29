import { getEvolucaoObjetivos } from "@/services/evolucao";

export const evolucaoObjetivos = async () => {
  return await getEvolucaoObjetivos();
};

const dados = await evolucaoObjetivos();

export const pieData = {
  labels: Object.keys(dados.quantidade),
  datasets: [
    {
      backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
      data: Object.values(dados.quantidade),
    },
  ],
};

export const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
