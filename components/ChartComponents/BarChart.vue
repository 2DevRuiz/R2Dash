<template>
  <div class="w-full ">
    <Bar :data="data" :options="options" />
  </div>
  <!--  -->
</template>
<script lang="ts" setup>
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, RadialLinearScale, ArcElement } from 'chart.js'
import { PointElement, LineElement } from 'chart.js'
import { Bar, Line, PolarArea } from 'vue-chartjs'
import utilSettings from '../../utils/uFunctions'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const { getRandomColor } = utilSettings()

const props = defineProps({
  gData: Object
});
watch(() => props.gData, (oldData, newData) => {
  console.log(newData);
});

const rndcolor = (endColor: number) => {
  const colors = []
  for (let i = 1; i <= endColor; i++) {
    colors.push(getRandomColor())
  }
  return colors
}
const data = {
  //   labels: ['Iphone', 'Samsung', 'Xiaomi'],
  //   datasets: [{ 
  //     data: [40, 20, 12],
  //     label:'Data',
  //     backgroundColor:rndcolor(1)s
  //  },
  // ]
  labels: props.gData.labels,
  datasets: [{
    data: props.gData.data,
    label: props.gData.title,
    backgroundColor: rndcolor(1)
  },]
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio:1
}



</script>