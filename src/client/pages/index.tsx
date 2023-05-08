import { Box, Typography, useTheme } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
    const theme = useTheme();
    return (
        <>
            <Head>
                <title>NextJS Messenger</title>
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
                <Typography
                    variant="h4"
                    component="h4"
                    color={theme.palette.text.primary}
                    marginBottom="50px"
                >
                    NextJS Messenger
                </Typography>
                <Link href="/signin" >
                    <Typography color={theme.palette.text.primary}>
                        Sign In
                    </Typography>
                </Link>
                <Link href="/signup">
                    <Typography color={theme.palette.text.primary}>
                        Sign Up
                    </Typography>
                </Link>
            </Box>
        </>
    );
}
