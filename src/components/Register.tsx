import {Button, ButtonGroup, Container, Field, Input, Text, VStack, Alert} from "@chakra-ui/react";
import { PasswordInput } from "./ui/password-input.tsx";
import {useState} from "react";
import type {FieldErrors} from "../types/User.ts";

export const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState<FieldErrors>({})

    const postUser = async () => {
        fetch("http://localhost:9000/register/new", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
                confirmPassword
            })
        })
            .then(res => res.json())
            .then(res => {
               if (res.errors) {
                  setErrors(res.errors)
               }
            })

    }

    return (
        <Container>
            <Text>
                Register for our service
            </Text>
            <VStack gap="6" marginBottom="6">
                <Field.Root>
                    <Field.Label>
                        <Field.RequiredIndicator />
                        User-Name:
                    </Field.Label>
                    <Input
                        variant="flushed"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    {errors.username && (<Field.ErrorText>{errors.username}</Field.ErrorText>)}
                </Field.Root>
                <Field.Root>
                    <Field.Label>
                        <Field.RequiredIndicator />
                        Email:
                    </Field.Label>
                    <Input
                        variant="flushed"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                    />
                    {errors.email && (<Field.ErrorText>{errors.email}</Field.ErrorText>)}
                </Field.Root>
                <Field.Root>
                    <Field.Label>
                        <Field.RequiredIndicator />
                        Password:
                    </Field.Label>
                    <PasswordInput
                        variant="flushed"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && (<Field.ErrorText>{errors.password}</Field.ErrorText>)}
                </Field.Root>
                <Field.Root>
                    <Field.Label>
                        <Field.RequiredIndicator />
                        Confirm Password:
                    </Field.Label>
                    <Input
                        variant="flushed"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                    />
                    {errors.confirmPassword && (<Field.ErrorText>{errors.confirmPassword}</Field.ErrorText>)}
                </Field.Root>
                {errors.user && (
                    <Alert.Root status={"error"}>
                        <Alert.Indicator />
                        <Alert.Content>
                            <Alert.Description>
                                A user with this name already exists.
                            </Alert.Description>
                        </Alert.Content>
                    </Alert.Root>
                )}
                <ButtonGroup variant="outline">
                    <Button onClick={postUser}>Register</Button>
                </ButtonGroup>
            </VStack>

        </Container>
    )
}