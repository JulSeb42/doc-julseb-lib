import { useState, useRef, useEffect } from "react"
import classNames from "classnames"
import {
    Icon,
    Text,
    Key,
    Modal,
    useKeyPress,
    useClickOutside,
    Autocomplete,
    useLibTheme,
    Flexbox,
    Button,
} from "@julseb-lib/react"
import { allPages } from "data"
import { InputContainer, ModalContainer } from "./styles"

export const HeaderSearch = () => {
    const { selectedTheme } = useLibTheme()

    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState<string>("")
    const el = useRef<HTMLFormElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleReset = () => {
        setValue("")
        setIsOpen(false)
    }

    useKeyPress(["Command", "KeyK"], () => {
        setIsOpen(!isOpen)

        if (isOpen) {
            handleReset()
        }
    })
    useClickOutside(el, handleReset)

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef?.current?.focus(), 100)
        }
    }, [isOpen])

    return (
        <>
            <InputContainer
                onClick={() => setIsOpen(true)}
                className={classNames({ Dark: selectedTheme === "dark" })}
            >
                <Icon size={16} src="search" color="primary" />
                <Text className="SearchButton" color="gray">
                    Search component...
                </Text>
                <Key keys={["⌘", "K"]} />
            </InputContainer>

            <Modal isOpen={isOpen} setIsOpen={setIsOpen} hideCloseButton>
                <ModalContainer ref={el}>
                    <Autocomplete
                        label="Search components globally"
                        value={value}
                        setValue={setValue}
                        listResults={allPages.map(c => c.name)}
                        ref={inputRef}
                        autoFocus
                    />

                    <Flexbox gap="xs">
                        <Button type="submit">Search</Button>
                        <Button
                            type="reset"
                            variant="transparent"
                            onClick={handleReset}
                        >
                            Cancel
                        </Button>
                    </Flexbox>
                </ModalContainer>
            </Modal>
        </>
    )
}
