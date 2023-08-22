export default function useGData()
{
  const  gData= ref<any>([]);
  const baseURL = "https://dummyjson.com/products?limit=5";
  const fetchData = async () => {
    const { data, error } = await useFetch(baseURL);
    // console.log((error && error.value !== null))
    // console.log(!data)
    if (!data || (error && error.value !== null)) {

      console.log(error);
    } else {

      gData.value = data.value
      
      // console.log(gData.value);
    }
  }
  // watch(gData,() =>{
  //   console.log("get")
  // })
  // onMounted(() => {
  // /* Vue's documentation suggested you can access the lifecycle methods of the component, but I get that this doesn't work because the component itself isn't calling the composable until after the component has been mounted */
  // fetchData()
  // })

  return {gData,fetchData}
}
