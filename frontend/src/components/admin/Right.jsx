import axios from "axios";
import { Sidebar } from "./Sidebar";
import React, { useEffect, useState } from "react";

export const Right = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/admin/getStudents", {
          withCredentials: true,
        });
        console.log(res);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className="flex gap-10">
        <Sidebar />
        <div>
          <h1>This is right side of admin panel </h1>
        </div>
      </div>
    </>
  );
};
