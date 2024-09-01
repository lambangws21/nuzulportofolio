'use client'

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react"; // Import Icons

export default function ExperienceSection() {
  const experiences = [
    {
      period: "2019-2021",
      role: "Fotografer",
      description: "Mengelola dan mengedit foto untuk berbagai acara.",
    },
    {
      period: "2021-2023",
      role: "Editor Animasi",
      description: "Mengedit video animasi untuk media sosial.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="my-4 p-4 bg-gradient-to-r from-blue-900 to-purple-700 rounded-xl shadow-md w-full max-w-md mx-auto"
    >
      <h3 className="text-xl font-semibold text-pink-400 mb-4 font-serif">Pengalaman</h3>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="mb-4"
        >
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="cursor-pointer shadow-lg w-full bg-blue-800 text-white">
                <CardHeader className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-pink-400 font-serif">{exp.period}</h4>
                    <p className="text-sm font-medium text-gray-200 font-serif">{exp.role}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Linkedin className="text-pink-400" />
                    <Mail className="text-pink-400" />
                  </div>
                </CardHeader>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-gray-300 font-serif"
              >
                {exp.description}
              </motion.p>
            </HoverCardContent>
          </HoverCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
