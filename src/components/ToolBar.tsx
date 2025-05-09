import {Button, ButtonGroup} from "@chakra-ui/react";
import type {MouseEventHandler} from "react";

interface ToolBarProps {
    addButton: MouseEventHandler<HTMLButtonElement>
    registerButton: MouseEventHandler<HTMLButtonElement>
}
export const ToolBar = ({addButton, registerButton}: ToolBarProps) => {
    return (
            <ButtonGroup variant="outline">
                <Button onClick={addButton}> Add Book</Button>
                <Button onClick={registerButton}>Register</Button>
            </ButtonGroup>
    )
}