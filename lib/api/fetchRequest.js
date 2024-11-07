import authAxios from "./request"

export const fetchCategories = async () => {
    const response = await authAxios().get(`/categories`).then((res) => res.data).catch((err) => err);
    return response;
}

export const fetchCategory = async (slug) => {
    const response = await authAxios().get(`/categories/${slug}`).then((res) => res.data).catch((err) => err);
    return response;
}

export const fetchProductForCategories = async (slug) => {
    const response = await authAxios().get(`/product/${slug}`).then((res) => res.data).catch((err) => err);
    return response;
}
