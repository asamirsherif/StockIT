export interface IExpense {
    id?: number,
    warehouse_id: number,
    expense_category_id: number,
    details: string,
    amount: number,
    user_id?: number,
    ref?: string,
    date: string
}
