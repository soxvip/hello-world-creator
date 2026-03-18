import bananaImg from "@/assets/banana.png";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <span className="mb-4 text-4xl font-bold text-white">_Sox</span>
      <img 
        src={appleImg} 
        alt="Maçã flutuante" 
        className="w-48 animate-bounce"
      />
    </div>
  );
};

export default Index;
