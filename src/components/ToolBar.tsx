import {Button, ButtonGroup} from "@chakra-ui/react";
import type {MouseEventHandler} from "react";

interface ToolBarProps {
    addButton: MouseEventHandler<HTMLButtonElement>
}
export const ToolBar = ({addButton}: ToolBarProps) => {
    return (
            <ButtonGroup variant="outline">
                <Button onClick={addButton}> Add Book</Button>
            </ButtonGroup>
    )
}