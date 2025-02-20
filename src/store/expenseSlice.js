import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import expenseCrud from '../appwrite/conf'

const initialState = {
    expenseStore: [],
    expense: {},
    isTodoEditable: false
};

export const newExpense = createAsyncThunk("expenses/newExpense",
    async (data)=>{
        console.log(data)
        await expenseCrud.createExpense(data)
        
    }
);
export const removeExpense = createAsyncThunk("expenses/removeExpense",
    async (id)=>{
        await expenseCrud.deleteExpense(id)
    }
);
export const allExpenses = createAsyncThunk("expenses/allExpenses",
    async ()=>{
        return ((await expenseCrud.getExpenses()).documents)
    }
);
export const getAnExpense = createAsyncThunk("expenses/getAnExpense", async (id)=>{
    return await expenseCrud.getExpense(id)
})
export const updateAnExpense = createAsyncThunk('expenses/updateAnExpense', async ({id, data})=> {
    console.log(id, data)
    await expenseCrud.updateExpense(id, data)
    return {id, data}
})

export const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(allExpenses.fulfilled, (state, action)=>{
        // console.log(action.payload)
        state.expenseStore = action.payload
    })
    .addCase(getAnExpense.fulfilled, (state, action)=>{
        state.expense = action.payload,
        state.expense.editable = !state.expense.editable,
        // console.log(action)
        (state.expenseStore).map((unit)=>{
            if(unit.$id === action.payload.$id) unit.editable = !unit.editable
        })
    })
    .addCase(updateAnExpense.fulfilled, (state, action)=>{
        state.expenseStore.map((unit)=>{
            if(unit.$id===action.payload.$id){
                unit = action.payload.data
            }
        }),
        state.expense.editable = !state.expense.editable,
        state.expense = {}
    })
  }
});

export const {} = expenseSlice.actions;

export default expenseSlice.reducer
