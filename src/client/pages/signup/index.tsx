import Head from "next/head";
import Link from "next/link";
import {Box, Typography, TextField, useTheme, Button} from "@mui/material";

export default function SignIn() {
    const theme = useTheme();
    return (
        <>
            <Head>
                <title>Sign In</title>
            </Head>
            <Box
                component="main"
                sx={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: theme.palette.background.default
                }}
            >
                <TextField required helperText="First Name" defaultValue="admin" />
                <TextField required helperText="Last Name" defaultValue="admin" />
                <TextField required helperText="Display Name" defaultValue="admin" />
                <TextField required helperText="Username" defaultValue="admin" />
                <TextField required helperText="E-mail" defaultValue="admin" />
                <TextField required helperText="Phone" defaultValue="admin" />
                <TextField required helperText="Password" defaultValue="admin" />
                <Button>Sign Up</Button>
                <Link href="404">
                    <Typography color={ theme.palette.text.primary } sx={{ textDecoration: "none" }}>
                        Want to Sign In?
                    </Typography>
                </Link>
            </Box>
        </>
    );
}
