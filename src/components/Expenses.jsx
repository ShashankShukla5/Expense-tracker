import React, {useState} from "react";
import { Form, ExpenseList, Logout } from "./index";
import { Link } from "react-router-dom";

function Expenses() {
  const [refresh, setRefresh] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      <Logout />
      <Form setRefresh={setRefresh}/>
      <ExpenseList  refresh={refresh} setRefresh={setRefresh}/>
      <Link to="/expenses/chart" className="bg-[#2f3c7e] absolute bottom-7 right-9 p-1.5 px-5 rounded-md">Chart</Link>
    </div>
  );
}

export default Expenses;
