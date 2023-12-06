import { useAtom } from "jotai";
import { colorAtom, textAtom, upperCaseTextAtom, userAtom } from "./atoms";
import { useRenderCount } from "@uidotdev/usehooks";

const Bar = () => {
  const renderCount = useRenderCount();

  const [background] = useAtom(colorAtom);
  const [text, setText] = useAtom(textAtom);
  const [upperCaseText] = useAtom(upperCaseTextAtom);
  const [user, setUser] = useAtom(userAtom);

  return (
    <div>
      <h1>Component Bar</h1>
      <h2> Rerender count: {renderCount}</h2>
      Selected color is:
      <button className="color-picker" style={{ background }}>
        Current Color
      </button>
      <br />
      <br />
      <div>Text: {text}</div>
      <div>Text uppercase: {upperCaseText}</div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <br />
      <br />
      <br />
      <div>
        User: id 1 / Name Foobar{" "}
        <button
          onClick={() => setUser({ id: 1, name: "Foobar" })}
          disabled={user.id === 1}
        >
          Choose
        </button>
      </div>
      <div>
        User: id 2 / Name John{" "}
        <button
          onClick={() => setUser({ id: 2, name: "John" })}
          disabled={user.id === 2}
        >
          Choose
        </button>
      </div>
      <div>
        User: id 3 / Name Jane{" "}
        <button
          onClick={() => setUser({ id: 3, name: "Jane" })}
          disabled={user.id === 3}
        >
          Choose
        </button>
      </div>
      <div>
        User: id 4 / Name Foobar{" "}
        <button
          onClick={() => setUser({ id: 4, name: "Foobar" })}
          disabled={user.id === 4}
        >
          Choose
        </button>
      </div>
    </div>
  );
};

export default Bar;
