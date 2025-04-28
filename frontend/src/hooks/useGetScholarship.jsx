import React, { useEffect } from "react";
import axios from "axios";
import { USER_API_END_POINT } from '@/utils/constant'
import { useDispatch } from "react-redux";
import { setScholarship } from "@/redux/entitiesSlice";
export const useGetScholarship = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getScholarship = async () => {
      try {
        let res = await axios.get(`${USER_API_END_POINT}/admin/getScholarship`, {
          withCredentials: true,
        });
        console.log(res.data.scholarships)
        dispatch(setScholarship(res.data.scholarships));
      } catch (error) {
        console.log(error);
      }
    };
    getScholarship();
  }, []);
};
