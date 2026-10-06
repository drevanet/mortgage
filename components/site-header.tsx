'use client';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const links=[['Home','/'],['Services','/services'],['Blog','/blog'],['Events','/events'],['About','/about'],['Contact','/contact']];
export default function SiteHeader(){
 const [open,setOpen]=useState(false);
 return <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
  <div className="container-wide flex h-[76px] items-center justify-between gap-5">
   <Link href="/" className="flex items-center gap-3" onClick={()=>setOpen(false)}><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#071a31] font-black text-[#f1b900]">P</span><span className="leading-none"><strong className="block text-[15px] font-black tracking-tight text-[#071a31]">The Preferred</strong><small className="block text-[10px] font-bold uppercase tracking-[.2em] text-slate-400">Mortgage</small></span></Link>
   <nav className="hidden items-center gap-7 lg:flex">{links.map(([label,href])=><Link key={href} href={href} className="text-sm font-bold text-slate-600 transition hover:text-[#071a31]">{label}</Link>)}</nav>
   <div className="hidden lg:block"><Link href="/contact?booking=true" className="btn-primary">Book a Free Call <ArrowUpRight size={16}/></Link></div>
   <button aria-label="Open menu" className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 lg:hidden" onClick={()=>setOpen(v=>!v)}>{open?<X size={20}/>:<Menu size={20}/>}</button>
  </div>
  {open&&<div className="border-t border-slate-100 bg-white p-5 lg:hidden"><nav className="container-wide grid gap-2">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)} className="rounded-xl px-4 py-3 font-bold hover:bg-slate-50">{label}</Link>)}<Link href="/contact?booking=true" onClick={()=>setOpen(false)} className="btn-primary mt-2">Book a Free Call</Link></nav></div>}
 </header>
}
