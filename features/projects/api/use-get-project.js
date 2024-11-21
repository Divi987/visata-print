'use client'
import { useQuery } from "@tanstack/react-query";

export const useGetProject = (id) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["project", { id }],
    queryFn: async () => {
      const response = await fetch(`/api/projects/${id}`);
      // client.api.projects[":id"].$get({
      //   param: {
      //     id,
      //   },
      // });

      if (!response.ok) {
        throw new Error("Failed to fetch project");
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
