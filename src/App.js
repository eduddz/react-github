import { Layout } from "./components/layout";
import { Profile } from "./components/profile";
import { Repositories } from "./components/repositories";

export function App() {
  return (
    <main>
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
    </main>
  );
}
