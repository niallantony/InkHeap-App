import './App.css'
import {Heading, Highlight, Text} from "@chakra-ui/react";
import {Library} from "./components/Library.tsx";

function App() {

  return (
    <>
        <Heading size="3xl" letterSpacing="tight">
            <Highlight query="InkHeap" styles={{color: "teal.600"}}>
                Welcome to InkHeap
            </Highlight>
        </Heading>
        <Text fontSize="md" color="fg.muted">
            InkHeap is a lightweight, private, and social way of sharing reading-lists, book clubs and finding like minded readers.
        </Text>
        <Library />
    </>
  )
}

export default App
