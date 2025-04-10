import { StyledPreview } from "./styles"
import type { IPreview } from "./types"

export const Preview: FC<IPreview> = ({ children }) => {
    return <StyledPreview>{children}</StyledPreview>
}
