import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

function Card({ data, reference, onDelete }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.5}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] text-white px-8 py-10 bg-slate-900/90 overflow-hidden"
    >
      <p className="text-lg mt-5 leading-tight">{data.desc}</p>
      <Icon
        icon="fluent:delete-12-filled"
        className="absolute bottom-4 right-4 text-3xl cursor-pointer"
        onClick={onDelete} // Call onDelete when the icon is clicked
      />
    </motion.div>
  );
}

export default Card;
