import bananaImg from "@/assets/banana.png";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <img 
        src={bananaImg} 
        alt="Banana flutuante" 
        className="w-48 animate-bounce"
      />
    </div>
  );
};

export default Index;
