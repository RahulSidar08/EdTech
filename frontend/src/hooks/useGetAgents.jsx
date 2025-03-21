import axios from 'axios'
import React, { useEffect } from 'react'
import { USER_API_END_POINT } from '@/utils/constant'
export const useGetAgents = () => {

    useEffect(() => {
        const getAdmins = async () => {
            let res = axios.get(`${USER_API_END_POINT}`)
        }
    })

  return (
    <div>useGetAgents</div>
  )
}
