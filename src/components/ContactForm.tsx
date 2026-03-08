"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function ContactForm({ id }: { id?: string }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id={id} className="py-20 px-6 max-w-2xl mx-auto">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-4xl sm:text-5xl text-wonka-gold text-glow-gold text-center mb-4">
          Hablemos
        </h2>
        <p className="font-body text-sm text-wonka-cream-dark/70 text-center mb-14">
          Contame qué tenés en mente y te respondo en menos de 24 horas.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl bg-wonka-chocolate border border-wonka-chocolate-light p-8"
        >
          <div>
            <label
              htmlFor="name"
              className="block font-body text-sm text-wonka-cream-dark mb-1"
            >
              Nombre
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg bg-wonka-purple-dark border border-wonka-purple-light px-4 py-3 font-body text-sm text-wonka-cream placeholder:text-wonka-cream-dark/40 outline-none focus:border-wonka-gold transition-colors"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-body text-sm text-wonka-cream-dark mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg bg-wonka-purple-dark border border-wonka-purple-light px-4 py-3 font-body text-sm text-wonka-cream placeholder:text-wonka-cream-dark/40 outline-none focus:border-wonka-gold transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-body text-sm text-wonka-cream-dark mb-1"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg bg-wonka-purple-dark border border-wonka-purple-light px-4 py-3 font-body text-sm text-wonka-cream placeholder:text-wonka-cream-dark/40 outline-none focus:border-wonka-gold transition-colors resize-none"
              placeholder="Contame qué necesitás..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 rounded-lg font-heading font-bold text-lg text-wonka-purple-dark bg-gradient-to-r from-wonka-gold via-wonka-gold-light to-wonka-gold animate-shimmer disabled:opacity-60 hover:shadow-[0_0_25px_rgba(212,168,67,0.5)] transition-shadow cursor-pointer"
          >
            {status === "loading" ? "Enviando..." : "Enviar"}
          </button>

          {status === "success" && (
            <p className="text-center font-body text-sm text-green-400">
              Listo, te escribo pronto.
            </p>
          )}

          {status === "error" && (
            <p className="text-center font-body text-sm text-red-400">
              Algo falló. Probá de nuevo.
            </p>
          )}

          <p className="text-center font-body text-sm text-wonka-cream-dark/60 pt-2">
            O{" "}
            <a
              href="https://wa.me/5493442472884?text=Hola%20Wonka!%20Me%20interesa%20un%20proyecto%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="text-wonka-gold hover:underline"
            >
              mandame un WhatsApp
            </a>
          </p>
        </form>
      </ScrollReveal>
    </section>
  );
}
