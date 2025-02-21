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
      bgColor: "bg-white",
    },
    {
      name: "Pinterest",
      url: "https://pin.it/4Gel7vVTA",
      icon: "/social/pinterest.svg",
      bgColor: "bg-white",
    },
    {
      name: "Snapchat",
      url: "https://www.snapchat.com/add/qfd66631317?share_id=opCFc7WWDrM&locale=en-GB",
      icon: FaSnapchatGhost,
      bgColor: "bg-[#FFFC00]",
      iconColor: "text-black",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1AAGc8q9wD/",
      icon: "/social/facebook.svg",
      bgColor: "bg-white",
    },
  ];

  return (
    <div className="fixed left-6 bottom-6 z-40 flex flex-col gap-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow ${social.bgColor}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {typeof social.icon === "string" ? (
            <Image
              src={social.icon}
              alt={social.name}
              width={24}
              height={24}
              className="w-6 h-6"
            />
          ) : (
            <social.icon
              className={`w-6 h-6 ${social.iconColor || "text-gray-700"}`}
            />
          )}
        </motion.a>
      ))}
    </div>
  );
}
