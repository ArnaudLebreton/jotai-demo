import { useRenderCount } from "@uidotdev/usehooks";
import { usernameAtom } from "./atoms";
import { useAtom } from "jotai";

const Baz = () => {
  const renderCount = useRenderCount();
  const [username] = useAtom(usernameAtom);

  return (
    <div>
      <h1>Component Baz</h1>
      <h2> Rerender count: {renderCount}</h2>
      <h3>Selected User: {username}</h3>
    </div>
  );
};

export default Baz;
