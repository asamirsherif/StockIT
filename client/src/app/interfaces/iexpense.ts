import { IExpenseCategory } from "./iexpense-category"

export interface IExpense {
    id?: number,
    warehouse_id: number,
    expense_category_id: number,
    expense_category?: IExpenseCategory,
    details: string,
    amount: number,
    user_id?: number,
    ref?: string,
    date: string
}
