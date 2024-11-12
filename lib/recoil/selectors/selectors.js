import { selector } from "recoil";
import {
  categoryFilterByParentIdState,
  categoryState,
  categoryStateSlug,
  listOfProductsByCategoryState,
} from "../atoms/states";
import { fetchCategories } from "@/lib/api/fetchRequest";

export const categoryStateSelector = selector({
  key: "categoryStateSelector",
  get: async () => {
    try {
      const response = await fetch(`/api/categories?parentId=null`);
      if (!response.ok) throw new Error("Failed to fetch categories");
      return await response.json();
    } catch (error) {
      console.log(error);
      return [];
    }
  },
});

export const categoryStateSlugSelector = selector({
  key: "categoryStateSlug",
  get: async ({ get }) => {
    try {
      let selectedCategoryId = get(categoryStateSlug);
      if (!selectedCategoryId) return null;

      const response = await fetch(`/api/categories/${selectedCategoryId}`);
      if (!response.ok) throw new Error("Failed to fetch category");
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },
});

export const categoryFilterByParentSelector = selector({
  key: "categoryFilterByParentSelector",
  get: async ({ get }) => {
    try {
      let selectedCategoryId = get(categoryFilterByParentIdState);
      if (!selectedCategoryId) return null;

      const response = await fetch(
        `/api/categories?parentId=${selectedCategoryId}`
      );
      if (!response.ok) throw new Error("Failed to fetch category");
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },
});

export const productsFilterByCategorySelector = selector({
  key: "productsFilterByCategorySelector",
  get: async ({ get }) => {
    try {
      let selectedCategoryId = get(listOfProductsByCategoryState);
      if (!selectedCategoryId) return null;

      const response = await fetch(
        `/api/products?categoryId=${selectedCategoryId}`
      );
      if (!response.ok) throw new Error("Failed to fetch category");
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },
});
