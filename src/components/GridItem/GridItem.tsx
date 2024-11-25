/*=============================================== GridItem component ===============================================*/

import { StyledGridItem } from "./styles"
import type { IGridItem } from "./types"

export const GridItem: FC<IGridItem> = ({ children = "Grid item" }) => {
    return (
        <StyledGridItem>
            {children}
        </StyledGridItem>
    )
}
