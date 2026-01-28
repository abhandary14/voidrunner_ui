import { CustomCardProps } from "@/types";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  Icon,
  linkUrl,
}) => {
  return (
    <div className="group relative h-full max-w-[360px] mx-auto mt-10 transition-transform duration-300 hover:-translate-y-2 glow-container p-[1px]">
      <div className="relative h-full bg-card border border-white/10 p-1 clip-path-octagon">
        <div className="h-full bg-background p-8 flex flex-col items-start clip-path-octagon">
          <div className="mb-6 p-3 bg-primary/10 border border-primary/50 relative">
            <div className="absolute top-0 right-0 -mt-1 -mr-1 w-2 h-2 bg-primary"></div>
            <div className="absolute bottom-0 left-0 -mb-1 -ml-1 w-2 h-2 bg-primary"></div>
            <Icon className="w-8 h-8 text-primary" />
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-wider">{title}</h3>

          <p className="text-muted-foreground mb-8 leading-relaxed font-light flex-grow">
            {description}
          </p>

          <Link
            href={linkUrl}
            className="mt-auto inline-flex items-center text-primary font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group/link"
          >
            <span className="mr-2">View Protocol</span>
            <BsArrowRightCircleFill
              className="transform group-hover/link:translate-x-1 transition-transform duration-300"
              size={16}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
