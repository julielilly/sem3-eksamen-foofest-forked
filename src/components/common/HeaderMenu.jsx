import Link from "next/link";

const HeaderMenu = ({ menuOpen }) => {
  return (
    <ul
      className={`fixed flex flex-col gap-xs top-[8rem] right-0 h-full w-2/3 max-w-xs transform transition-transform duration-300 ease-in-out ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <li>
        <Link
          href="/tickets"
          className="halfround-left block w-full font-germania-one text-step-1 menu-labels"
        >
          Tickets
        </Link>
      </li>
      <li>
        <Link
          href="/lineup"
          className="halfround-left block w-full font-germania-one text-step-1 menu-labels"
        >
          Lineup
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="halfround-left block w-full font-germania-one text-step-1 menu-labels"
        >
          About
        </Link>
      </li>
    </ul>
  );
};

export default HeaderMenu;

// normal: "var(--text)",
// "step-1": "var(--step-1)",
// "step-2": "var(--step-2)",
// "step-3": "var(--step-3)",
// title: "var(--title)",
// "big-title": "var(--big-title)",
