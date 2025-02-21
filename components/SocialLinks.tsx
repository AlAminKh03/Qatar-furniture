"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaSnapchatGhost } from "react-icons/fa";

export function SocialLinks() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/qatar_furniture_decor?igsh=MW5idWFsNmx0aGxrdw==",
      icon: "/social/instagram.svg",
    },
    {
      name: "Pinterest",
      url: "https://pin.it/4Gel7vVTA",
      icon: "/social/pinterest.svg",
    },
    {
      name: "Snapchat",
      url: "https://www.snapchat.com/add/qfd66631317?share_id=opCFc7WWDrM&locale=en-GB",
      icon: "/social/snapchat.svg",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1AAGc8q9wD/",
      icon: "/social/facebook.svg",
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow ${
            social.name === "Snapchat"
              ? "bg-[#FFFC00]" // Snapchat's yellow background
              : "bg-white"
          }`}
          initial={{ scale: 0, x: -50 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {social.name !== "Snapchat" ? (
            <Image
              src={social.icon}
              alt={social.name}
              width={24}
              height={24}
              className={`w-6 h-6`}
            />
          ) : (
            <FaSnapchatGhost className="w-6 h-6 text-center text-black" />
          )}
        </motion.a>
      ))}
    </div>
  );
}
