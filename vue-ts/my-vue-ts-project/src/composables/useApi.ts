import { ref } from "vue";

export type Article ={
  id:number,
  title:string,
  author:string
}

export default async function useApi<T>(url:RequestInfo,options?:RequestInit){
  const response = ref<T>();
  const result = async()=>{
    const result = await fetch(url,options).then((r) => r.json());
    response.value = result;
  }
  return { response,result };
};
