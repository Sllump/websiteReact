export const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
}

export const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
