import {FaComment, FaFacebookF, FaRegBookmark, FaWhatsapp, FaXTwitter} from 'react-icons/fa6';
import {FiLink} from 'react-icons/fi';

const icons: Record<string, React.ComponentType<{className?: string}>> = {
  facebook: FaFacebookF,
  x: FaXTwitter,
  whatsapp: FaWhatsapp,
  link: FiLink,
  comments: FaComment,
  bookmark: FaRegBookmark,
};

export default function ShareBar({
  actions,
  className = '',
}: {
  actions: readonly string[];
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-end gap-3 ${className}`}>
      {actions.map((name) => {
        const Icon = icons[name];
        if (!Icon) return null;
        return (
          <button key={name} type="button" aria-label={name} className="size-4 cursor-pointer">
            <Icon className="size-full" />
          </button>
        );
      })}
    </div>
  );
}
