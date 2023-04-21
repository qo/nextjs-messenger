import Head from "next/head";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "../../styles/SignIn.module.css";

export default function SignIn() {
    return (
        <>
            <Head>
                <title>Sign In</title>
            </Head>
            <main className={styles.main}>
                <TextField required helperText="Username" defaultValue="admin" />
                <TextField required helperText="Password" defaultValue="admin" />
                <Button>Sign Up</Button>
            </main>
        </>
    );
}
