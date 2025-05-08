import './App.css'
import {Container, Heading, Highlight, Text} from "@chakra-ui/react";
import {Library} from "./components/Library.tsx";
import {ToolBar} from "./components/ToolBar.tsx";
import {useState} from "react";
import {BookForm} from "./components/BookForm.tsx";

function App() {
    const [page, setPage] = useState(<Library />)

      return (
        <>
            <Container margin="5">
                {}
            <Heading size="3xl" letterSpacing="tight">
                <Highlight query="InkHeap" styles={{color: "teal.600"}}>
                    Welcome to InkHeap
                </Highlight>
            </Heading>
            <Text fontSize="md" color="fg.muted">
                InkHeap is a lightweight, private, and social way of sharing reading-lists, book clubs and finding like minded readers.
            </Text>
            </Container>
            {page}
            <ToolBar addButton={() => setPage(<BookForm />)}/>
        </>
  )
}

export default App
