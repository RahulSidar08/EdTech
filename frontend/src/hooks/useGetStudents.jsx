import { setStudent } from '@/redux/entitiesSlice'
import { store } from '@/redux/store'
import { USER_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useGetStudents = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getStudents = async () => {
            try {
                let res = await axios.get(`${USER_API_END_POINT}/admin/getStudents`,{withCredentials:true})
                // console.log(res)
                // console.log("student: ",res.data.students)
                dispatch(setStudent(res.data.students))
            } catch (error) {
                console.log(error)
            }
        }

        getStudents()
    },[])
}
