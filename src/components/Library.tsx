import {Grid} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import type {Book} from "../types/Book.ts";
import {BookCard} from "./Book.tsx";

export const Library = () => {
    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        fetchBooks()
        console.log(books)
    }, [])

    const fetchBooks = async () => {
        fetch("http://localhost:8080/books", {
            method: "GET",
        })
            .then(res => res.json())
            .then(res => setBooks(res))
    }
    return (
        <Grid templateColumns="repeat(3, 1fr)" gap="6">
            {books.map((book, index) => {
                return (
                    <>
                        <BookCard key={index} book={book} />
                    </>
                )
            })}
        </Grid>
    )
}