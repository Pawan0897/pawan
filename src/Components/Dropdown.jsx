import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Dropdown() {
  return (
    <div className="flex   w-full justify-start  text-neutral-200 md:justify-center">
      <Tabs />
    </div>
  );
}

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full    ${
        selected === tab ? "  text-neutral-100" : "text-red-700"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform  ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_10px)]  rounded-lg border-2 border-neutral-600  bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 "
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => <div className="absolute -top-[24px] left-0 right-0 " />;

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border-1 border-neutral-600"
    />
  );
};

const Blog = () => {
  return (
    <div className=" ">
      <div className="ps-2 pe-3 py-1 gap-2">
         {/* ************************** Todolist */}
        <Link
          to="/calender"
          className={`nav-link text-gray-300 hover:text-red-700 ${
            location.pathname === "/calender" ? " text-red-700" : ""
          }`}
        >
          TodoList
        </Link>
        {/* ************************** calculater */}
        <Link
          to="/calculater"
          className={`nav-link text-gray-300 hover:text-red-700 ${
            location.pathname === "/calculater" ? " text-red-700" : ""
          }`}
        >
          Calculater
        </Link>
         {/* ************************** stripr */}
        <Link
          to="/stripe"
          className={`nav-link text-gray-300 hover:text-red-700 ${
            location.pathname === "/stripe" ? " text-red-700" : ""
          }`}
        >
          Stripe
        </Link>
         {/* ************************** form */}
        <Link
          to="/form"
          className={`nav-link text-gray-300 hover:text-red-700 ${
            location.pathname === "/form" ? " text-red-700" : ""
          }`}
        >
          Form
        </Link>
      </div>
    </div>
  );
};

const TABS = [
  {
    title: "Tasks",
    Component: Blog,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
