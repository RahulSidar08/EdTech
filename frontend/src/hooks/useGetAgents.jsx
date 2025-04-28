import axios from "axios";
import React, { useEffect } from "react";
import { USER_API_END_POINT } from "@/utils/constant";
import { useDispatch } from "react-redux";
import { setAgent } from "@/redux/entitiesSlice";
export const useGetAgents = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getAdmins = async () => {
      try {
        let res = await axios.get(`${USER_API_END_POINT}/admin/getAgents`, {
          withCredentials: true,
        });
        console.log("admin: ",res.data);
        console.log(res.data.agents)
        dispatch(setAgent(res.data.agents))
      } catch (error) {
        console.log(error);
      }
    };
    getAdmins()
  },[]);
};
