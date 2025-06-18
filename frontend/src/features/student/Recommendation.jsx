import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetScholarship } from '@/hooks/useGetScholarship';
import { USER_API_END_POINT } from '@/utils/constant';

export const Recommendation = () => {
  useGetScholarship();
  const scholarshipData = useSelector((state) => state.entities.scholarships);
  const student = useSelector((state) => state.auth.user);
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecommendation = async () => {
      try {
        console.log("Calling recommendation api");
        const res = await axios.get(`${USER_API_END_POINT}/student/recommendation`, {
          params: {
            student,
            scholarship: scholarshipData
          },
          withCredentials: true
        });
        console.log(res.data);
        setRecommendation(res.data.recommendation);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getRecommendation();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 py-10">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4 text-center">
          Student Scholarship Recommendation
        </h1>
        {loading ? (
          <p className="text-gray-500 text-center">Loading recommendation...</p>
        ) : recommendation ? (
          <div className="mt-4 space-y-3">
            <p className="text-lg text-gray-800">{recommendation}</p>
          </div>
        ) : (
          <p className="text-red-500 text-center">No recommendation found.</p>
        )}
      </div>
    </div>
  );
};
