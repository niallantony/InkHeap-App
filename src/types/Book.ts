import type {Tag} from "./Tag.ts";

export interface Book {
    readonly id: string;
    title: string;
    author: string;
    status: "READ" | "NOT_READ" | "READING" | "DID_NOT_READ";
    publisher?: string;
    year?: number;
    pages?: number;
    dateStarted?: string;
    dateRead?: string;
    tags: Tag[];
}
