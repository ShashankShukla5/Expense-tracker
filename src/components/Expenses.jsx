import React, {useState} from "react";
import { Form, ExpenseList, Logout } from "./index";

function Expenses() {
  let total = 0;
  const [expenses, setExpenses] = useState([]);
  return (
    <div className="flex flex-col h-screen">
      <Logout />
      <Form setExpenses={setExpenses}/>
      <ExpenseList expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
}

export default Expenses;
