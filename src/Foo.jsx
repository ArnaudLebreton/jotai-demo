import { useAtom } from "jotai";
import { colorAtom } from "./atoms";
import { useRenderCount } from "@uidotdev/usehooks";

const Foo = () => {
  const renderCount = useRenderCount();

  const [color, setColor] = useAtom(colorAtom);
  return (
    <div>
      <h1>Component Foo</h1>
      <h2> Rerender count: {renderCount}</h2>
      <h3>Choose color: {color}</h3>
      <div className="column">
        <button
          className="color-picker"
          style={{ background: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="color-picker"
          style={{ background: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="color-picker"
          style={{ background: "gray" }}
          onClick={() => setColor("gray")}
        >
          Gray
        </button>
        <button
          className="color-picker"
          style={{ background: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="color-picker"
          style={{ background: "pink" }}
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="color-picker"
          style={{ background: "purple" }}
          onClick={() => setColor("purple")}
        >
          Purple
        </button>
      </div>
    </div>
  );
};

export default Foo;
