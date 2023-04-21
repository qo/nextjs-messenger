import Head from "next/head";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>NextJS Messenger</title>
            </Head>
            <main className={styles.main}>
                <Typography variant="h4" component="h4">
                    NextJS Messenger
                </Typography>
                <Link href="/signin">
                    <Typography>Sign In</Typography>
                </Link>
                <Link href="/signup">
                    <Typography>Sign Up</Typography>
                </Link>
            </main>
        </>
    );
}
