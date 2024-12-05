<template>
  <div class="chart-container">
    <!-- Div para os dois gráficos lado a lado -->
    <div class="charts-row">
      <!-- Gráfico de Pizza -->
      <div class="chart">
        <h2>Quantidade de Logins - Pizza</h2>
        <PieChart :data="pieChartData" :options="chartOptions" />
      </div>
      <!-- Gráfico de Linha -->
      <div class="chart">
        <h2>Quantidade de Logins - Linha</h2>
        <LineChart :data="lineChartData" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<script>
// Importando o necessário do vue-chartjs e Chart.js
import { defineComponent } from 'vue';
import { Pie, Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, LineElement, CategoryScale, LinearScale } from 'chart.js';

// Registrando os componentes necessários do Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, LineElement, CategoryScale, LinearScale);

export default defineComponent({
  name: 'DashboardChart',
  components: {
    PieChart: Pie,
    LineChart: Line,
  },
  data() {
    return {
      // Dados do gráfico de Pizza
      pieChartData: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], // Rótulos do gráfico
        datasets: [
          {
            label: 'Logins por Mês',
            data: [120, 150, 180, 220, 300], // Dados para o gráfico de pizza
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ], // Cores para cada fatia da pizza
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ], // Cores das bordas
            borderWidth: 1, // Largura da borda
          },
        ],
      },

      // Dados do gráfico de Linha
      lineChartData: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], // Rótulos do eixo X
        datasets: [
          {
            label: 'Logins por Mês',
            data: [120, 150, 180, 220, 300], // Dados do gráfico
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true, // Preencher a área abaixo da linha
            tension: 0.1, // Ajustando a suavização da linha
          },
        ],
      },

      // Opções comuns para ambos os gráficos
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top', // Posicionar a legenda no topo
          },
        },
      },
    };
  },
});
</script>

<style scoped>
.chart-container {
  margin: 0 auto;
  padding: 20px;
}

.charts-row {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Espaçamento entre os gráficos */
}

.chart {
  width: 48%; /* Cada gráfico ocupa 48% do espaço disponível */
  height: 400px; /* Definindo uma altura fixa para o gráfico */
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
