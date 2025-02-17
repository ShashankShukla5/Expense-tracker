import React from "react";
import { Button } from "./index";
import { useForm } from "react-hook-form";
import appwriteConf from "../appwrite/conf";

function Form({ prevExp, setExpenses }) {
  
  const { register, handleSubmit, reset} = useForm({
    defaultValues: {
      name: prevExp?.name || "",
      amount: prevExp?.amount || "",
      category: prevExp?.category || "",
      date: prevExp?.date || "",
      description: prevExp?.description || "",
    },
  });

  const dataSubmit = async (data) => {
    try {
      console.log(data);
      if (data) {
        const userExp = await appwriteConf.createExpense(data);
        reset();
        setExpenses((prevExpenses) => [...prevExpenses, userExp]);
      }
    } catch (error) {
      console.log(error.message)
    }
  };


  return (
    <form
      onSubmit={handleSubmit(dataSubmit)}
      className="flex w-screen justify-center"
      
    >
      <div className="w-[70%] flex flex-col">
        
        <div className="mt-5 flex gap-5">
          <input
            type="text"
            placeholder="Enter expense name"
            className="rounded-md bg-white p-2 placeholder:text-gray-500 text-black border"
            {...register("name", {
              required: true,
            })}
          />
          <input
            type="text"
            placeholder="Enter amount"
            className="rounded-md bg-white p-2 placeholder:text-gray-500 text-black border"
            {...register("amount", {
              required: true,
            })}
          />
          <input
            type="date"
            id=""
            className="rounded-md bg-white p-2 border text-black hover:cursor-pointer"
            //   style={"color-scheme: dark;"}
            {...register("date", {
              required: true,
            })}
          />
          <div className="bg-white rounded-md flex items-center">
            <label htmlFor="category" className="rounded-md p-2 text-black">
              Category:{" "}
            </label>
            <select
              name="category"
              id="category"
              defaultValue=""
              className="text-gray-600 hover:cursor-pointer"
              {...register("category", {
                required: true,
              })}
            >
              <option value="" className="text-black">
                Select an option
              </option>
              <option value="fixed" className="text-black">
                Fixed
              </option>
              <option value="food" className="text-black">
                Food
              </option>
              <option value="travel" className="text-black">
                Travel
              </option>
              <option value="other" className="text-black">
                Other
              </option>
            </select>
          </div>
        </div>

        <div className="flex mt-5 gap-5">
          <input
            type="text"
            placeholder="Enter description here"
            className="w-full rounded-md bg-white p-2 placeholder:text-gray-500 text-black border"
            {...register("description", {
              required: false,
            })}
          />
          <Button name="Add Expense" className="min-w-3xs" />
        </div>
      </div>
    </form>
  );
}

export default Form;
