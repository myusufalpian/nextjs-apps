import { useRouter } from 'next/router';

const ErrorPage = () => {
    const router = useRouter();
    const { status, statusText, message } = router.query as {
        status?: number;
        statusText?: string;
        message?: string;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="mb-2 text-4xl font-bold text-red-700">Oops!</h1>
            <p className="my-5 text-2xl">Sorry, an unexpected error has occurred.</p>
            <p className="text-lg">
                {status && statusText ? `${status} ${statusText}` : message ?? 'An unknown error occurred.'}
            </p>
        </div>
    );
}

export default ErrorPage;
