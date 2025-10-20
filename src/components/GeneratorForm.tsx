import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface GeneratorFormProps {
  onGenerate: (titles: string[]) => void;
}

const GeneratorForm = ({ onGenerate }: GeneratorFormProps) => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateTitles = async () => {
    if (!keyword.trim()) {
      toast.error("Please enter a keyword or field of study");
      return;
    }

    setIsLoading(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const categoryText = category ? ` in ${category}` : "";
      const mockTitles = [
        `AI-Driven ${keyword} Analysis System${categoryText}`,
        `Smart ${keyword} Management Platform Using Machine Learning`,
        `Innovative ${keyword} Solution with Predictive Analytics`,
        `Next-Generation ${keyword} Framework${categoryText}`,
        `Automated ${keyword} Optimization Tool`,
        `${keyword} Integration Platform with Real-Time Processing`,
      ];
      
      onGenerate(mockTitles);
      setIsLoading(false);
      toast.success("Generated 6 unique project titles!");
    }, 2000);
  };

  return (
    <section id="generate" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Start Generating
          </h2>
          <p className="text-xl text-muted-foreground">
            Enter your project field and let AI create amazing titles for you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-2xl shadow-card p-8 space-y-6"
        >
          <div className="space-y-2">
            <label htmlFor="keyword" className="text-sm font-medium text-foreground">
              Project Field or Keywords
            </label>
            <Input
              id="keyword"
              type="text"
              placeholder="e.g., Healthcare AI, E-commerce, Mobile App..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="h-12 text-base rounded-xl"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium text-foreground">
              Category (Optional)
            </label>
            <Select value={category} onValueChange={setCategory} disabled={isLoading}>
              <SelectTrigger className="h-12 rounded-xl">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="mobile-app">Mobile Application</SelectItem>
                <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                <SelectItem value="data-science">Data Science</SelectItem>
                <SelectItem value="iot">Internet of Things</SelectItem>
                <SelectItem value="blockchain">Blockchain</SelectItem>
                <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <motion.div
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
          >
            <Button
              onClick={generateTitles}
              disabled={isLoading}
              className="w-full h-14 text-lg rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Titles
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GeneratorForm;
