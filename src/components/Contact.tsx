"use client";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { HiPaperAirplane } from "react-icons/hi";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mwprjrga");

  if (state.succeeded) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <motion.div
          className="text-center p-10 rounded-2xl shadow-lg bg-white/70 dark:bg-gray-900/70 backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl font-semibold text-green-600 mb-4"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            ¡Gracias por tu mensaje!
          </motion.h1>
          <motion.p
            className="text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Te responderé lo antes posible 🚀
          </motion.p>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="min-h-[85vh] flex flex-col items-center justify-center 
      bg-gradient-to-b from-gray-50 via-white to-gray-100 
      dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 
      border-t border-gray-200/70 dark:border-gray-700/40 px-6"
    >
      <motion.div
        className="w-full max-w-lg bg-white/80 dark:bg-gray-900/70 p-10 rounded-2xl shadow-2xl backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
          Hablemos de tu proyecto
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div whileHover={{ scale: 1.02 }}>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
            >
              Nombre
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent 
              text-gray-900 dark:text-white placeholder-gray-400 
              focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 outline-none transition-all"
              placeholder="Tu nombre completo"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent 
              text-gray-900 dark:text-white placeholder-gray-400 
              focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 outline-none transition-all"
              placeholder="nombre@correo.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent 
              text-gray-900 dark:text-white placeholder-gray-400 
              focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 outline-none transition-all resize-none"
              placeholder="Cuéntame un poco sobre tu proyecto..."
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </motion.div>

          <motion.button
            type="submit"
            disabled={state.submitting}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-2 py-3 
            bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 
            text-white font-semibold rounded-lg shadow-md hover:shadow-xl 
            transition-all duration-300 disabled:opacity-50"
          >
            {state.submitting ? "Enviando..." : "Enviar mensaje"}
            {!state.submitting && <HiPaperAirplane className="text-lg rotate-45" />}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
