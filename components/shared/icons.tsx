import { FaSlack, FaAws, FaLinkedin, FaCodepen } from "react-icons/fa";
import {
  SiX,
  SiYoutube,
  SiTwitch,
  SiDiscord,
  SiTelegram,
  SiWhatsapp,
  SiReddit,
  SiMastodon,
  SiBluesky,
  SiThreads,
  SiTiktok,
  SiMedium,
  SiDevdotto,
  SiHashnode,
  SiStackoverflow,
  SiDribbble,
  SiBehance,
  SiFigma,
  SiNotion,
  SiSpotify,
  SiApple,
  SiGoogle,
  SiFacebook,
  SiInstagram,
  SiGithub,
  SiDocker,
  SiGit,
  SiGraphql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJest,
  SiZap,
  SiPython,
  SiXiaohongshu,
  SiMysql,
  SiRedis,
  SiSpring,
  SiPhp,
  SiLaravel,
  SiRubyonrails,
  SiCakephp,
  SiJavascript,
  SiBootstrap,
  SiMongodb,
  SiGitlab,
  SiJira,
  SiApache,
  SiStimulus,
} from "react-icons/si";
import {
  LuAtSign,
  LuBookOpen,
  LuCalendar,
  LuCamera,
  LuCode,
  LuCoffee,
  LuFilm,
  LuGlobe,
  LuKeyboard,
  LuLink,
  LuMail,
  LuMapPin,
  LuMessageSquare,
  LuMic,
  LuMountain,
  LuPalette,
  LuPenTool,
  LuPhone,
  LuSend,
  LuUsers,
  LuWorkflow,
  LuWrench,
} from "react-icons/lu";
import { IconBaseProps, IconType } from "react-icons";
import { ComponentType } from "react";
import { TbApi } from "react-icons/tb";
import { DiJava, DiScrum } from "react-icons/di";
import { captialize } from "@/lib/string";

export type IconComponent = ComponentType<IconBaseProps>;

// All available icons in one place
const iconsBase: Record<string, IconType> = {
  // Contact icons
  Email: LuMail,
  Phone: LuPhone,
  Website: LuGlobe,
  Message: LuMessageSquare,
  Send: LuSend,
  At: LuAtSign,
  Location: LuMapPin,
  Calendar: LuCalendar,
  Link: LuLink,

  // Social icons
  GitHub: SiGithub,
  LinkedIn: FaLinkedin,
  Twitter: SiX,
  X: SiX,
  Facebook: SiFacebook,
  Instagram: SiInstagram,
  YouTube: SiYoutube,
  Twitch: SiTwitch,
  Discord: SiDiscord,
  Telegram: SiTelegram,
  WhatsApp: SiWhatsapp,
  Slack: FaSlack,
  Reddit: SiReddit,
  Mastodon: SiMastodon,
  Bluesky: SiBluesky,
  Threads: SiThreads,
  TikTok: SiTiktok,
  Medium: SiMedium,
  DevTo: SiDevdotto,
  Hashnode: SiHashnode,
  StackOverflow: SiStackoverflow,
  CodePen: FaCodepen,
  Dribbble: SiDribbble,
  Behance: SiBehance,
  Figma: SiFigma,
  Notion: SiNotion,
  Spotify: SiSpotify,
  Apple: SiApple,
  Google: SiGoogle,
  RedNote: SiXiaohongshu,

  // Technology icons
  Java: DiJava,
  Python: SiPython,
  Typescript: SiTypescript,
  React: SiReact,
  Nextjs: SiNextdotjs,
  Nodejs: SiNodedotjs,
  Postgresql: SiPostgresql,
  Graphql: SiGraphql,
  Docker: SiDocker,
  AWS: FaAws,
  Tailwindcss: SiTailwindcss,
  Git: SiGit,
  API: TbApi,
  Jest: SiJest,
  MySQL: SiMysql,
  Redis: SiRedis,
  Spring: SiSpring,
  PHP: SiPhp,
  Laravel: SiLaravel,
  RubyOnRails: SiRubyonrails,
  CakePHP: SiCakephp,
  JavaScript: SiJavascript,
  Bootstrap: SiBootstrap,
  MongoDB: SiMongodb,
  GitLab: SiGitlab,
  Jira: SiJira,
  Apache: SiApache,
  Stimulus: SiStimulus,

  // Others
  Scrum: DiScrum,
  Workflow: LuWorkflow,
  Speed: SiZap,
  Mic: LuMic,
  Write: LuPenTool,
  Teach: LuUsers,
  Mountain: LuMountain,
  Camera: LuCamera,
  Coffee: LuCoffee,
  Keyboard: LuKeyboard,
  Book: LuBookOpen,
  Tools: LuWrench,
  Design: LuPalette,
  code: LuCode,
  movie: LuFilm,
};

export const Icons: Record<string, IconComponent> = new Proxy(iconsBase, {
  get(target, prop: string) {
    const key = Object.keys(target).find(
      (k) => k.toLowerCase() === prop.toLowerCase()
    );
    if (key) {
      const IconComponent = target[key];
      const wrapper = ({ className, ...rest }: IconBaseProps) => (
        <IconComponent className={className} {...rest} />
      );
      wrapper.diaplayName = `${captialize(key)}Icon`;
      return wrapper;
    }
    // Fallback: render first letter of the prop in uppercase
    return ({ className }: IconBaseProps) => (
      <span className={className}>{prop.charAt(0).toUpperCase()}</span>
    );
  },
});
