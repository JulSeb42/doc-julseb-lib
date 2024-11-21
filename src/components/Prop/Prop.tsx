/*=============================================== Prop component ===============================================*/

import { StyledProp } from "./styles"
import type { IProp } from "./types"

export const Prop: FC<IProp> = ({ children, }) => {
    return (
        <StyledProp>
            {children}
        </StyledProp>
    )
}
