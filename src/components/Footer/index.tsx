import { JSX } from "solid-js";
import { version } from "~/../package.json";
import banner from "~/assets/banner.svg";
import IconButton from "~/components/IconButton";
import FooterLink from "./Link";

export default function Navbar(): JSX.Element {
  return (
    <footer class="my-10 px-8 sm:px-16 md:px-20 lg:px-32 flex gap-10 flex-col md:flex-row justify-center items-center md:justify-between">
      <div class="flex flex-col gap-5">
        <img src="" alt="Glatic class="h-6 w-min" />
        <p class="w-96 text-sm">
          An open-source unblocked games website built with simplicity in mind.
        </p>
        <div class="flex gap-5">
          <IconButton
            href="https://discord.gg/C2fbK35Rhg"
            text="Discord"
            type="fa-brands"
            icon="fa-discord"
          />
          <IconButton
            href="https://github.com/"
            text="GitHub"
            type="fa-brands"
            icon="fa-github"
          />
        </div>
        <span class="font-semibold">
          <a
            class="hover:underline hover:text-amber-500 transition-all"
            href={`https://github.com/`}
            target="_blank"
          >
            <i class="fa-regular fa-code-branch"></i> v{version}
          </a>
        </span>
      </div>
      <div class="flex gap-12">
        <div class="flex flex-col gap-2">
          <FooterLink text="Home" href="/" />
          <FooterLink text="Games" href="/games" />
          <FooterLink text="Proxy" href="/web" />
        </div>
        <div class="flex flex-col gap-2">
          <FooterLink text="Partners" href="/partners" />
          <FooterLink text="Settings" href="/options" />
          <FooterLink text="Privacy" href="https://quandaledingle.site/tos" />
        </div>
        <div class="flex flex-col gap-2">
          <FooterLink
            text="Request"
            href="https://docs.google.com/forms/d/e/1FAIpQLScYXyqfCQR4fCzlnpr-zW1rgEw72qf7-xjhR20ZZy0g9elTRA/viewform?embedded=true"
          />
          <FooterLink
            text="Report"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSAYTIV4AtdhmNkA7YpGAZgaIzgOM3U4_Ie997L-ZskxiC5g/viewform?embedded=true"
          />
<script src='https://cdn.jsdelivr.net/npm/@widgetbot/crate@3' async defer>
    new Crate({
        server: '1054391517185327195', // Glatic Games
        channel: '1054391518854660192' // #💬│𝘔𝘢𝘪𝘯-𝘊𝘩𝘢𝘵
    })
</script>
        </div>
      </div>
    </footer>
  );
}
