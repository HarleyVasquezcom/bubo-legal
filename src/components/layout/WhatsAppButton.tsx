import { WhatsappIcon } from '@/components/ui/SocialIcons';
import { whatsappUrl } from '@/lib/site';

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black-900 shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-110"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}
