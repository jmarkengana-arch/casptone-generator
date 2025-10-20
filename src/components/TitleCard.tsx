import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Copy, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface TitleCardProps {
  title: string;
  description: string;
  index: number;
}

const TitleCard = ({ title, description, index }: TitleCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(title);
    toast.success("Title copied to clipboard!");
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? "Removed from favorites" : "Added to favorites");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 p-6 border border-border"
    >
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground leading-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
        
        <div className="flex gap-3 pt-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1"
          >
            <Button
              onClick={handleCopy}
              variant="default"
              size="sm"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleFavorite}
              variant="outline"
              size="sm"
              className={`rounded-lg ${isFavorite ? 'text-secondary border-secondary' : ''}`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TitleCard;
