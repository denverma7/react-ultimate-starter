import FrameworkWindow from "./FrameworkWindow";
import FrameworkHeader from "./FrameworkHeader";
import FrameworkTree from "./FrameworkTree";
import FrameworkProgress from "./FrameworkProgress";
import FrameworkModules from "./FrameworkModules";

export default function AboutIllustration() {
  return (
    <FrameworkWindow>
      <FrameworkHeader />

      <FrameworkTree />

      <FrameworkProgress />

      <FrameworkModules />
    </FrameworkWindow>
  );
}