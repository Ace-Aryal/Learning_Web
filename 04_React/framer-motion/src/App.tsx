import { motion } from "motion/react";
function App() {
  return (
    <motion.div className="grid place-items-center bg-zinc-800 h-screen w-screen">
      <motion.div
        animate={{ rotate: 360 }}
        id="box"
        className="h-100 w-100 bg-blue-500"
      ></motion.div>
    </motion.div>
  );
}

export default App;
