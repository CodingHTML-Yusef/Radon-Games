import { JSX } from "solid-js";
import NavbarButton from "./Button";
import IconButton from "~/components/IconButton";
import NavSearchbar from "./Searchbar";

export default function Navbar(): JSX.Element {
  return (
    <nav>
      <div class="flex items-center justify-center md:justify-between w-full sm:px-16 md:px-20 lg:px-32 shadow-2xl">
        <div class="flex gap-5 py-5">
          <a href="/" title="Glatic Games">
            <img
              src="https://cdn.glitch.global/e15741ca-f3f8-4263-af96-21cfc1426961/Screenshot_2023-03-24_12.17.25_PM-removebg-preview.png?v=1679757457760"
              alt="Glatic"
              class="h-6"
            ></img>
          </a>
          <NavbarButton href="/" text="Home" icon="fa-home" />
          <NavbarButton href="/games" text="Games" icon="fa-gamepad-modern" />
          <NavbarButton href="/web" text="Proxy" icon="fa-server" />
        </div>
        <div class="hidden md:flex gap-5 items-center justify-center">
          <NavSearchbar />
          <IconButton
            href="https://discord.gg/CwdfrG4Zyu"
            text="Discord"
            type="fa-brands"
            icon="fa-discord"
          />
          <IconButton href="/options" text="Options" icon="fa-gear" />
        </div>
      </div>
    </nav>
  );
}
