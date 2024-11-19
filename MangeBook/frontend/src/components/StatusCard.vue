<template>
    <div class="dashboard">
      <h1>Dashboard</h1>
      <div class="status-section">
        <StatusCard title="Empréstimos" :count="loanCount" icon="book" />
        <StatusCard title="Devoluções" :count="returnCount" icon="recycle" />
        <StatusCard title="Reservas" :count="reservationCount" icon="calendar" />
      </div>
    </div>
  </template>
  
  <script>
  import StatusCard from "@/components/StatusCard.vue"; // Importando o StatusCard
  
  export default {
    components: {
      StatusCard, // Registrando o StatusCard como componente
    },
    data() {
      return {
        loanCount: 120, 
        returnCount: 50,
        reservationCount: 30,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos do Dashboard */
  .status-section {
    display: flex;
    justify-content: space-around;
  }
  </style>
  