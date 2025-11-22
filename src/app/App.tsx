import './styles.css'
import { ErrorBoundary } from "./ErrorBoundary";
import { Background } from "../components/Background";
import { Screen } from "../components/Screen";
import { RotationAlert } from "../components/RotationAlert";

export function App() {
  return (
    <ErrorBoundary>
      <Background />
      <Screen />
      <RotationAlert />
    </ErrorBoundary>
  );
}
