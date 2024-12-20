'use client'

import { Button, Card } from "@nextui-org/react"
import { motion } from "framer-motion"
import Image from "next/image"
import { GenericProps } from "./HeroSection"

export default function PokerSection({currentUser, handleOpen, setActiveTab}:GenericProps) {
  const handleOpenModal = () => {
    handleOpen();
    if (currentUser) {
      setActiveTab("deposit");
    } else {
      setActiveTab("register");
    }
  };

  return (
    <Card className="bg-gradient-to-r from-[#1e283f] to-[#0f1627] overflow-hidden rounded-xl mb-8 p-4 relative">
      <div className="flex justify-between items-center z-[2] px-4">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-white min-w-max">
              Poker
            </h2>
          </div>
            <p className="text-gray-400 mb-6">Ven, juega y gana</p>
            <Button
              size="lg"
              onClick={handleOpenModal}
              className="bg-purple-600 text-white font-bold rounded-full px-8"
            >
              Obtener bono
            </Button>
          </motion.div>
        </div>
      {/* <canvas data-v-1e11f167="" className="promo-card__pic" width="256" height="256"></canvas> */}
      </div>
      <Image
        className="absolute right-0 z-[1]"
        src={'https://v1.bundlecdn.com/img/home-poker-banner-bg.daea5f5cb-600.png'}
        alt="asdasd"
        width={600}
        height={400}
      />
    </Card>
  )
}

