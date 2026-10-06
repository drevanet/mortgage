'use client';
import { motion } from 'framer-motion';

export default function LoadingScreen(){
  return <motion.div initial={{opacity:1}} animate={{opacity:0,pointerEvents:'none'}} transition={{duration:.7,delay:.35}} className="fixed inset-0 z-[100] grid place-items-center bg-[#071a31]">
    <motion.div initial={{scale:.8,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:.55,ease:'easeOut'}} className="text-center text-white">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#f1b900] text-2xl font-black text-[#071a31]">P</div>
      <p className="mt-4 text-xs font-black uppercase tracking-[.28em] text-white/60">The Preferred Mortgage</p>
      <div className="mx-auto mt-5 h-1 w-28 overflow-hidden rounded-full bg-white/10"><motion.div initial={{x:'-100%'}} animate={{x:'0%'}} transition={{duration:.8,ease:'easeInOut'}} className="h-full bg-[#f1b900]"/></div>
    </motion.div>
  </motion.div>
}
