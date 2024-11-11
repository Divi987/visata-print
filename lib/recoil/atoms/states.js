import { atom } from "recoil"

export const categoryState = atom({
    key: "categoryState",
    default: []
})

export const categoryStateSlug = atom({
    key: "CategoryStateSlug",
    default: null
})

export const categoryFilterByParentIdState = atom({
    key: "categoryFilterByParentIdState",
    default: null
})

export const productsState = atom({
    key: 'productState',
    default: {}
})