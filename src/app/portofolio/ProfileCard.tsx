'use client'

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import Image from "next/image"; // Import the Next.js Image component
import Profile from "@/app/profile.png";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col items-center mx-auto bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg rounded-xl p-6 w-full max-w-md relative overflow-visible text-center"
    >
      {/* SVG Circle Text */}
      <div className="relative flex justify-center items-center mb-6 mt-9">
        <svg
          className="absolute"
          width="260"
          height="260"
          viewBox="0 0 250 250"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circlePath"
              d="M 125, 125
                 m -100, 0
                 a 100,100 0 1,1 200,0
                 a 100,100 0 1,1 -200,0"
            />
          </defs>
          <text fill="#fff" fontSize="14" fontWeight="bold">
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              HELLO, I&apos;M <tspan fill="#FFD700" fontSize="16" fontWeight="bold">NUZUL TRIAS</tspan>! This is my Curriculum Vitae.
            </textPath>
          </text>
        </svg>

        {/* Avatar with Border and Hover Effect */}
        <motion.div
          className="relative w-40 h-40 rounded-full border-4 border-white overflow-hidden shadow-lg"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Avatar className="w-full h-full">
            <Image
              src={Profile}
              alt="Profile Picture"
              className="w-full h-full object-cover rounded-full"
              width={160} // Set width and height matching your Avatar size
              height={160}
            />
            <AvatarFallback className="bg-blue-700 text-white">NT</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>

      {/* Profile Details */}
      <Card className="bg-blue-800 rounded-xl shadow-lg w-full text-white p-4 mt-6">
        {/* Badges for Skills */}
        <div className="flex justify-center space-x-2 mb-4">
          <Badge className="bg-pink-500 text-white">Fotografer</Badge>
          <Badge className="bg-purple-500 text-white">Editor Animasi</Badge>
        </div>

        {/* Animated Content */}
        <CardContent>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-300 font-serif mb-4 leading-7"
          >
            Saya adalah seorang profesional dengan pengalaman dalam fotografi,
            editing, dan animasi. Saya memiliki passion dalam menciptakan karya
            visual yang menarik dan efektif.
          </motion.p>
          {/* Social Media Icons or Links */}
          <motion.div
            className="flex justify-center space-x-4 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-pink-400 hover:text-pink-600"
            >
              <Linkedin />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-pink-400 hover:text-pink-600"
            >
              <Instagram />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-pink-400 hover:text-pink-600"
            >
              <Facebook />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-pink-400 hover:text-pink-600"
            >
              <Mail />
            </motion.a>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
