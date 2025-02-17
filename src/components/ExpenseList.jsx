import React, {useState, useRef} from "react";
import { Button } from "./index";
import { useEffect } from "react";
import appwriteConf from "../appwrite/conf";

function ExpenseList({ expenses, setExpenses }) {
  const isInitialMount = useRef(true);
  let datePart = ""

  const deleteExp = async (id) => {
    try {
      await appwriteConf.deleteExpense(id)
      setExpenses((prevData) => prevData.filter((expense) => expense.$id !== id));
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    if(isInitialMount.current){
      const getAllDoc = async () => {
        try {
          setExpenses((await appwriteConf.getExpenses()).documents);
          isInitialMount.current = false; 
        } catch (error) {
          console.log(error.message);
        }
      };
      getAllDoc();
    }else{
      setExpenses(expenses)

    }
    
    
  }, [expenses]);

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
                {/* {isTodoEditable ? "📁" : "✏️"} */}
                <Button
                  name={"✏️"}
                  className="hover:bg-[#656e9f] duration-200"
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
