import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   define: {
//     "import.meta.env.ENV_VARIABLE": JSON.stringify(process.env),
//   },
// });

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      "import.meta.env.ENV_VARIABLE": JSON.stringify(env),
      // 'process.env.YOUR_BOOLEAN_VARIABLE': env,
      // If you want to exposes all env variables, which is not recommended
      // 'process.env': env
    },
  };
});
