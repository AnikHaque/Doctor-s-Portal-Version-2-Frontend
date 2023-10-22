"use server"

import { Doctor } from "@/interfaces/doctor.interfaces";
import { revalidateTag } from "next/cache";
// import { redirect } from "next/navigation";

export const deleteDoctor = async (id: string) => {
    console.log(id);
    const res = await fetch(`http://localhost:5000/api/v1/doctors/${id}`, {
        method: "DELETE",
    });
    const { data } = await res.json();
    revalidateTag("all-doctors")
    // redirect
}