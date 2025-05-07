import {CardBody, Text, CardRoot, CardTitle, CardDescription} from "@chakra-ui/react";
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
                <CardDescription>
                    <Text>
                        Published: {book.year}
                    </Text>
                    <Text>
                        Pages: {book.pages}
                    </Text>
                </CardDescription>
            </CardBody>
        </CardRoot>
    )
}