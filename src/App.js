import "./App.css";
import Rounter from "./route/Rounter";
import { ToastContainer } from "react-toastify";
import { useLoading } from "./contexts/LoadingContext";
import Spinner from "./component/ui/Spinner";

function App() {
  const { loading } = useLoading();

  return (
    <div className="relative">
      {loading && <Spinner />}
      <Rounter />
      <ToastContainer autoClose="3000" theme="light" />
    </div>
  );
}

export default App;
