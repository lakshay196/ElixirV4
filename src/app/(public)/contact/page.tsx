export const metadata = {
  title: "Contact | Elixir",
  description: "Reach the Elixir Tech Community by email or socials.",
};

import Container from "@/components/container";
import PageHeader from "@/components/PageHeader";

const CONTACT_EMAIL = "hello@elixirtech.community";

const socials = [
  {
    label: "X (Twitter)",
    href: "https://x.com/theelixirtech",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/elixir-tech-community/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4.983 3.5c0 1.381-1.142 2.5-2.549 2.5C1.026 6 0 4.881 0 3.5 0 2.12 1.026 1 2.434 1s2.549 1.12 2.549 2.5zM.24 8h4.39v15.75H.24V8zM8.34 8h4.206v2.153h.06c.586-1.11 2.018-2.285 4.156-2.285 4.444 0 5.265 2.9 5.265 6.671v9.211h-4.39v-8.166c0-1.949-.035-4.457-2.716-4.457-2.72 0-3.137 2.127-3.137 4.325v8.298H8.34V8z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/vaibhavxtripathi/ElixirV4",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.578 0-.285-.01-1.041-.016-2.044-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.009-.322 3.302 1.23.958-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.48 5.921.431.372.824 1.102.824 2.222 0 1.606-.014 2.901-.014 3.296 0 .319.192.694.801.576C20.565 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="pt-32 sm:pt-36 pb-12 sm:pb-18">
      <Container>
        <PageHeader title="Contact" className="mb-6 sm:mb-8 md:mb-10" />
        <div className="max-w-xl mx-auto sm:mx-0 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="text-sm sm:text-base text-white/70">
            Have a question or want to collaborate? Reach out.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-block text-base sm:text-lg font-medium text-white hover:text-white/80 transition-colors break-all"
          >
            {CONTACT_EMAIL}
          </a>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors px-2 py-1.5 rounded-md hover:bg-white/5"
              >
                {social.icon}
                <span className="text-sm">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
