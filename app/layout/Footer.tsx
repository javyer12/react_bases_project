import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className=" bg-black/90 py-8 text-sm">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-4 px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex gap-4">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
