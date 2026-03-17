"use client";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { HiPaperAirplane } from "react-icons/hi";
import { useEffect } from "react";
import { trackEvent } from "@/utils/analytics";
import { Button, H2, Input, Label, Textarea } from "@/components/ui";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mwprjrga");

  useEffect(() => {
    if (!state.succeeded) return;

    trackEvent("contact_form_submit_success", {
      form: "formspree",
    });
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <motion.div
          className="text-center p-10 rounded-2xl shadow-lg bg-white/75 dark:bg-gray-900/70 backdrop-blur-md border border-white/50 dark:border-gray-700/60"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.h1
            className="ui-h2 text-green-400 mb-4"
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
      className="min-h-[85vh] flex flex-col items-center justify-center px-6"
    >
      <motion.div
        className="w-full max-w-lg section-surface p-10 rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <H2 className="text-center mb-8">
          Hablemos de tu proyecto
        </H2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Label htmlFor="name" className="block mb-1.5">
              Nombre
            </Label>
            <Input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Tu nombre completo"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Label htmlFor="email" className="block mb-1.5">
              Correo electrónico
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              required
              placeholder="nombre@correo.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Label htmlFor="message" className="block mb-1.5">
              Mensaje
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              className="resize-none"
              placeholder="Cuéntame un poco sobre tu proyecto..."
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button type="submit" disabled={state.submitting} className="w-full">
              {state.submitting ? "Enviando..." : "Enviar mensaje"}
              {!state.submitting && <HiPaperAirplane className="text-lg rotate-45" />}
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
}
