import Footer from "./components/Footer";
import FormularioTarea from "./components/FormularioTarea";
import Menu from "./components/Menu";

function App() {
  return (
    <>
        <Menu />
        <main className="container my-4">
          <h1 className="text-center">Lista de tareas ✍️</h1>
          <FormularioTarea />
        </main>
        <Footer />
    </>
  );
}

export default App;
