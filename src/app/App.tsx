import './styles.css'
import { useEffect } from 'react';
import { ErrorBoundary } from "./ErrorBoundary";
import { Background } from "../components/Background";
import { Screen } from "../components/Screen";
import { RotationAlert } from "../components/RotationAlert";
import { trackUserVisit } from "../services/trackUserVisit";

export function App() {
  useEffect(() => {
    trackUserVisit()
  }, [])

  return (
    <ErrorBoundary>
      <Background />
      <Screen />
      <RotationAlert />
    </ErrorBoundary>
  );
}
