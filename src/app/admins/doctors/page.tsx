import Table from "@/components/ui/Table/Table";
import AdminTable from "@/components/view/Admin/AdminTable";
import { ColumnType } from "antd/es/table";
import React from "react";
import { columns } from "./columns.doctors";
import { getAllDoctors } from "@/services/doctors/get-all-doctors";
import { Doctor } from "@/interfaces/doctor.interfaces";
import SearchFilter from "@/components/view/Admin/SearchFilter";

const AllDoctorByAdmin = async (props: {
  searchParams: {
    searchTerm: string;
  };
}) => {
  console.log(props);
  const data: any = await getAllDoctors(props.searchParams);
  return (
    <AdminTable title="All Doctors">
      <SearchFilter />
      <Table<Doctor> columns={columns} data={data} />
    </AdminTable>
  );
};

export default AllDoctorByAdmin;
