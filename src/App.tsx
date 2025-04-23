import ActionBanner from "./components/ActionBanner";
import Banner from "./components/Banner";

export default function App() {
  return (
    <div className="flex flex-col gap-2">
      <Banner />
      <ActionBanner />
    </div>
  );
}
