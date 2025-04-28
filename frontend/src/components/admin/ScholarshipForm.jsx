// components/ScholarshipForm.jsx
"use client";

import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { errorHandler, successHandler } from "../ToastMessage/toast";
import { ToastContainer } from "react-toastify";
export default function ScholarshipForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      deadline: new Date(),
    },
  });

  const deadline = watch("deadline");

  const onSubmit = async (data) => {
    let formData = {
      title: data.title,
      description: data.description,
      eligibility: {
        degree: data.degree,
        location: data.location,
      },
      amount: data.amount,
      deadline: data.deadline,
    };
    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/admin/postScholarship`,
        formData,
        { withCredentials: true }
      );
      console.log(res);
      successHandler(res.data.message);
    } catch (error) {
      console.log(error);
      errorHandler(error.message);
    }
  };

  return (
    <>
      <Card className="max-w-2xl mx-auto mt-4">
        <CardHeader>
          <CardTitle>Create Scholarship</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                {...register("title", { required: "Title is required" })}
                placeholder="Enter scholarship title"
              />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title.message}</p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Enter scholarship description"
              />
              {errors.description && (
                <p className="text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Degree */}
            <div className="space-y-2">
              <Label htmlFor="degree">Degree</Label>
              <Input
                id="degree"
                {...register("degree", { required: "Degree is required" })}
                placeholder="Enter eligible degree"
              />
              {errors.degree && (
                <p className="text-sm text-red-500">{errors.degree.message}</p>
              )}
            </div>

            {/* Location (optional) */}
            <div className="space-y-2">
              <Label htmlFor="location">Location (Optional)</Label>
              <Input
                id="location"
                {...register("location")}
                placeholder="Enter location (if any)"
              />
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <Label htmlFor="amount">Amount ($)</Label>
              <Input
                id="amount"
                type="number"
                {...register("amount", {
                  required: "Amount is required",
                  valueAsNumber: true,
                })}
                placeholder="Enter scholarship amount"
              />
              {errors.amount && (
                <p className="text-sm text-red-500">{errors.amount.message}</p>
              )}
            </div>

            {/* Deadline (with Calendar picker) */}
            <div className="space-y-2">
              <Label>Deadline</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !deadline && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {deadline ? format(deadline, "PPP") : "Pick a deadline"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={deadline}
                    onSelect={(date) => date && setValue("deadline", date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Create Scholarship
            </Button>
          </form>
        </CardContent>
      </Card>
      <ToastContainer />
    </>
  );
}
