'use client'
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

export default function SkillSection() {
  const skills = [
    { name: "Fotografer", level: 80 },
    { name: "Editing", level: 70 },
    { name: "Animasi", level: 85 },
    { name: "Word", level: 60 },
    { name: "Excel", level: 75 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="my-4 p-4 bg-gradient-to-r from-blue-900 to-purple-700 rounded-xl shadow-md w-full max-w-md mx-auto"
    >
      <h3 className="text-xl font-semibold text-pink-400 mb-4 font-serif">Kemampuan</h3>
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="mb-6"
        >
          <label className="block text-sm font-medium text-pink-400 mb-1 font-serif">
            {skill.name}
          </label>
          <Progress value={skill.level} className="mb-2 bg-blue-800" />
        </motion.div>
      ))}
    </motion.div>
  );
}
