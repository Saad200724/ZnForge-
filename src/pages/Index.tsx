import meowImage from '@assets/meow_1766807438157.png';
import sciventureImage from '@assets/sciventure-ui_1766807438163.png';
import oxygenImage from '@assets/oxygen_1766807438167.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col gap-0">
      <div className="w-full">
        <img 
          src={meowImage} 
          alt="Meow Mockup" 
          className="w-full h-auto block"
        />
      </div>
      <div className="w-full">
        <img 
          src={sciventureImage} 
          alt="Sciventure Mockup" 
          className="w-full h-auto block"
        />
      </div>
      <div className="w-full">
        <img 
          src={oxygenImage} 
          alt="Oxygen Mockup" 
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
};

export default Index;
