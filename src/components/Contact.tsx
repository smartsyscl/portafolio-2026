"use client";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mwprjrga"); // 

  if (state.succeeded) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <motion.div
          className="text-center p-8 rounded-xl shadow-lg bg-white/70 dark:bg-gray-900/70 backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-semibold text-green-600 mb-4">
            ¡Gracias por tu mensaje! 🙌
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Te responderé lo antes posible.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="min-h-[85vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 px-6"
    >
      <motion.div
        className="w-full max-w-lg bg-white/70 dark:bg-gray-900/70 p-8 rounded-2xl shadow-lg backdrop-blur-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Hablemos de tu proyecto
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Nombre
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <motion.button
            type="submit"
            disabled={state.submitting}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {state.submitting ? "Enviando..." : "Enviar mensaje"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
