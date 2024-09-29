import { AppProvider } from "@/providers/AppProvider";

export default function Home() {
  return (
    <AppProvider>
      <div>
        Hello World
        <button className="btn btn-primary">Increment</button>
      </div>
    </AppProvider>
  );
}
