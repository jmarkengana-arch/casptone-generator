import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GeneratorForm from "@/components/GeneratorForm";
import TitleCard from "@/components/TitleCard";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  const [generatedTitles, setGeneratedTitles] = useState<string[]>([]);

  const handleGenerate = (titles: string[]) => {
    setGeneratedTitles(titles);
    
    // Smooth scroll to results
    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <GeneratorForm onGenerate={handleGenerate} />
      
      {generatedTitles.length > 0 && (
        <section id="results" className="py-20 px-4 bg-accent/20">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Your Generated Titles
              </h2>
              <p className="text-xl text-muted-foreground">
                Pick your favorite or generate more options
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generatedTitles.map((title, index) => (
                <TitleCard
                  key={index}
                  title={title}
                  description="AI-generated based on your input"
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
