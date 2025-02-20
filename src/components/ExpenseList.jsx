import React, {useState} from "react";
import { Button } from "./index";
import { useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { removeExpense, allExpenses, getAnExpense } from "../store/expenseSlice";

function ExpenseList({refresh, setRefresh}) {
  let datePart = ""
  const dispatch = useDispatch()
  
  // dispatch(allExpenses())
  const expenses = useSelector((state)=>state.expenses.expenseStore)
  // const isTodoEditable = useSelector((state)=>state.expenses.isTodoEditable)

  const updateList = (id)=> {
    dispatch(getAnExpense(id))
  }
  const deleteExp = async (id) => {
    dispatch(removeExpense(id))
    setRefresh((prev)=>!prev)
  }

  useEffect(() => {
    dispatch(allExpenses())
  }, [refresh]);

  return (
    <div className="flex w-screen flex-1 justify-center py-7 overflow-y-auto">
      <div className="flex flex-col bg-white w-[70%] h-[100%] rounded-md overflow-y-auto p-5">
        <ul className="flex flex-col items-center text-black">
          {expenses.map((data) => (
            <li key={data.$id} className="flex w-[95%] bg-[#FBEAEB] rounded-xl gap-20 p-5 mb-3">
              <div className="flex flex-col justify-between w-[70%]">
                <div className="flex justify-between gap-7 mb-3">
                  <p className="font-bold">{data.name}</p>
                  <p>{datePart = (data.date).split("T")[0]}</p>
                  <p>{data.category}</p>
                  <p className="text-green-500 font-bold">{data.amount}</p>
                </div>
                <p className="w-[70%]">{data.description}</p>
              </div>
              <div className="flex items-center gap-5">
                
                <Button
                  name={data.editable ? "📁" : "✏️"}
                  className="hover:bg-[#656e9f] duration-200"
                  onClick={()=>updateList(data.$id)}
                />
                <Button
                  name={"❌"}
                  onClick={()=>deleteExp(data.$id)}
                  className="hover:bg-[#656e9f] duration-200"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpenseList;
