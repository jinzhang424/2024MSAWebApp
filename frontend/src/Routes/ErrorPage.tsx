import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    const getErrorMessage = (error: unknown): string => {
        if (typeof error === 'object' && error !== null) {
            if ('statusText' in error && typeof (error as any).statusText === 'string') {
                return (error as any).statusText;
            }
            if ('message' in error && typeof (error as any).message === 'string') {
                return (error as any).message;
            }
        }
        return 'An unexpected error has occurred.';
    };

    return (
        <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{getErrorMessage(error)}</i>
        </p>
        </div>
    );
}