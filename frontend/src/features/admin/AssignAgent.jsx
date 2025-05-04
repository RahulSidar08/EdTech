import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";

export const AssignAgent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/admin/assign`,
        data ,
        { withCredentials: true }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto mt-4">
      <CardHeader>
        <CardTitle>Assign Agent for Student</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="space-y-2">
            <Input
              id="studentId"
              {...register("studentId", {
                required: "Student ID is required",
              })}
              placeholder="Enter Student ID"
            />
            {errors.studentId && (
              <p className="text-sm text-red-500">{errors.studentId.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              id="agentId"
              {...register("agentId", {
                required: "Agent ID is required",
              })}
              placeholder="Enter Agent ID"
            />
            {errors.agentId && (
              <p className="text-sm text-red-500">{errors.agentId.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Assign Agent
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
