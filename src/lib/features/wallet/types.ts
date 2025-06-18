import { TransactionType } from "@/lib/enum/post"

    export interface Transactions {
        transactionId: string;
        type: TransactionType;
        transactionDate : string;
        points: number;
    }
    


export interface Author {
  id: string;
  name: string;
}

export interface PointModel {
  author: Author;
  point: number;
  date: Date;
  cr_dr: 'credit' | 'debit';
  naration: string;
}

export interface PointsState {
  points: PointModel[];
}
