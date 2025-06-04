import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useGetScholarship } from '@/hooks/useGetScholarship';
import { USER_API_END_POINT } from '@/utils/constant';

export const Recommendation = () => {
    useGetScholarship();
    const scholarshipData = useSelector((state) => state.entities.scholarships);
    const student = useSelector((state) => state.auth.user)
    const [recommendation,setRecommendation] = useState(null)
    useEffect(() => {
        const getRecommendation = async () => {
            try {
                console.log("Calling recommendation api")
                const res = await axios.get(`${USER_API_END_POINT}/student/recommendation`, {
                    params : {
                        student,
                        scholarship : scholarshipData
                    },
                    withCredentials: true
                })
                console.log(res.data)
                setRecommendation(res.data.recommendation)
            } catch (error) {
                console.log(error);
            }
        };
        getRecommendation()
    }, [])
    return (
        <>
            <div>
                <h1>This is Student Scholarship recommendation page based on student profile </h1>
                {
                    <p>
                        {recommendation}
                    </p>
                }
            </div>
        </>
    )
}
