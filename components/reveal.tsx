'use client';
import { motion } from 'framer-motion';

export default function Reveal({children,className='' ,delay=0}:{children:React.ReactNode;className?:string;delay?:number}){
 return <motion.div initial={{opacity:0,x:-34}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.15}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}} className={className}>{children}</motion.div>
}
