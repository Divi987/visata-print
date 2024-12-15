import { useQuery } from '@tanstack/react-query';
// import { client } from '@/lib/hono';
export const useGetImages = (id) => {
  const query = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const response = await fetch(`/api/products/${id}`)//client.api.images.$get();
      if (!response.ok) throw new Error('Failed to fetch images.');
      const { data } = await response.json();
      console.log(data)
      return data;
    },
  });
  return query;
};