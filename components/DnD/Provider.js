import { DndProvider } from "react-dnd-cjs";
import HTML5Backend from "react-dnd-html5-backend-cjs";

const Provider = elem => {
  return <DndProvider backend={HTML5Backend}>{elem.children}</DndProvider>;
};

export default Provider;
