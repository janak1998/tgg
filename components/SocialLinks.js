import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.facebook.com/imawanish5",
    src: "/assets/facebook_icon.svg",
    width: 25,
    height: 25,
    alt: "Facebook",
  },
  {
    href: "https://www.instagram.com/nep_thegermanguy",
    src: "/assets/instagram_icon.svg",
    width: 25,
    height: 25,
    alt: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/thegermanguy/",
    src: "/assets/linkedIn_icon.svg",
    width: 25,
    height: 25,
    alt: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/@nep_thegermanguy",
    src: "/assets/youtube_icon.svg",
    width: 35,
    height: 35,
    alt: "YouTube",
  },
  {
    href: "https://www.tiktok.com/@thegermanguy0",
    src: "/assets/tiktok_icon.svg",
    width: 30,
    height: 30,
    alt: "Tiktok",
  },
  {
    href: "https://wa.me/4915736112217",
    src: "/assets/whatsapp_icon.svg",
    width: 30,
    height: 30,
    alt: "Whatsapp",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center gap-8 flex-wrap w-1/2 lg:w-full">
      {socialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={link.src}
            width={link.width}
            height={link.height}
            alt={link.alt}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
