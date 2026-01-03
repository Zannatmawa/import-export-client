import React from 'react'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://import-export-hub-sigma.vercel.app',
    // baseURL: 'https://import-export-hub-sigma.vercel.app',
})
const useAxios = () => {
    return axiosInstance
}

export default useAxios