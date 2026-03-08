"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5493442472884?text=Hola%20Wonka!%20Me%20interesa%20un%20proyecto%20web"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] animate-golden-pulse hover:scale-110 transition-transform duration-300 shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.132 6.742 3.052 9.376L1.056 31.2l6.012-1.97A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.35 22.614c-.392 1.106-2.296 2.062-3.178 2.136-.846.07-1.652.402-5.574-1.162-4.726-1.884-7.716-6.724-7.95-7.036-.232-.312-1.898-2.524-1.898-4.814s1.2-3.414 1.626-3.882c.426-.468.93-.586 1.24-.586.31 0 .62.002.89.016.286.014.67-.108.948.724.312.852 1.008 2.868 1.094 3.076.094.208.156.452.032.726-.124.274-.186.444-.372.686-.186.242-.392.54-.558.726-.186.208-.38.434-.164.852.218.418.968 1.6 2.08 2.592 1.43 1.278 2.636 1.674 3.01 1.862.372.186.59.156.808-.094.218-.25.936-1.09 1.186-1.466.25-.374.5-.312.844-.186.344.124 2.186 1.032 2.56 1.22.374.186.624.28.716.434.094.156.094.882-.298 1.99z" />
      </svg>
    </a>
  );
}
