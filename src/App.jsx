import "./App.css";
import useFetch from "./useFetch";
export default function App() {
  const { error, data, loading, fetchData } = useFetch(
    "https://api.adviceslip.com/advice",
  );
  return (
    <main className="text-center container my-3">
      <h1 className="my-3">Advice Slip API</h1>
      <button className="btn btn-primary mb-3" onClick={fetchData}>
        Get Advice
      </button>
      {loading && <p>loading....</p>}
      {data && (
        <p>
          <strong>{data.slip.advice}</strong>
        </p>
      )}
      {error && <p>An error occured while fetching the advice...</p>}
    </main>
  );
}
