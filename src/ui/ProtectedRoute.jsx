import { useUser } from "../features/authentication/useUser";
import { Navigate } from "react-router-dom";
import Spinner from "./Spinner";
import styled from "styled-components";

const FullPageSpinner = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated } = useUser();
  if (isLoading)
    return (
      <FullPageSpinner>
        <Spinner />
      </FullPageSpinner>
    );
  if (!isAuthenticated) return <Navigate to="/login" />;
  return children;
}
