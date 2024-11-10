import { selector } from "recoil";
import { categoryState, categoryStateSlug } from "../atoms/states";
import { fetchCategories } from "@/lib/api/fetchRequest";

export const categoryStateSelector = selector({
    key: "categoryStateSelector",
    get: async ({ get }) => {
        try {
            const response = await fetch('/api/categories');
            if (!response.ok) throw new Error('Failed to fetch categories');
            return await response.json();
        } catch(error) {
            console.log(error);
            return [];
        }
    }
});

export const categoryStateSlugSelector = selector({
    key: "categoryStateSlug",
    get: async ({ get }) => {
        try {
            let selectedCategoryId = get(categoryStateSlug);
            if (!selectedCategoryId) return null;
        
            const response = await fetch(`/api/categories/${selectedCategoryId}`);
            if (!response.ok) throw new Error('Failed to fetch category');
            return await response.json();
            } catch (error) {
            console.error(error);
            return null;
            }
    }
});

