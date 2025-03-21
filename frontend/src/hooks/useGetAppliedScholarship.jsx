import { USER_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import React, { useEffect } from 'react'

export const useGetAppliedScholarship = () => {

    useEffect(() => {
        let getScholarshipData  = async () =>{
            let res = await axios.get(`${USER_API_END_POINT}/`)
        }
    })

  return (
    <div>useGetAppliedScholarship</div>
  )
}
