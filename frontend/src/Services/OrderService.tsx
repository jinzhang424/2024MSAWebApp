import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

export const getOrders = async () => {
    const response = await api.get('/Order');
    return response.data;
}

export const getOrder = async (id: number) => {
    const response = await api.get('/Order/${id}');
    return response.data;
}

export const postOrder = async (order: any) => {
    const response = await api.post('/Order', order)
    return response.data;
}

export const updateOrder = async (id: number, product: any) => {
    const response = await api.put('.Order/${id}');
    return response.data;
}

export const deleteOrder = async (id: number) => {
    await api.delete('/Order/${id}');
}