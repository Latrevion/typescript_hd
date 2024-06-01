import useApi from "../composables/useApi";

export type Article = {
  id: number;
  title: string;
  author: string;
};

const host = `http://127.0.0.1:3002`;

//fetch article list
export const all = async () => {
  const { response, result } = await useApi<Article[]>(`${host}/articles/`);
  result();
  return { response };
};

export const find = async (id: number) => {
  const { response, result } = await useApi<Article>(`${host}/articles/${id}`);
  result();
  return { response };
};
