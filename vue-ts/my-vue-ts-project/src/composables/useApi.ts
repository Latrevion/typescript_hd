import { ref } from "vue";

export default async function useApi(url){
  const response = ref();
  const result = async()=>{
    const result = await fetch(url).then((r) => r.json());
    response.value = result;
  }
  return { response,result };
};
