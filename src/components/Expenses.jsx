import React, {useState} from "react";
import { Form, ExpenseList, Logout } from "./index";

function Expenses() {
  let total = 0;
  const [refresh, setRefresh] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      <Logout />
      <Form setRefresh={setRefresh}/>
      <ExpenseList  refresh={refresh} setRefresh={setRefresh}/>
    </div>
  );
}

export default Expenses;
