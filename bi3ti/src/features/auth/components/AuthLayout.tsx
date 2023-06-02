import {FC , ReactNode} from "react"
import { Grid } from '@mui/material'
const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Grid sx={{p:2}} container alignItems="center" justifyContent="flex-start" direction="column"><img src="logo-no-background.png" width='60px' alt="bi3ti-logo" height="40px" /> <main>{children}</main></Grid>

    )
}

export default AuthLayout