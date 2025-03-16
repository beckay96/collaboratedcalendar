
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NavigationButtonsProps {
  itemType?: string;
  originalId?: string;
  onClose: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ 
  itemType, 
  originalId,
  onClose 
}) => {
  const navigate = useNavigate();

  const navigateToAssistant = () => {
    if (itemType === 'lesson' && originalId) {
      console.log('Navigating to Assignment Assistant for lesson:', originalId);
      navigate(`/assignment-assistant/${originalId}`);
      onClose();
    }
  };

  const navigateToClassCompass = () => {
    if (itemType === 'class_plan' && originalId) {
      console.log('Navigating to Class Compass for class plan:', originalId);
      navigate(`/class-compass/${originalId}`);
      onClose();
    }
  };

  if (!itemType || (!['lesson', 'class_plan'].includes(itemType))) {
    return null;
  }

  return (
    <div className="mt-4">
      {itemType === 'lesson' && (
        <Button onClick={navigateToAssistant} variant="outline">
          <ExternalLink className="w-4 h-4 mr-2" />
          Go to Assignment Assistant
        </Button>
      )}
      
      {itemType === 'class_plan' && (
        <Button onClick={navigateToClassCompass} variant="outline">
          <ExternalLink className="w-4 h-4 mr-2" />
          Go to Class Compass
        </Button>
      )}
    </div>
  );
};

export default NavigationButtons;
