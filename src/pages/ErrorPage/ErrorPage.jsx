import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <em>{error.message}</em>
      </p>
      <Link to="/">Homepage</Link>
    </div>
  );
}

export default ErrorPage;
