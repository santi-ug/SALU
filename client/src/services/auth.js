import axios from 'axios';
import { jwtVerify } from 'jose';
import Cookies from 'js-cookie';
import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';

export const API = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    withCredentials: true
})


// export const registerRequest = (user) => API.post('/register', user)
// export const loginRequest = (user) => API.post('/login', user)
export const logoutRequest = async () => {
    signOut();
    const loggedOut = await API.post('/auth/logout')
    if (loggedOut) Cookies.remove("token");
}
// export const getJwtSecretKey = () => {
//     const secret = process.env.NEXTAUTH_SECRET
//     if (!secret || secret.length === 0) {
//         throw new Error('Environment variable JWT_SECRET is not defined')
//     }
//     return secret
// }
// export const verifyAuth = async (token) => {
//     try {
//         const verifiedToken = await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()))
//         return verifiedToken
//     } catch (error) {
//         throw new Error('Token expired')
//     }
// }

export const errorUI = (data, bool) => {
    if (data.error) {
        console.log(data.error);
        toast.error(data.error)
        return false
    } else {
        if (bool) toast.success('Registro exitoso')
        if (!bool) toast.success('Login exitoso')
        return true
    }
}

export const getProducts = async () => {
    try {
        const products = await API.get('/products');
        console.log(products.data);
        return products.data; 
    } catch (error) {
        console.log(error);
    }
};


// import { Product, Category, ProductType } from '../types';

// export const getProducts = async (): Promise<Product[]> => {
//   try {
//     const response = await API.get('/products');
//     return response.data.data as Product[];
//   } catch (error) {
//     throw error;
//   }
// };

// export const getCategories = async (): Promise<Category[]> => {
//   try {
//     const response = await API.get('/categories');
//     return response.data.data as Category[];
//   } catch (error) {
//     throw error;
//   }
// }

// export async function createProduct (product : Product): Promise<Product>{
//   try {
//     const response = await API.post('/products', product);
//     console.log("creado");
//     return response.data.data as Product;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function deleteProduct(id: number): Promise<Product> {
//   try {
//     const response = await API.delete(/products/${id});
//     console.log("eliminado");
//     return response.data.data as Product;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function getProduct(id:number){
//   try {
//     const response = await API.get(/products/${id});
//     return response.data.data as Product;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function updateProduct(product_id:number, product: Product): Promise<Product>{
//   try {
//     const response = await API.put(/products/${product_id}, product);
//     console.log("actualizado");
//     return response.data.data as Product;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }
// export const getSingleProduct = async (id: string): Promise<Product> => {
//   return await API.get(/products/${id}).then(response => {
//     return response.data.data as Product;
//   }).catch(error => {
//     throw error;
//   });
// }