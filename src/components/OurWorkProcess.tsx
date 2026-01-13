"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface GrowthData {
  month: number;
  value: number;
}

interface CompanyLogoProps {
  name: string;
}

const growthData: GrowthData[] = [
  { month: 0, value: 0 },
  { month: 1, value: 2 },
  { month: 2, value: 4 },
  { month: 3, value: 4.5 },
  { month: 4, value: 5.2 },
  { month: 5, value: 6.8 },
  { month: 6, value: 7.9 },
  { month: 7, value: 3 },
  { month: 8, value: 5 },
  { month: 9, value: 7 },
  { month: 10, value: 8.5 },
  { month: 11, value: 9.5 },
  { month: 12, value: 10 },
];

const CompanyLogo = ({ name }: CompanyLogoProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.7 }}
    whileHover={{ opacity: 1 }}
    className="text-white/70 font-medium">
    {name}
  </motion.div>
);

const InvestmentInterface = () => {
  const [investmentAmount, setInvestmentAmount] = useState<number>(1000);
  const [isFunding, setIsFunding] = useState<boolean>(false);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-red-500/10 via-zinc-900/90 to-zinc-900/80 rounded-lg p-6 overflow-hidden backdrop-blur-lg border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-transparent animate-pulse" />
      <div className="space-y-6 relative z-10">
        <motion.div
          className="h-32 bg-red/5 rounded-lg flex flex-row lg:py-10 py-0 lg:flex-col items-center justify-between px-4 backdrop-blur-sm"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}>
          <span className="text-white/70">Current Balance</span>
          <span className="text-white font-bold text-xl">$10,000</span>
        </motion.div>
      </div>
    </div>
  );
};

export default function OurWorkProcess() {
  return (
    <div className="w-full p-4 sm:p-6 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">

        {/* 01 ONE CARD  */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-3 bg-zinc-900/50 border-zinc-800">
          <CardContent className="p-6 space-y-6">
            <div className="flex justify-left cursor-pointer gap-3 items-left">
              <CompanyLogo name="RETAIL" />
              <CompanyLogo name="STARTUPS" />
              <CompanyLogo name="DIGITAL BRANDS" />
            </div>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-semibold mb-2">
                Serving growing brands & startups
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-zinc-400">
                Working with early-stage businesses, retail brands, and founders to build clear visual systems and digital presence that support real growth.
              </motion.p>
            </div>
          </CardContent>
        </Card>

        {/* 02 SECOND CARD  */}

        <Card className="col-span-1 sm:col-span-2 lg:col-span-3 bg-zinc-900/50 border-zinc-800">
          <CardContent className="p-6 space-y-6">
            <div className="flex justify-left cursor-pointer gap-5 items-center">
              <CompanyLogo name="DESIGN" />
              <CompanyLogo name="DEVELOPMENT" />
              <CompanyLogo name="STRATEGY" />
            </div>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-semibold mb-2">
                Founder-led creative studio
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-zinc-400">
                EDAQAI is built and led by a multidisciplinary creative with hands-on experience in design, development, and digital strategy.
              </motion.p>
            </div>
          </CardContent>
        </Card>


        {/* 03 THIRD CARD  */}
        <Card className="col-span-1 sm:col-span-2 bg-zinc-900/50 border-zinc-800">
          <CardContent className="p-6 items-start justify-start mx-auto space-y-6">
            <div className="h-48 w-auto md:pr-6 lg:pr-8 xl:pr-12 justify-start mx-auto items-start">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#FF312E"
                    strokeWidth={2}
                    dot={false}
                  />
                  <XAxis
                    dataKey="month"
                    stroke="#666"
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis stroke="#666" axisLine={false} tickLine={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-semibold mb-2">
                Bootstrapped & client-funded
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-zinc-400">
                Built independently through client work, focusing on sustainability, quality delivery, and long-term relationships.
              </motion.p>
            </div>
          </CardContent>
        </Card>


        {/* 04 Forth CARD  */}
        <Card className="col-span-1 sm:col-span-2 bg-zinc-900/50 border-zinc-800">
          <CardContent className="p-6 space-y-6">
            <div className="h-48 w-full">
              <DotLottieReact
                src="https://lottie.host/1eb9b944-9046-4f01-a623-0d6589cbea10/2g2h7ux242.lottie"
                loop
                autoplay
              />
            </div>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-semibold mb-2">
                Working with international clients
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-zinc-400">
                Collaborating remotely with clients across regions, delivering design systems and marketing assets for global use.
              </motion.p>
            </div>
          </CardContent>
        </Card>


        {/* 05 Fifth CARD  */}
        <Card className="col-span-1 sm:col-span-2 bg-zinc-900/50 border-zinc-800">
          <CardContent className="p-6 space-y-6">
            <div className="h-48 w-full">
              <InvestmentInterface />
            </div>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-semibold mb-2">
                Building toward real products
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-zinc-400">
                Today we deliver creative services. Tomorrow, we build digital tools and physical products designed for creators and modern workspaces.
              </motion.p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}