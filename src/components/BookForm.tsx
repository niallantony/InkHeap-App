import {Select, Text, Textarea, Container, Field, Input, Flex, createListCollection, VStack} from "@chakra-ui/react";
import {useState} from "react";

export const BookForm = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [year, setYear] = useState("")
    const [pages, setPages] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState<string[]>([])

    const valueOf = (e: React.ChangeEvent<HTMLInputElement>) => {
        return e.target.value;
    }

    const statuses = createListCollection({
        items: [
            {label: "Read", value: "READ"},
            {label: "Not Read", value: "NOT_READ"},
            {label: "Reading", value: "READING"},
            {label: "Did Not Read", value: "DID_NOT_READ"},
        ]
    })

    return (
        <Container backgroundColor="bg.subtle" borderRadius="md" padding="6" margin="6">
            <Text>
                Add a new book to your library
            </Text>
            <VStack gap="6">
                <Field.Root  >
                    <Field.Label>
                        <Field.RequiredIndicator />
                        Title:
                    </Field.Label>
                    <Input
                        variant="flushed"
                        value={title}
                        onChange={(e) => setTitle(valueOf(e))}
                    />
                    <Field.ErrorText>Title is required.</Field.ErrorText>
                </Field.Root>
                <Field.Root  >
                    <Field.Label>
                        <Field.RequiredIndicator />
                        Author:
                    </Field.Label>
                    <Input
                        variant="flushed"
                        value={author}
                        onChange={(e) => setAuthor(valueOf(e))}
                    />
                    <Field.ErrorText>Title is required.</Field.ErrorText>
                </Field.Root>
                <Flex gap="6" width="full">
                        <Field.Root >
                            <Field.Label>
                                <Field.RequiredIndicator />
                                Pages:
                            </Field.Label>
                            <Input
                                variant="flushed"
                                value={pages}
                                onChange={(e) => setPages(valueOf(e))}
                            />
                            <Field.ErrorText>Title is required.</Field.ErrorText>
                        </Field.Root>
                        <Field.Root >
                            <Field.Label>
                                <Field.RequiredIndicator />
                                Year:
                            </Field.Label>
                            <Input
                                variant="flushed"
                                value={year}
                                onChange={(e) => setYear(valueOf(e))}
                            />
                            <Field.ErrorText>Title is required.</Field.ErrorText>
                        </Field.Root>
                </Flex>
                <Field.Root>
                    <Field.Label>
                        Description
                    </Field.Label>
                    <Textarea
                        placeholder="Description..."
                        value={description}
                        onChange={(e) => setDescription(valueOf(e))}
                    />
                </Field.Root>
                <Select.Root
                    collection={statuses}
                    value={status}
                    onValueChange={(e) => setStatus(e.value)}
                >
                    <Select.HiddenSelect />
                    <Select.Label textAlign="left" >Status: </Select.Label>
                    <Select.Control>
                        <Select.Trigger>
                            <Select.ValueText placeholder="Select status" />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            <Select.Indicator />
                        </Select.IndicatorGroup>
                    </Select.Control>
                    <Select.Positioner>
                        <Select.Content>
                            {statuses.items.map((status) => (
                                <Select.Item item={status} key={status.value}>
                                    {status.label}
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>

                </Select.Root>
            </VStack>
        </Container>
    )
}