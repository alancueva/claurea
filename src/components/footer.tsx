import { Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/claudiaatello/",
      color: "hover:text-pink-600",
    },
  ];

  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800">
      <div className="flex justify-center gap-6 mb-6">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-stone-500 transition-all duration-300 ${social.color} hover:scale-110`}
            aria-label={social.name}
          >
            <social.icon size={24} strokeWidth={1.5} />
          </a>
        ))}
      </div>
      <div className="text-center">
        <div>
          <a
            className="flex-none text-xl font-semibold text-black dark:text-white"
            href="#"
            aria-label="Claudia Cueva"
          >
            Claudia Cueva
          </a>
        </div>

        <div className="mt-2">
          <p className="text-gray-500 dark:text-neutral-500">
            Belleza natural, consciencia sostenible.
          </p>
          <p className="text-gray-500 dark:text-neutral-500">
            © {currentYear} Claurea.
          </p>
        </div>
      </div>
    </footer>
  );
}
