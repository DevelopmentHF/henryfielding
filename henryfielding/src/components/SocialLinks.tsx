import { Github, Linkedin, Gamepad} from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex gap-2 p-4">
      <a href="https://github.com/DevelopmentHF" target="_blank" rel="noopener noreferrer">
        <Github className="w-6 h-6  hover:text-white" />
      </a>
      <a href="https://www.linkedin.com/in/henryfielding-aus/" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-6 h-6  hover:text-white" />
      </a>
      <a href="https://developmenthf.itch.io/" target="_blank" rel="noopener noreferrer">
        <Gamepad className="w-6 h-6 hover:text-white"/>
      </a>
    </div>
  );
}