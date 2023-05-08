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
                <TextField required helperText="Username" defaultValue="admin" />
                <TextField required helperText="Password" defaultValue="admin" />
                <Button>Sign In</Button>
                <Link href="404">
                    <Typography color={ theme.palette.text.primary } sx={{ textDecoration: "none" }}>
                        Forgot Password?
                    </Typography>
                </Link>
            </Box>
        </>
    );
}
