import { Navigate, Route, Routes } from "react-router-dom";
import ListarCategorias from "../pages/categorias/listar-categorias";
import ListarProdutos from "../pages/produtos/listar-produtos";
import EditarCategoria from "../pages/categorias/editar-categoria";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<h1>Página Principal</h1>} />
      <Route path="/categorias" element={<ListarCategorias />} />
      <Route path="/produtos" element={<ListarProdutos />} />
      <Route path="/categorias/:categoriaId/editar" element={<EditarCategoria />}  />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
