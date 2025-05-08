import {CardBody, Text, CardRoot, CardTitle} from "@chakra-ui/react";
import type {Book} from "../types/Book.ts";

interface BookProps {
    book: Book;
}
export const BookCard = ({book} : BookProps) => {
    return (
        <CardRoot>
            <CardBody>
                <CardTitle>
                    {book.title}
                </CardTitle>
                <Text>
                    {book.author}
                </Text>
                <Text>
                    Published: {book.year}
                </Text>
                <Text>
                    Pages: {book.pages}
                </Text>
            </CardBody>
        </CardRoot>
    )
}